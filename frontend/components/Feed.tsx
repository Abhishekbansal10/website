import React from 'react';
import StoryTray from './StoryTray.tsx';
import PostCard from './PostCard.tsx';
import { stories, posts } from '../mockData.ts';

const Feed: React.FC = () => {
    return (
        <div className="w-full pb-16 md:pb-0">
            <StoryTray stories={stories} />
            <div className="flex flex-col items-center w-full">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;
