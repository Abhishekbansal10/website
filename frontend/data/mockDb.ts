import { Project, BlogPost } from '../types.ts';

export const projectsDb: Project[] = [
    {
        id: 'p1',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management, Stripe integration, and an admin dashboard.',
        imageUrl: 'https://picsum.photos/seed/ecommerce/800/600',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
        featured: true
    },
    {
        id: 'p2',
        title: 'AI Content Generator',
        description: 'SaaS application leveraging OpenAI API to generate marketing copy, blog posts, and social media content.',
        imageUrl: 'https://picsum.photos/seed/ai/800/600',
        technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma'],
        githubUrl: 'https://github.com',
        featured: true
    },
    {
        id: 'p3',
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates, drag-and-drop boards, and team workspaces.',
        imageUrl: 'https://picsum.photos/seed/task/800/600',
        technologies: ['Vue.js', 'Firebase', 'Vuex', 'CSS Modules'],
        liveUrl: 'https://example.com',
        featured: false
    },
    {
        id: 'p4',
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard providing real-time forecasts, historical data, and interactive maps.',
        imageUrl: 'https://picsum.photos/seed/weather/800/600',
        technologies: ['React', 'D3.js', 'Weather API'],
        githubUrl: 'https://github.com',
        featured: false
    }
];

export const blogDb: BlogPost[] = [
    {
        id: 'b1',
        title: 'Building Scalable React Applications',
        excerpt: 'Learn the best practices for structuring large-scale React applications, managing state, and optimizing performance.',
        content: 'Full content goes here...',
        date: '2023-10-15',
        readTime: 8,
        tags: ['React', 'Architecture', 'Performance']
    },
    {
        id: 'b2',
        title: 'The Power of TypeScript in Modern Web Dev',
        excerpt: 'Why TypeScript has become the industry standard and how it can save you from countless runtime errors.',
        content: 'Full content goes here...',
        date: '2023-09-22',
        readTime: 5,
        tags: ['TypeScript', 'JavaScript']
    },
    {
        id: 'b3',
        title: 'Mastering Tailwind CSS',
        excerpt: 'Tips and tricks for building beautiful, responsive user interfaces rapidly using Tailwind CSS utility classes.',
        content: 'Full content goes here...',
        date: '2023-08-10',
        readTime: 6,
        tags: ['CSS', 'Tailwind', 'Design']
    }
];
