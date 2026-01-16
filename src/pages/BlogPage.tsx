import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/FooterSection';
import StarField from '@/components/ui/StarField';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0118] relative">
            <StarField />
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                {/* Hero / Header */}
                <header className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200 drop-shadow-xl tracking-tight">
                            Insights & Journal
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Deep dives into the future of agency growth, AI technology, and sustainable business scaling.
                        </p>
                    </motion.div>
                </header>

                {/* Featured / Recent Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {blogPosts.map((post, index) => (
                        <div key={post.id} className={index === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
                            <Link to={`/blog/${post.id}`} className="block h-full">
                                <BlogCard post={post} index={index} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Newsletter / CTA Section (Optional Bottom) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center border-t border-white/5 pt-16"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">Stay ahead of the curve</h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        Join 15,000+ agency founders receiving our weekly breakdown of what's working now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors flex-1"
                        />
                        <button className="btn-primary whitespace-nowrap px-6 py-3 rounded-xl font-medium">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;
