import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { api } from '../services/api.ts';
import { BlogPost } from '../types.ts';

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await api.getBlogPosts();
            if (response.data) {
                setPosts(response.data);
            }
            setLoading(false);
        };
        fetchPosts();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Writing</h1>
                <p className="text-lg text-slate-600">
                    Thoughts, tutorials, and insights about software development, architecture, and technology.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-32">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
                </div>
            ) : (
                <div className="space-y-10">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                                <div className="flex items-center">
                                    <Calendar size={14} className="mr-1.5" />
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                                <div className="flex items-center">
                                    <Clock size={14} className="mr-1.5" />
                                    {post.readTime} min read
                                </div>
                            </div>
                            
                            <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                                {post.title}
                            </h2>
                            
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="flex items-center text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                                    Read more <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;
