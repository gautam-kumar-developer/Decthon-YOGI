import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRole } from '../context/RoleContext';
import { Menu, X, Zap, Building2, UserCircle, ShieldCheck } from 'lucide-react';

const Header = () => {
    const { role, setRole } = useRole();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItemClass = (path) => `
    text-sm font-medium transition-colors duration-300
    ${isActive(path) ? 'text-neon-cyan drop-shadow-[0_0_5px_rgba(0,243,255,0.7)]' : 'text-gray-400 hover:text-white'}
  `;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="p-1 rounded-lg bg-neon-cyan/20 border border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all">
                        <Zap className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span className="text-xl font-bold tracking-wider text-white">
                        SMART<span className="text-neon-cyan">CITY</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {role === 'User' ? (
                        <>
                            <Link to="/user/complaint/new" className={navItemClass('/user/complaint/new')}>Register Complaint</Link>
                            <Link to="/user/complaint/track" className={navItemClass('/user/complaint/track')}>Track Status</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/dashboard" className={navItemClass('/admin/dashboard')}>Dashboard</Link>
                            <Link to="/admin/analytics" className={navItemClass('/admin/analytics')}>Analytics</Link>
                        </>
                    )}
                </nav>

                {/* Role Switcher & Auth */}
                <div className="hidden md:flex items-center gap-4">
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="bg-black/30 border border-white/10 text-white text-sm rounded-lg px-3 py-1.5 focus:border-neon-cyan focus:outline-none"
                    >
                        <option value="User">User View</option>
                        <option value="Admin">Admin View</option>
                    </select>

                    <Link to={role === 'User' ? '/user/login' : '/admin/login'}>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            {role === 'User' ? <UserCircle className="w-5 h-5 text-gray-400" /> : <ShieldCheck className="w-5 h-5 text-neon-pink" />}
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#050510] border-b border-white/10 p-4 flex flex-col gap-4">
                    {role === 'User' ? (
                        <>
                            <Link to="/user/complaint/new" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-neon-cyan">Register Complaint</Link>
                            <Link to="/user/complaint/track" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-neon-cyan">Track Status</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-neon-pink">Dashboard</Link>
                            <Link to="/admin/analytics" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-neon-pink">Analytics</Link>
                        </>
                    )}
                    <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                        <span className="text-gray-400 text-sm">Role</span>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="bg-black/30 border border-white/10 text-white text-sm rounded-lg px-3 py-1.5"
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
