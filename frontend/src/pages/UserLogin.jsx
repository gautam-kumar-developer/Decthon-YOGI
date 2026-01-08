import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import NeonInput from '../components/NeonInput';
import NeonButton from '../components/NeonButton';
import axios from 'axios';

const UserLogin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            email,
            password
        };
        try {

            const response = await axios.post(
                "http://localhost:8080/api/auth/public/user/login",
                payload
            );

            navigate('/user/complaint/new');

            console.log("login success:", response.data);

        } catch (error) {
            console.error("login failed:", error);
        } finally {
            setLoading(false);
        }
    };

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     // Mock login
    //     setTimeout(() => {
    //         setLoading(false);
    //         navigate('/user/complaint/new');
    //     }, 1500);
    // };

    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <GlassCard className="w-full max-w-md border-neon-cyan/20">
                <h2 className="text-3xl font-bold text-center mb-2 text-white">Welcome Back</h2>
                <p className="text-center text-gray-400 mb-8">Access your citizen portal</p>

                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <NeonInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <NeonInput
                        label="Password"
                        type="password"
                        placeholder="Create a strong password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <NeonButton
                        variant="cyan"
                        type="submit"
                        isLoading={loading}
                        className="w-full mt-2"
                    >
                        Login
                    </NeonButton>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/user/register" className="text-neon-cyan hover:underline">
                        Register here
                    </Link>
                </div>
            </GlassCard>
        </div>
    );
};

export default UserLogin;
