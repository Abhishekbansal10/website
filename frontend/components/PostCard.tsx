import React, { useState } from 'react';
import { Post } from '../types.ts';
import { MoreHorizontal, Heart, MessageCircle, Send, Bookmark } from './Icons.tsx';

interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [likesCount, setLikesCount] = useState(post.likes);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    return (
        <article className="bg-white border-b sm:border sm:border-ig-border sm:rounded-lg mb-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                        <img 
                            src={post.user.avatarUrl} 
                            alt={post.user.username} 
                            className="w-full h-full rounded-full object-cover border border-white"
                        />
                    </div>
                    <div>
                        <div className="flex items-center space-x-1">
                            <span className="font-semibold text-sm hover:text-gray-500">{post.user.username}</span>
                            {post.user.isVerified && (
                                <svg aria-label="Verified" className="w-3 h-3 text-ig-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-8 8z"></path>
                                </svg>
                            )}
                            <span className="text-ig-textSecondary text-sm">• {post.createdAt.split(' ')[0]}{post.createdAt.split(' ')[1].charAt(0).toLowerCase()}</span>
                        </div>
                        {post.location && <p className="text-xs text-ig-textSecondary">{post.location}</p>}
                    </div>
                </div>
                <button className="p-2 hover:text-gray-500">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* Image */}
            <div className="w-full bg-black flex items-center justify-center overflow-hidden max-h-[800px]">
                <img 
                    src={post.imageUrl} 
                    alt={`Post by ${post.user.username}`} 
                    className="w-full h-auto object-contain max-h-[800px]"
                    onDoubleClick={handleLike}
                />
            </div>

            {/* Actions */}
            <div className="p-3 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                        <button onClick={handleLike} className="hover:text-gray-500 transition-colors">
                            <Heart size={24} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                        </button>
                        <button className="hover:text-gray-500 transition-colors">
                            <MessageCircle size={24} />
                        </button>
                        <button className="hover:text-gray-500 transition-colors">
                            <Send size={24} />
                        </button>
                    </div>
                    <button onClick={() => setIsSaved(!isSaved)} className="hover:text-gray-500 transition-colors">
                        <Bookmark size={24} className={isSaved ? "fill-black" : ""} />
                    </button>
                </div>

                {/* Likes */}
                <div className="font-semibold text-sm mb-1">
                    {likesCount.toLocaleString()} likes
                </div>

                {/* Caption */}
                <div className="text-sm mb-1">
                    <span className="font-semibold mr-2 cursor-pointer hover:text-gray-500">{post.user.username}</span>
                    <span>{post.caption}</span>
                </div>

                {/* Comments Preview */}
                {post.comments.length > 0 && (
                    <div className="text-sm text-ig-textSecondary cursor-pointer mb-1">
                        View all {post.comments.length} comments
                    </div>
                )}

                {/* Add Comment */}
                <div className="flex items-center mt-2 border-t border-gray-100 pt-2 sm:border-none sm:pt-0">
                    <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        className="w-full text-sm outline-none placeholder-ig-textSecondary"
                    />
                    <button className="text-ig-primary font-semibold text-sm ml-2 opacity-50 hover:opacity-100">
                        Post
                    </button>
                </div>
            </div>
        </article>
    );
};

export default PostCard;
