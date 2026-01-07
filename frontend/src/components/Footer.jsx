import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/5 bg-[#050510] py-8 mt-auto">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">
                    © 2026 Smart City Automation. All rights reserved.
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Built for the Future</span>
                    <Heart className="w-3 h-3 text-neon-pink fill-neon-pink animate-pulse" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
