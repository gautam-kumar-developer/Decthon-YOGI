import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';

const AdminRegister = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/admin/login');
        }, 1500);
    };

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <GlassCard className="w-full max-w-md border-neon-pink/20 shadow-glow-pink">
                <h2 className="text-3xl font-bold text-center mb-2 text-white">Official Registration</h2>
                <p className="text-center text-gray-400 mb-8">Join the Smart City Admin Team</p>

                <form onSubmit={handleRegister} className="flex flex-col gap-6">
                    <NeonInput
                        label="Username"
                        placeholder="Create Official ID"
                        required
                    />
                    <NeonInput
                        label="Email"
                        type="email"
                        placeholder="official@smartcity.gov"
                        required
                    />

                    <div className="flex flex-col gap-1 w-full">
                        <label className="text-sm font-medium text-gray-400 ml-1">Department</label>
                        <select className="glass-input px-4 py-3 rounded-lg w-full bg-dark-input/50 text-white" required>
                            <option value="" disabled selected>Select Department</option>
                            <option value="PWD">PWD (Public Works)</option>
                            <option value="Electricity">Electricity Board</option>
                            <option value="Sanitation">Sanitation</option>
                            <option value="Municipal">Municipal Corporation</option>
                        </select>
                    </div>

                    <NeonInput
                        label="Password"
                        type="password"
                        placeholder="Create strong password"
                        required
                    />

                    <NeonButton variant="pink" type="submit" isLoading={loading} className="w-full mt-2">
                        Register Official
                    </NeonButton>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Already authorized?{' '}
                    <Link to="/admin/login" className="text-neon-pink hover:underline">
                        Login here
                    </Link>
                </div>
            </GlassCard>
        </div>
    );
};

export default AdminRegister;
