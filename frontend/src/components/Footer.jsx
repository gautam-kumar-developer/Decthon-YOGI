import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider uppercase">SmartCity AI</h3>
                        <p className="mt-4 text-gray-300 text-sm">
                            Empowering citizens with next-gen automated grievance redressal systems.
                            Powered by Agentic AI.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-300 hover:text-white">
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider uppercase">Contact</h3>
                        <p className="mt-4 text-gray-300 text-base">
                            City Hall Main Office<br />
                            123 Civic Center Blvd<br />
                            Smart City, SC 90210
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} SmartCity AI System. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
