import React, { useEffect, useState } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { api } from '../services/api.ts';
import { Project } from '../types.ts';

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await api.getProjects();
            if (response.data) {
                setProjects(response.data);
            }
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
            <div className="mb-16 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">My Projects</h1>
                <p className="text-lg text-slate-600">
                    A collection of applications I've built. This data is fetched dynamically from the simulated backend API layer.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-32">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 flex-grow">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 mt-auto">
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                            <Code2 size={16} className="mr-1.5" /> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                                            <ExternalLink size={16} className="mr-1.5" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
