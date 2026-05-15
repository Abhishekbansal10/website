import React, { useState } from 'react';
import { currentUser, currentUserPosts } from '../mockData.ts';
import { Grid, Film, UserSquare2 } from './Icons.tsx';

const Profile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'tagged'>('posts');

    return (
        <div className="w-full max-w-4xl mx-auto pt-4 md:pt-8 pb-16 md:pb-0 px-4 sm:px-0">
            {/* Profile Header */}
            <header className="flex flex-col md:flex-row md:items-start mb-8 md:mb-12">
                {/* Avatar */}
                <div className="flex-shrink-0 mr-8 md:mr-16 mb-4 md:mb-0 flex justify-center md:justify-start md:w-1/3">
                    <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border border-gray-200">
                        <img 
                            src={currentUser.avatarUrl} 
                            alt={currentUser.username} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-grow md:w-2/3">
                    <div className="flex flex-col md:flex-row md:items-center mb-4 space-y-3 md:space-y-0 md:space-x-4">
                        <h2 className="text-xl font-normal">{currentUser.username}</h2>
                        <div className="flex space-x-2">
                            <button className="bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 px-4 rounded-lg text-sm transition-colors">
                                Edit profile
                            </button>
                            <button className="bg-gray-100 hover:bg-gray-200 text-black font-semibold py-1.5 px-4 rounded-lg text-sm transition-colors">
                                View archive
                            </button>
                        </div>
                    </div>

                    {/* Stats (Desktop) */}
                    <ul className="hidden md:flex space-x-10 mb-4">
                        <li><span className="font-semibold">{currentUser.stats?.posts}</span> posts</li>
                        <li className="cursor-pointer"><span className="font-semibold">{currentUser.stats?.followers}</span> followers</li>
                        <li className="cursor-pointer"><span className="font-semibold">{currentUser.stats?.following}</span> following</li>
                    </ul>

                    {/* Bio */}
                    <div className="text-sm">
                        <p className="font-semibold">{currentUser.fullName}</p>
                        <p className="whitespace-pre-line">{currentUser.bio}</p>
                    </div>
                </div>
            </header>

            {/* Stats (Mobile) */}
            <ul className="flex md:hidden justify-around border-t border-gray-200 py-3 text-sm text-center">
                <li className="flex flex-col"><span className="font-semibold">{currentUser.stats?.posts}</span> <span className="text-ig-textSecondary">posts</span></li>
                <li className="flex flex-col"><span className="font-semibold">{currentUser.stats?.followers}</span> <span className="text-ig-textSecondary">followers</span></li>
                <li className="flex flex-col"><span className="font-semibold">{currentUser.stats?.following}</span> <span className="text-ig-textSecondary">following</span></li>
            </ul>

            {/* Tabs */}
            <div className="border-t border-gray-200 flex justify-center space-x-12 text-xs font-semibold tracking-widest text-ig-textSecondary">
                <button 
                    onClick={() => setActiveTab('posts')}
                    className={`flex items-center space-x-2 py-4 border-t-2 transition-colors ${activeTab === 'posts' ? 'border-black text-black' : 'border-transparent hover:text-black'}`}
                >
                    <Grid size={14} />
                    <span className="hidden md:inline">POSTS</span>
                </button>
                <button 
                    onClick={() => setActiveTab('reels')}
                    className={`flex items-center space-x-2 py-4 border-t-2 transition-colors ${activeTab === 'reels' ? 'border-black text-black' : 'border-transparent hover:text-black'}`}
                >
                    <Film size={14} />
                    <span className="hidden md:inline">REELS</span>
                </button>
                <button 
                    onClick={() => setActiveTab('tagged')}
                    className={`flex items-center space-x-2 py-4 border-t-2 transition-colors ${activeTab === 'tagged' ? 'border-black text-black' : 'border-transparent hover:text-black'}`}
                >
                    <UserSquare2 size={14} />
                    <span className="hidden md:inline">TAGGED</span>
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-1 md:gap-4">
                {currentUserPosts.map(post => (
                    <div key={post.id} className="aspect-square relative group cursor-pointer bg-gray-100">
                        <img 
                            src={post.imageUrl} 
                            alt={post.caption} 
                            className="w-full h-full object-cover"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-6 text-white font-bold">
                                <div className="flex items-center space-x-2">
                                    <Heart className="fill-white" size={20} />
                                    <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MessageCircle className="fill-white" size={20} />
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
