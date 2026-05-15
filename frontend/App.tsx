import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Blog from './pages/Blog.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
    // Simple hash-based router
    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            setCurrentPath(hash);
            window.scrollTo(0, 0);
        };

        // Set initial path
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        switch (currentPath) {
            case 'projects':
                return <Projects />;
            case 'blog':
                return <Blog />;
            case 'contact':
                return <Contact />;
            case '':
            case 'home':
            default:
                return <Home />;
        }
    };

    return (
        <Layout currentPath={currentPath}>
            {renderPage()}
        </Layout>
    );
};

export default App;
