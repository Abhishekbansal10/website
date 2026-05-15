import React from 'react';
import { 
    Home, Search, PlusSquare, Film, MessageCircle, Heart, Instagram 
} from './Icons.tsx';
import { currentUser } from '../mockData.ts';

interface MobileNavProps {
    currentView: 'home' | 'profile';
    setCurrentView: (view: 'home' | 'profile') => void;
}

export const MobileTopNav: React.FC = () => {
    return (
        <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-ig-border flex items-center justify-between px-4 z-50">
            <span className="font-serif text-xl tracking-wider font-bold">InstaClone</span>
            <div className="flex items-center space-x-4">
                <div className="relative cursor-pointer">
                    <Heart size={24} />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div className="relative cursor-pointer">
                    <MessageCircle size={24} />
                    <div className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                        3
                    </div>
                </div>
            </div>
        </div>
    );
};

export const MobileBottomNav: React.FC<MobileNavProps> = ({ currentView, setCurrentView }) => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-12 bg-white border-t border-ig-border flex items-center justify-around px-2 z-50 pb-safe">
            <button onClick={() => setCurrentView('home')} className="p-2">
                <Home size={24} className={currentView === 'home' ? "stroke-[2.5px]" : ""} />
            </button>
            <button className="p-2">
                <Search size={24} />
            </button>
            <button className="p-2">
                <PlusSquare size={24} />
            </button>
            <button className="p-2">
                <Film size={24} />
            </button>
            <button onClick={() => setCurrentView('profile')} className="p-2">
                <div className={`w-6 h-6 rounded-full overflow-hidden ${currentView === 'profile' ? 'border-2 border-black' : 'border border-gray-300'}`}>
                    <img src={currentUser.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                </div>
            </button>
        </div>
    );
};
