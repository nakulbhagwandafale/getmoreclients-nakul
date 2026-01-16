import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import StarField from '@/components/ui/StarField';
import { blogPosts } from '@/data/blogPosts';
import { useEffect } from 'react';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen bg-[#0a0118] text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Post not found</h2>
                    <Link to="/blog" className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0118] relative font-sans text-gray-200">
            <StarField />
            <Navbar />

            <article className="relative z-10 pt-32 pb-24">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-[50vh] min-h-[400px] relative mb-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/60 to-transparent z-10" />
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 w-full z-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-12">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-medium"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Blog
                        </Link>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 text-xs font-bold tracking-wider text-purple-900 bg-purple-200 rounded-full uppercase">
                                    {post.category}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-300">
                                <div className="flex items-center gap-2">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-purple-500/50" />
                                    <span className="font-medium text-white">{post.author.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-purple-400" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-pink-400" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div
                        className="prose prose-lg prose-invert prose-purple max-w-none 
                        prose-headings:font-bold prose-headings:text-white 
                        prose-p:text-gray-300 prose-p:leading-relaxed 
                        prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                        prose-blockquote:border-l-purple-500 prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                        dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                    />

                    {/* Share / Tags / Bottom Navigation could go here */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center text-gray-400">
                        <span>Share this article</span>
                        <div className="flex gap-4">
                            {/* Social Icons Placeholder */}
                        </div>
                    </div>
                </motion.div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPostPage;
