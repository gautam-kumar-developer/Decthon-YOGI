import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#050510] text-white">
            <Header />
            <main className="flex-1 container mx-auto px-4 pt-24 pb-12 relative z-10">
                {/* Ambient Glow Background */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-neon-pink/5 rounded-full blur-[120px]" />
                </div>

                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;
