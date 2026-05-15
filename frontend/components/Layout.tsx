import React, { useState, useEffect } from 'react';
import { Menu, X, GitBranch, Briefcase, Mail, Terminal } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    currentPath: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPath }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '' },
        { name: 'Projects', path: 'projects' },
        { name: 'Blog', path: 'blog' },
        { name: 'Contact', path: 'contact' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-2 text-slate-900 font-bold text-xl tracking-tight">
                        <Terminal className="text-brand-600" size={24} />
                        <span>Alex.dev</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={`#${link.path}`}
                                className={`text-sm font-medium transition-colors hover:text-brand-600 ${currentPath === link.path ? 'text-brand-600' : 'text-slate-600'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-slate-600 hover:text-slate-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={`#${link.path}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-base font-medium ${currentPath === link.path ? 'text-brand-600' : 'text-slate-600'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-24 pb-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 flex items-center space-x-2">
                        <Terminal className="text-brand-500" size={20} />
                        <span className="text-white font-semibold tracking-tight">Alex.dev</span>
                    </div>
                    
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="#" className="hover:text-white transition-colors"><GitBranch size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Briefcase size={20} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>

                    <div className="text-sm">
                        &copy; {new Date().getFullYear()} Alex Developer. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
