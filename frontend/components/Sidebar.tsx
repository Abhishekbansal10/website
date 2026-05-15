import React from 'react';
import { 
    Home, Search, PlusSquare, Film, MessageCircle, Heart, Menu, Instagram 
} from './Icons.tsx';
import { currentUser } from '../mockData.ts';

interface SidebarProps {
    currentView: 'home' | 'profile';
    setCurrentView: (view: 'home' | 'profile') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
    const navItems = [
        { icon: Home, label: 'Home', view: 'home' as const, active: currentView === 'home' },
        { icon: Search, label: 'Search' },
        { icon: Film, label: 'Reels' },
        { icon: MessageCircle, label: 'Messages' },
        { icon: Heart, label: 'Notifications' },
        { icon: PlusSquare, label: 'Create' },
    ];

    return (
        <div className="hidden md:flex flex-col w-[72px] xl:w-64 h-screen fixed left-0 top-0 border-r border-ig-border bg-white px-3 py-8 z-50 transition-all duration-300">
            {/* Logo */}
            <div className="mb-10 px-3 flex items-center h-10 cursor-pointer" onClick={() => setCurrentView('home')}>
                <Instagram size={28} className="xl:hidden transition-transform hover:scale-105" />
                <span className="hidden xl:block font-serif text-2xl tracking-wider font-bold">InstaClone</span>
            </div>

            {/* Nav Links */}
            <nav className="flex-grow space-y-2">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = item.active;
                    return (
                        <div 
                            key={index}
                            onClick={() => item.view && setCurrentView(item.view)}
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-100 group ${isActive ? 'font-bold' : ''}`}
                        >
                            <div className="relative transition-transform group-hover:scale-105">
                                <Icon size={24} className={isActive ? "stroke-[2.5px]" : ""} />
                            </div>
                            <span className={`hidden xl:block ml-4 text-[15px] ${isActive ? 'font-bold' : 'font-normal'}`}>
                                {item.label}
                            </span>
                        </div>
                    );
                })}

                {/* Profile Link */}
                <div 
                    onClick={() => setCurrentView('profile')}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-100 group ${currentView === 'profile' ? 'font-bold' : ''}`}
                >
                    <div className={`w-6 h-6 rounded-full overflow-hidden transition-transform group-hover:scale-105 ${currentView === 'profile' ? 'border-2 border-black' : 'border border-gray-300'}`}>
                        <img src={currentUser.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <span className={`hidden xl:block ml-4 text-[15px] ${currentView === 'profile' ? 'font-bold' : 'font-normal'}`}>
                        Profile
                    </span>
                </div>
            </nav>

            {/* Bottom Menu */}
            <div className="mt-auto">
                <div className="flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-100 group">
                    <Menu size={24} className="transition-transform group-hover:scale-105" />
                    <span className="hidden xl:block ml-4 text-[15px]">More</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
