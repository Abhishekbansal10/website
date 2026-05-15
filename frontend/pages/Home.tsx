import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Database, Layout as LayoutIcon } from 'lucide-react';
import { api } from '../services/api.ts';
import { Project } from '../types.ts';

const Home: React.FC = () => {
    const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            const response = await api.getFeaturedProjects();
            if (response.data) {
                setFeaturedProjects(response.data);
            }
            setLoading(false);
        };
        fetchFeatured();
    }, []);

    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 pr-0 md:pr-12 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-semibold mb-6 border border-brand-100">
                        Full-Stack Developer
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                        Building digital <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">experiences</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto md:mx-0">
                        I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using React, Node.js, and modern web technologies.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center">
                            View My Work <ArrowRight size={18} className="ml-2" />
                        </a>
                        <a href="#contact" className="w-full sm:w-auto px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="md:w-2/5 mt-16 md:mt-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-blue-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                    <img 
                        src="https://picsum.photos/seed/developer/600/700" 
                        alt="Developer Workspace" 
                        className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                    />
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-white py-20 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What I Do</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">I build full-stack applications from the ground up, focusing on performance, scalability, and user experience.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-xl flex items-center justify-center mb-6">
                                <LayoutIcon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Frontend Development</h3>
                            <p className="text-slate-600">Creating responsive, interactive, and accessible user interfaces using React, Vue, and modern CSS frameworks like Tailwind.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <Database size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Backend Architecture</h3>
                            <p className="text-slate-600">Designing robust APIs and database schemas using Node.js, Express, PostgreSQL, and MongoDB for scalable applications.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <Code size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Clean Code</h3>
                            <p className="text-slate-600">Writing maintainable, testable, and well-documented code following industry best practices and design patterns.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Preview */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Work</h2>
                        <p className="text-slate-600">Some of my recent projects fetched from the simulated backend.</p>
                    </div>
                    <a href="#projects" className="hidden md:flex items-center text-brand-600 font-medium hover:text-brand-700">
                        View all projects <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map(project => (
                            <div key={project.id} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 overflow-hidden">
                                    <img 
                                        src={project.imageUrl} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                                    <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full font-mono">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="mt-8 text-center md:hidden">
                    <a href="#projects" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700">
                        View all projects <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
