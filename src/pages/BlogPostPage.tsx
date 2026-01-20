import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Link2, Check, Twitter, Linkedin, Facebook, BookOpen, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import { blogPosts } from '@/data/blogPosts';
import { useEffect, useState } from 'react';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = blogPosts.find(p => p.id === Number(id));
    const [copied, setCopied] = useState(false);

    // Reading progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post?.category && p.id !== post?.id)
        .slice(0, 3);

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

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title || '')}&url=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
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
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 z-50 origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            <article className="relative z-10 pt-24 pb-24">
                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <nav className="flex items-center gap-2 text-sm text-gray-400">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-purple-400">{post.category}</span>
                    </nav>
                </div>

                {/* Main Content Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Article Column */}
                        <div className="lg:col-span-8">
                            {/* Article Header */}
                            <motion.header
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-10"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 text-xs font-bold tracking-wider text-purple-900 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full uppercase">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-sm text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                    {post.excerpt}
                                </p>

                                {/* Author & Date Row */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-14 h-14 rounded-full border-2 border-purple-500/50 shadow-lg shadow-purple-500/20"
                                        />
                                        <div>
                                            <p className="font-semibold text-white">{post.author.name}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Calendar className="w-4 h-4" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500 mr-2">Share:</span>
                                        <button
                                            onClick={shareOnTwitter}
                                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-all"
                                        >
                                            <Twitter className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={shareOnLinkedIn}
                                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={shareOnFacebook}
                                            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2]/50 transition-all"
                                        >
                                            <Facebook className="w-4 h-4" />
                                        </button>
                                        <motion.button
                                            onClick={handleCopyLink}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${copied
                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                                                    : 'bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/50'
                                                }`}
                                        >
                                            {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.header>

                            {/* Featured Image */}
                            <motion.figure
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mb-12"
                            >
                                <div className="relative overflow-hidden rounded-2xl">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-[400px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </motion.figure>

                            {/* Article Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <div
                                    className="prose prose-lg prose-invert prose-purple max-w-none 
                                    prose-headings:font-bold prose-headings:text-white prose-headings:mt-10 prose-headings:mb-5
                                    prose-h2:text-2xl prose-h2:border-l-4 prose-h2:border-purple-500 prose-h2:pl-4 prose-h2:py-1
                                    prose-h3:text-xl prose-h3:text-purple-200
                                    prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:mb-5
                                    prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 hover:prose-a:underline
                                    prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-purple-900/20 prose-blockquote:to-transparent prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-purple-100 prose-blockquote:my-8
                                    prose-ul:my-5 prose-ul:space-y-2
                                    prose-ol:my-5 prose-ol:space-y-2
                                    prose-li:text-gray-300 prose-li:marker:text-purple-400
                                    prose-strong:text-white prose-strong:font-semibold
                                    prose-img:rounded-xl prose-img:shadow-xl prose-img:shadow-purple-900/20 prose-img:border prose-img:border-white/5 prose-img:my-8
                                    prose-figure:my-10 prose-figure:mx-0
                                    prose-figcaption:text-center prose-figcaption:text-gray-500 prose-figcaption:text-sm prose-figcaption:mt-3 prose-figcaption:italic
                                    prose-code:text-purple-300 prose-code:bg-purple-900/30 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                                    prose-pre:bg-[#1a0a2e] prose-pre:border prose-pre:border-purple-500/20"
                                    dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
                                />
                            </motion.div>

                            {/* Article Footer */}
                            <div className="mt-16 pt-8 border-t border-white/10">
                                {/* Tags */}
                                <div className="flex flex-wrap items-center gap-3 mb-8">
                                    <span className="text-sm text-gray-500">Topics:</span>
                                    <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20">
                                        {post.category}
                                    </span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm border border-white/10">
                                        Marketing
                                    </span>
                                    <span className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm border border-white/10">
                                        Growth
                                    </span>
                                </div>

                                {/* Author Bio Card */}
                                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/10 rounded-2xl p-6 border border-purple-500/20">
                                    <div className="flex flex-col sm:flex-row gap-5">
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-20 h-20 rounded-xl border-2 border-purple-500/30 object-cover"
                                        />
                                        <div>
                                            <p className="text-xs text-purple-400 uppercase tracking-wider mb-1">Written by</p>
                                            <h4 className="text-xl font-bold text-white mb-2">{post.author.name}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Expert in digital marketing, growth strategies, and client acquisition.
                                                Helping businesses scale through data-driven insights and innovative solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="mt-10 flex justify-between items-center">
                                    <Link
                                        to="/blog"
                                        className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" /> Back to all articles
                                    </Link>
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
                                                Share Article
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-24 space-y-8">
                                {/* Quick Info Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="bg-gradient-to-b from-purple-900/20 to-transparent rounded-2xl p-6 border border-purple-500/20"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <BookOpen className="w-5 h-5 text-purple-400" />
                                        <h3 className="font-semibold text-white">Quick Info</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Reading time</span>
                                            <span className="text-white">{post.readTime}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Published</span>
                                            <span className="text-white">{post.date}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Category</span>
                                            <span className="text-purple-400">{post.category}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Related Articles */}
                                {relatedPosts.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="bg-white/5 rounded-2xl p-6 border border-white/10"
                                    >
                                        <h3 className="font-semibold text-white mb-5">Related Articles</h3>
                                        <div className="space-y-5">
                                            {relatedPosts.map((relatedPost) => (
                                                <Link
                                                    key={relatedPost.id}
                                                    to={`/blog/${relatedPost.id}`}
                                                    className="group block"
                                                >
                                                    <div className="flex gap-4">
                                                        <img
                                                            src={relatedPost.image}
                                                            alt={relatedPost.title}
                                                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-white/10 group-hover:border-purple-500/50 transition-colors"
                                                        />
                                                        <div>
                                                            <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                                                                {relatedPost.title}
                                                            </h4>
                                                            <p className="text-xs text-gray-500 mt-1">{relatedPost.readTime}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* CTA Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="bg-gradient-to-br from-purple-600/30 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30"
                                >
                                    <h3 className="font-bold text-white text-lg mb-2">Ready to grow?</h3>
                                    <p className="text-gray-400 text-sm mb-5">
                                        Let's discuss how we can help scale your business with proven strategies.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 bg-white text-purple-900 rounded-full font-semibold text-sm hover:bg-purple-50 transition-colors"
                                    >
                                        Book a Free Call
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogPostPage;
