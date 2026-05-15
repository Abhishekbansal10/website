import { User, Post, Story } from './types.ts';

export const currentUser: User = {
    id: 'u1',
    username: 'alex_dev',
    fullName: 'Alex Developer',
    avatarUrl: 'https://picsum.photos/seed/alex/150/150',
    isVerified: true,
    stats: {
        posts: 42,
        followers: 1337,
        following: 256
    },
    bio: 'Building cool things on the web. 🚀\nReact | TypeScript | Tailwind'
};

const users: User[] = [
    { id: 'u2', username: 'travel_diaries', fullName: 'Sarah Jenkins', avatarUrl: 'https://picsum.photos/seed/sarah/150/150' },
    { id: 'u3', username: 'foodie_eats', fullName: 'Mike Chen', avatarUrl: 'https://picsum.photos/seed/mike/150/150', isVerified: true },
    { id: 'u4', username: 'art_by_mia', fullName: 'Mia Wong', avatarUrl: 'https://picsum.photos/seed/mia/150/150' },
    { id: 'u5', username: 'tech_guru', fullName: 'David Smith', avatarUrl: 'https://picsum.photos/seed/david/150/150' },
    { id: 'u6', username: 'nature_shots', fullName: 'Emma Davis', avatarUrl: 'https://picsum.photos/seed/emma/150/150' },
];

export const stories: Story[] = users.map((user, index) => ({
    id: `s${index}`,
    user,
    hasUnseen: index < 4 // First 4 have unseen stories
}));

export const posts: Post[] = [
    {
        id: 'p1',
        user: users[0],
        imageUrl: 'https://picsum.photos/seed/post1/800/1000',
        caption: 'Exploring the hidden gems of the city today. The architecture here is just breathtaking! 🏙️✨ #travel #cityscape',
        likes: 1245,
        location: 'Kyoto, Japan',
        createdAt: '2 HOURS AGO',
        comments: [
            { id: 'c1', user: users[1], text: 'Wow, looks amazing!', likes: 12, createdAt: '1h' },
            { id: 'c2', user: users[3], text: 'Take me there next time!', likes: 3, createdAt: '30m' }
        ]
    },
    {
        id: 'p2',
        user: users[1],
        imageUrl: 'https://picsum.photos/seed/post2/800/800',
        caption: 'Best ramen I have ever had. The broth was simmered for 24 hours. 🍜🤤',
        likes: 892,
        location: 'Ichiran Ramen',
        createdAt: '5 HOURS AGO',
        comments: [
            { id: 'c3', user: currentUser, text: 'I need this right now.', likes: 5, createdAt: '2h' }
        ]
    },
    {
        id: 'p3',
        user: users[2],
        imageUrl: 'https://picsum.photos/seed/post3/1080/1350',
        caption: 'Latest watercolor piece. Trying to capture the essence of spring. 🌸🎨',
        likes: 3421,
        createdAt: '1 DAY AGO',
        comments: []
    },
    {
        id: 'p4',
        user: users[4],
        imageUrl: 'https://picsum.photos/seed/post4/800/800',
        caption: 'Lost in the woods. Nature is the best therapy. 🌲⛰️',
        likes: 567,
        location: 'Yosemite National Park',
        createdAt: '2 DAYS AGO',
        comments: [
             { id: 'c4', user: users[0], text: 'Beautiful shot!', likes: 1, createdAt: '1d' }
        ]
    }
];

export const currentUserPosts: Post[] = Array.from({ length: 12 }).map((_, i) => ({
    id: `cp${i}`,
    user: currentUser,
    imageUrl: `https://picsum.photos/seed/mypost${i}/800/800`,
    caption: `My post number ${i + 1}`,
    likes: Math.floor(Math.random() * 500),
    createdAt: '1 WEEK AGO',
    comments: []
}));
