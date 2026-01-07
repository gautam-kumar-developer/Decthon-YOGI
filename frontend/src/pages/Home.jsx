import React from 'react';
import { Link } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import NeonButton from '../components/NeonButton';
import GlassCard from '../components/GlassCard';
import { ArrowRight, Zap, Shield } from 'lucide-react';

const Home = () => {
    const { role } = useRole();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-8">
            <div className="relative">
                <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-4 tracking-tighter">
                    SMART<span className="text-neon-cyan drop-shadow-[0_0_20px_rgba(0,243,255,0.5)]">CITY</span>
                </h1>
                <div className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                    The future of urban management is here. Seamlessly automated, transparent, and efficient.
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
                <GlassCard className="flex flex-col items-center gap-4 hover:border-neon-cyan/50 group cursor-pointer transition-all">
                    <div className="w-16 h-16 rounded-full bg-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Citizen Services</h2>
                    <p className="text-gray-400 text-sm">
                        Report issues, track complaints, and make your voice heard in real-time.
                    </p>
                    <div className="mt-auto pt-4">
                        {role === 'User' ? (
                            <Link to="/user/complaint/new">
                                <NeonButton variant="cyan">Get Started <ArrowRight className="w-4 h-4" /></NeonButton>
                            </Link>
                        ) : (
                            <span className="text-xs text-gray-500 uppercase tracking-widest border-spacing-7">Switch to User Role</span>
                        )}
                    </div>
                </GlassCard>

                <GlassCard className="flex flex-col items-center gap-4 hover:border-neon-pink/50 group cursor-pointer transition-all">
                    <div className="w-16 h-16 rounded-full bg-neon-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Shield className="w-8 h-8 text-neon-pink" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Administration</h2>
                    <p className="text-gray-400 text-sm">
                        Monitor city metrics, manage departments, and resolve critical issues.
                    </p>
                    <div className="mt-auto pt-4">
                        {role === 'Admin' ? (
                            <Link to="/admin/dashboard">
                                <NeonButton variant="pink">Access Dashboard <ArrowRight className="w-4 h-4" /></NeonButton>
                            </Link>
                        ) : (
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Switch to Admin Role</span>
                        )}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Home;
