import React from 'react';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';

const DashboardHeader = () => {
    return (
        <header className="relative z-20 bg-white/40 backdrop-blur-md border-b border-white/30 shadow-sm">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
                {/* Search Bar */}
                <div className="flex-1 flex px-2 lg:ml-6 lg:mr-6 justify-center lg:justify-start">
                    <div className="max-w-lg w-full lg:max-w-xs relative hidden sm:block">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiSearch className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="search"
                                name="search"
                                className="block w-full pl-10 pr-3 py-2 border border-white/40 rounded-xl leading-5 bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition-all shadow-inner"
                                placeholder="Search dashboards, routes, or parcels..."
                                type="search"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="ml-4 flex items-center md:ml-6 gap-4">
                    <button className="p-2 text-gray-500 hover:text-purple-600 hover:bg-white/50 rounded-full transition-all focus:outline-none relative">
                        <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-400 ring-2 ring-white"></span>
                        <FiBell className="h-6 w-6" />
                    </button>
                    
                    <button className="p-2 text-gray-500 hover:text-purple-600 hover:bg-white/50 rounded-full transition-all focus:outline-none hidden sm:block">
                        <FiSettings className="h-6 w-6" />
                    </button>

                    {/* Profile Dropdown Simulation */}
                    <div className="ml-3 relative">
                        <div className="flex items-center gap-3 bg-white/40 border border-white/50 py-1.5 px-2 rounded-full cursor-pointer hover:bg-white/60 transition-all shadow-sm">
                            <img className="h-8 w-8 rounded-full shadow-sm object-cover" src="https://i.pravatar.cc/150?img=11" alt="User Avatar" />
                            <span className="text-sm font-semibold text-gray-700 hidden md:block pr-2">Rahim U.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
