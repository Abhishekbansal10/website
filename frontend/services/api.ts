import { Project, BlogPost, ContactMessage, ApiResponse } from '../types.ts';
import { projectsDb, blogDb } from '../data/mockDb.ts';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    // --- Projects API ---
    getProjects: async (): Promise<ApiResponse<Project[]>> => {
        await delay(600); // Simulate latency
        return { data: projectsDb, error: null, status: 200 };
    },

    getFeaturedProjects: async (): Promise<ApiResponse<Project[]>> => {
        await delay(400);
        const featured = projectsDb.filter(p => p.featured);
        return { data: featured, error: null, status: 200 };
    },

    // --- Blog API ---
    getBlogPosts: async (): Promise<ApiResponse<BlogPost[]>> => {
        await delay(800);
        return { data: blogDb, error: null, status: 200 };
    },

    // --- Contact API ---
    submitContactForm: async (message: ContactMessage): Promise<ApiResponse<{ success: boolean }>> => {
        await delay(1200); // Simulate processing time
        
        // Basic validation simulation
        if (!message.name || !message.email || !message.message) {
            return { data: null, error: 'All fields are required.', status: 400 };
        }
        if (!message.email.includes('@')) {
            return { data: null, error: 'Invalid email address.', status: 400 };
        }

        console.log('Backend received message:', message);
        return { data: { success: true }, error: null, status: 201 };
    }
};
