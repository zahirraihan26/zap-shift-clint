import React from 'react';
import { FiTrendingUp, FiBox, FiMapPin, FiClock } from 'react-icons/fi';

const Rider = () => {
    return (
        <div className="space-y-6">
            
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back, Rider!</h2>
                    <p className="text-gray-500 mt-1">Here is your delivery summary for today.</p>
                </div>
                <div className="hidden sm:block">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Available for Deliveries
                    </span>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Today's Earnings", value: "$124.50", icon: <FiTrendingUp size={24} />, color: "from-blue-500 to-cyan-400" },
                    { title: "Parcels Delivered", value: "18", icon: <FiBox size={24} />, color: "from-purple-500 to-pink-500" },
                    { title: "Distance Covered", value: "45 km", icon: <FiMapPin size={24} />, color: "from-orange-400 to-red-500" },
                    { title: "Hours Online", value: "6.5 hrs", icon: <FiClock size={24} />, color: "from-emerald-400 to-teal-500" }
                ].map((stat, i) => (
                    <div key={i} className="relative group overflow-hidden bg-white/40 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-xl`}></div>
                        <div className="relative z-10 flex items-start justify-between">
                            <div>
                                <p className="text-gray-500 font-semibold text-sm mb-1">{stat.title}</p>
                                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                                {stat.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Deliveries */}
            <div className="mt-8 bg-white/50 backdrop-blur-lg border border-white/50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Deliveries</h3>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="pb-3 text-sm font-semibold text-gray-600">Tracking ID</th>
                                <th className="pb-3 text-sm font-semibold text-gray-600">Receiver</th>
                                <th className="pb-3 text-sm font-semibold text-gray-600">Destination</th>
                                <th className="pb-3 text-sm font-semibold text-gray-600">Status</th>
                                <th className="pb-3 text-sm font-semibold text-gray-600">Earnings</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { id: "#TRK-9821A", name: "Sarah Connor", dest: "Westheimer Rd, Dhaka", status: "Delivered", earn: "$12.00" },
                                { id: "#TRK-4512B", name: "John Doe", dest: "Mirpur 10, Dhaka", status: "In Transit", earn: "$8.50" },
                                { id: "#TRK-1109C", name: "Jane Smith", dest: "Dhanmondi 32, Dhaka", status: "Delivered", earn: "$15.00" },
                                { id: "#TRK-7742D", name: "Mike Tyson", dest: "Gulshan 1, Dhaka", status: "Pending", earn: "$10.00" }
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-white/40 transition-colors">
                                    <td className="py-4 font-medium text-purple-600">{row.id}</td>
                                    <td className="py-4 text-gray-800">{row.name}</td>
                                    <td className="py-4 text-gray-600">{row.dest}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                            row.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                            row.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-semibold text-gray-800">{row.earn}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Rider;