import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Link2, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import { blogPosts } from '@/data/blogPosts';
import { useEffect, useState } from 'react';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === Number(id));
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-transparent text-white flex items-center justify-center">
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
        <div className="min-h-screen bg-transparent relative font-sans text-gray-200">
            {/* StarField handled globally */}
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
                        prose-headings:font-bold prose-headings:text-white prose-headings:mt-12 prose-headings:mb-6
                        prose-h2:text-3xl prose-h2:border-b prose-h2:border-purple-500/20 prose-h2:pb-4
                        prose-h3:text-xl prose-h3:text-purple-200
                        prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                        prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-purple-900/30 prose-blockquote:to-transparent prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-purple-100 prose-blockquote:font-medium prose-blockquote:my-10
                        prose-ul:my-6 prose-ul:space-y-3
                        prose-li:text-gray-300 prose-li:marker:text-purple-400
                        prose-strong:text-white prose-strong:font-semibold
                        prose-img:rounded-2xl prose-img:shadow-2xl prose-img:shadow-purple-900/30 prose-img:border prose-img:border-white/10
                        prose-figure:my-12 prose-figure:mx-0
                        prose-figcaption:text-center prose-figcaption:text-gray-400 prose-figcaption:text-sm prose-figcaption:mt-4 prose-figcaption:italic
                        [&_.lead]:text-xl [&_.lead]:text-gray-200 [&_.lead]:font-medium [&_.lead]:leading-relaxed [&_.lead]:mb-8"
                        dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                    />

                    {/* Share Section */}
                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <motion.button
                            onClick={handleCopyLink}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${copied
                                ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                                : 'bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 hover:border-purple-500/50'
                                }`}
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4" />
                                    Link Copied!
                                </>
                            ) : (
                                <>
                                    <Link2 className="w-4 h-4" />
                                    Copy Link
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPostPage;
