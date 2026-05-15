export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: number;
    tags: string[];
}

export interface ContactMessage {
    name: string;
    email: string;
    message: string;
}

export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    status: number;
}
