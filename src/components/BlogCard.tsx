import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { GradientBorderCard } from './ui/gradient-border-card';
import { type BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group h-full cursor-pointer"
        >
            <GradientBorderCard className="h-full bg-[#0a0118]/80 flex flex-col p-5">
                {/* Image Container */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                    <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-purple-200 uppercase bg-purple-900/80 backdrop-blur-md border border-purple-500/30 rounded-full shadow-lg">
                            {post.category}
                        </span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-blue-400" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-pink-400" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                    </p>

                    {/* Author & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-3">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full border border-white/10"
                            />
                            <span className="text-sm text-gray-300 font-medium">{post.author.name}</span>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </GradientBorderCard>
        </motion.div>
    );
};

export default BlogCard;
