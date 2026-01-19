import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import { useEffect } from 'react';

const TermsOfServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-transparent relative font-sans text-gray-200">
            <Navbar />

            <article className="relative z-10 pt-32 pb-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-8 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <FileText className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
                            <p className="text-gray-400 mt-1">Last updated: January 19, 2026</p>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
                >
                    <div className="prose prose-lg prose-invert prose-purple max-w-none
                        prose-headings:font-bold prose-headings:text-white prose-headings:mt-10 prose-headings:mb-4
                        prose-h2:text-2xl prose-h2:border-b prose-h2:border-purple-500/20 prose-h2:pb-3
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-ul:text-gray-300 prose-li:text-gray-300
                        prose-strong:text-white">

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Welcome to GetMoreClients. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
                        </p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.</p>

                        <h2>2. Description of Services</h2>
                        <p>GetMoreClients provides digital marketing, lead generation, and business growth services including but not limited to:</p>
                        <ul>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Pay-Per-Click Advertising (PPC)</li>
                            <li>Social Media Marketing</li>
                            <li>Content Marketing</li>
                            <li>Email Marketing and Automation</li>
                            <li>Marketing Consultation</li>
                        </ul>

                        <h2>3. User Obligations</h2>
                        <p>When using our services, you agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Not use our services for any unlawful purpose</li>
                            <li>Not interfere with or disrupt our services</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>

                        <h2>4. Intellectual Property</h2>
                        <p>All content on our website, including text, graphics, logos, images, and software, is the property of GetMoreClients and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>

                        <h2>5. Payment Terms</h2>
                        <p>For paid services:</p>
                        <ul>
                            <li>Payment is due as specified in your service agreement</li>
                            <li>All fees are non-refundable unless otherwise stated</li>
                            <li>We reserve the right to modify pricing with 30 days notice</li>
                            <li>Late payments may result in service suspension</li>
                        </ul>

                        <h2>6. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, GetMoreClients shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the services in question.</p>

                        <h2>7. Disclaimer of Warranties</h2>
                        <p>Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific results from our marketing services, as outcomes depend on various factors beyond our control.</p>

                        <h2>8. Indemnification</h2>
                        <p>You agree to indemnify and hold harmless GetMoreClients, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.</p>

                        <h2>9. Termination</h2>
                        <p>Either party may terminate services with written notice as specified in the service agreement. Upon termination, you must pay for all services rendered up to the termination date.</p>

                        <h2>10. Governing Law</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.</p>

                        <h2>11. Changes to Terms</h2>
                        <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified Terms.</p>

                        <h2>12. Contact Information</h2>
                        <p>For questions about these Terms, please contact us:</p>
                        <ul>
                            <li>Email: legal@getmoreclients.in</li>
                            <li>Website: <Link to="/contact" className="text-purple-400 hover:text-purple-300">Contact Page</Link></li>
                        </ul>
                    </div>
                </motion.div>
            </article>

            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
