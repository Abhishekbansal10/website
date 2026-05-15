import React from 'react';
import { Story } from '../types.ts';
import { currentUser } from '../mockData.ts';

interface StoryTrayProps {
    stories: Story[];
}

const StoryTray: React.FC<StoryTrayProps> = ({ stories }) => {
    return (
        <div className="w-full bg-white border-b border-ig-border py-4 mb-4">
            <div className="flex space-x-4 overflow-x-auto no-scrollbar px-4 max-w-2xl mx-auto">
                {/* Current User Story (Add) */}
                <div className="flex flex-col items-center space-y-1 cursor-pointer flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-full">
                        <img 
                            src={currentUser.avatarUrl} 
                            alt="Your story" 
                            className="w-full h-full rounded-full object-cover border border-gray-200"
                        />
                        <div className="absolute bottom-0 right-0 bg-ig-primary text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-white text-xs font-bold">
                            +
                        </div>
                    </div>
                    <span className="text-xs text-ig-textSecondary truncate w-16 text-center">Your story</span>
                </div>

                {/* Other Users Stories */}
                {stories.map((story) => (
                    <div key={story.id} className="flex flex-col items-center space-y-1 cursor-pointer flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full p-[2px] ${story.hasUnseen ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' : 'bg-gray-200'}`}>
                            <div className="bg-white p-[2px] rounded-full w-full h-full">
                                <img 
                                    src={story.user.avatarUrl} 
                                    alt={`${story.user.username}'s story`} 
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <span className="text-xs text-ig-text truncate w-16 text-center">{story.user.username}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoryTray;
