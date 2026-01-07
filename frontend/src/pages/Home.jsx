import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, LayoutDashboard } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-indigo-50 to-white rounded-3xl shadow-sm border border-indigo-100">
            <div className="text-center max-w-2xl px-6">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                    Smart City <span className="text-indigo-600">AI System</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Experience the future of urban management.
                    Seamlessly report issues, track resolutions, and empower city officials
                    with AI-driven insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/submit"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-xl md:px-10 transition-all shadow-md hover:shadow-lg"
                    >
                        <FileText className="w-5 h-5 mr-2" />
                        Register Complaint
                    </Link>
                    <Link
                        to="/admin"
                        className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-xl md:px-10 transition-all shadow-sm hover:shadow-md"
                    >
                        <LayoutDashboard className="w-5 h-5 mr-2" />
                        Admin Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
