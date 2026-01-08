import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import StatusBadge from '../components/StatusBadge';
import { Activity, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const AdminDashboard = () => {
    // Mock Data
    const stats = [
        { title: 'Total Complaints', value: '1,248', icon: <Activity className="text-neon-cyan" />, color: 'border-neon-cyan/50' },
        { title: 'Active Tasks', value: '86', icon: <Clock className="text-yellow-400" />, color: 'border-yellow-500/50' },
        { title: 'SLA Breaches', value: '12', icon: <AlertTriangle className="text-red-500" />, color: 'border-red-500/50' },
        { title: 'Resolved', value: '1,150', icon: <CheckCircle className="text-neon-green" />, color: 'border-neon-green/50' },
    ];

    const [complaints, setComplaints] = useState([
        { id: 1021, issue: "Street Light Broken", location: "Main St", status: "Assigned", date: "2026-01-05" },
        { id: 1022, issue: "Garbage Pileup", location: "Sector 4", status: "Progress", date: "2026-01-06" },
        { id: 1023, issue: "Water Leaking", location: "Block A", status: "Resolved", date: "2026-01-04" },
        { id: 1024, issue: "Pothole Repair", location: "Highway 9", status: "Escalated", date: "2026-01-07" },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setComplaints(complaints.map(c => c.id === id ? { ...c, status: newStatus } : c));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-white">Admin Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <GlassCard key={index} className={`flex items-center gap-4 ${stat.color} border-b-4`}>
                        <div className="p-3 bg-white/5 rounded-full">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Recent Activity / Tasks */}
            <GlassCard className="border-neon-pink/20">
                <h2 className="text-xl font-bold text-white mb-6">Recent User Complaints</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-400 border-b border-white/10">
                                <th className="p-4 font-medium">ID</th>
                                <th className="p-4 font-medium">Issue Summary</th>
                                <th className="p-4 font-medium">Location</th>
                                <th className="p-4 font-medium">Date</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((complaint) => (
                                <tr key={complaint.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-neon-cyan">#{complaint.id}</td>
                                    <td className="p-4 text-white">{complaint.issue}</td>
                                    <td className="p-4 text-gray-400">{complaint.location}</td>
                                    <td className="p-4 text-gray-400">{complaint.date}</td>
                                    <td className="p-4">
                                        <StatusBadge status={complaint.status} />
                                    </td>
                                    <td className="p-4">
                                        <select
                                            value={complaint.status}
                                            onChange={(e) => handleStatusChange(complaint.id, e.target.value)}
                                            className="bg-black/30 border border-white/10 text-white text-xs rounded px-2 py-1 focus:border-neon-pink focus:outline-none"
                                        >
                                            <option value="Assigned">Assigned</option>
                                            <option value="Progress">In Progress</option>
                                            <option value="Resolved">Resolved</option>
                                            <option value="Escalated">Escalated</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default AdminDashboard;
