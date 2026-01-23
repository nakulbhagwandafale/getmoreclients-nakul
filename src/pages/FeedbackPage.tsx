import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { GradientBorderCard } from '../components/ui/gradient-border-card';
import { IconStar, IconUpload, IconCheck, IconLoader } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        company: '',
        content: '',
        rating: 5,
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRating = (rating: number) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            if (!supabase) throw new Error("Supabase client not initialized");

            let imageUrl = '';

            // 1. Upload Image if exists
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop();
                // Sanitize file name to avoid special char issues in URLs
                const sanitizedFileName = imageFile.name.replace(/[^a-zA-Z0-9]/g, '_');
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}-${sanitizedFileName}.${fileExt}`;

                const { error: uploadError, data } = await supabase.storage
                    .from('testimonial-images')
                    .upload(fileName, imageFile, {
                        cacheControl: '3600',
                        upsert: false
                    });

                if (uploadError) {
                    console.error('Image upload failed:', uploadError);
                    // Decide: Do we stop or continue without image? 
                    // Let's continue without image but warn user via console
                    // throw uploadError; // Uncomment if we want to block submission
                } else if (data) {
                    const { data: publicUrlData } = supabase.storage
                        .from('testimonial-images')
                        .getPublicUrl(fileName);

                    if (publicUrlData) {
                        imageUrl = publicUrlData.publicUrl;
                    }
                }
            }

            // 2. Insert Data
            const { error: insertError } = await supabase
                .from('testimonials')
                .insert([
                    {
                        name: formData.name,
                        designation: formData.designation,
                        company: formData.company,
                        content: formData.content,
                        rating: formData.rating,
                        image_url: imageUrl,
                        approved: true // Auto-approve for demo purposes
                    }
                ]);

            if (insertError) throw insertError;

            setStatus('success');
            setFormData({ name: '', designation: '', company: '', content: '', rating: 5 });
            setImageFile(null);
            setImagePreview(null);

        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0a0118]">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Share Your Experience</h1>
                    <p className="text-gray-400 text-lg">We value your feedback. Tell us how GetMoreClients has helped you grow.</p>
                </div>

                <GradientBorderCard className="p-8 md:p-10">
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <IconCheck className="w-10 h-10 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                            <p className="text-gray-400">Your feedback has been submitted successfully.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                            >
                                Submit Another
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Profile Image Upload */}
                            <div className="flex flex-col items-center mb-8">
                                <div className="relative group cursor-pointer">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                                    />
                                    <div className={`w-32 h-32 rounded-full flex items-center justify-center border-2 border-dashed transition-all duration-300 overflow-hidden ${imagePreview ? 'border-purple-500' : 'border-gray-600 group-hover:border-purple-400 bg-white/5'}`}>
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-center p-2">
                                                <IconUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                                <span className="text-xs text-gray-500">Upload Photo</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full shadow-lg z-10 pointer-events-none">
                                        <IconUpload className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-3">Recommended: Square image, max 2MB</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Designation *</label>
                                    <input
                                        type="text"
                                        name="designation"
                                        required
                                        value={formData.designation}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                                        placeholder="CEO / Founder"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                                    placeholder="Acme Corp (Optional)"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Rating *</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => handleRating(star)}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <IconStar
                                                className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                                stroke={1.5}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Your Feedback *</label>
                                <textarea
                                    name="content"
                                    required
                                    rows={4}
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600 resize-none"
                                    placeholder="Share your experience working with us..."
                                />
                            </div>

                            {status === 'error' && (
                                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <IconLoader className="animate-spin w-5 h-5" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Feedback
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </GradientBorderCard>
            </div>
        </div>
    );
}
