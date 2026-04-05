import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router'; /* Using react-router version 7 based on package.json */
import { FiHome, FiMenu, FiX, FiPackage } from 'react-icons/fi';
import { FaMotorcycle } from 'react-icons/fa';

import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex overflow-hidden">
            
            {/* Mobile Sidebar Toggle Area */}
            <div className="lg:hidden absolute top-4 left-4 z-50">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 bg-white/30 backdrop-blur-md rounded-lg shadow border border-white/40 text-gray-800"
                >
                    {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Sidebar (Glassmorphism) */}
            <div className={`
                fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out
                lg:translate-x-0 lg:static lg:flex-shrink-0
                bg-gradient-to-b from-blue-600/90 to-purple-700/90 backdrop-blur-xl border-r border-white/20
                flex flex-col text-white shadow-2xl
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6 pt-16 lg:pt-6 flex items-center justify-center border-b border-white/10">
                    <h1 className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                        ZAPSHIFT
                    </h1>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4">
                    <nav className="space-y-3">
                        <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
                            <FiHome size={20} />
                            <span className="font-medium">Go Home</span>
                        </NavLink>

                        <div className="pt-4 pb-2">
                            <p className="px-4 text-xs font-semibold text-gray-300 uppercase tracking-wider">Dashboard Paths</p>
                        </div>

                        <NavLink to="/rider" className={({ isActive }) => 
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20' : 'hover:bg-white/10 hover:scale-[1.02]'}`
                        }>
                            <FaMotorcycle size={20} />
                            <span className="font-medium">Rider Dashboard</span>
                        </NavLink>

                        <NavLink to="/send-percel" className={({ isActive }) => 
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-white/25 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20' : 'hover:bg-white/10 hover:scale-[1.02]'}`
                        }>
                            <FiPackage size={20} />
                            <span className="font-medium">Send Parcel</span>
                        </NavLink>
                    </nav>
                </div>

                <div className="p-4 border-t border-white/10">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            U
                        </div>
                        <div>
                            <p className="font-semibold text-sm">User Profile</p>
                            <p className="text-xs text-gray-300">View Settings</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col w-0 overflow-hidden relative">
                {/* Dashboard Header */}
                <DashboardHeader />
                
                {/* Decorative background blobs for glassmorphism main canvas effect */}
                <div className="absolute top-[-10%] sm:left-[-10%] w-96 h-96 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] sm:right-[-10%] w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] sm:left-[20%] w-96 h-96 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

                <main className="flex-1 relative z-10 overflow-y-auto w-full p-4 md:p-8 lg:p-12">
                   <div className="w-full h-full max-w-7xl mx-auto">
                        <Outlet />
                   </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
