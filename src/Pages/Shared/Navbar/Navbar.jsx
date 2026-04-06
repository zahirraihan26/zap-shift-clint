import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

    const {user, logOut}=useAuth()

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/" className={({ isActive }) => `px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${isActive ? 'bg-primary text-secondary shadow-lg shadow-primary/20' : 'hover:bg-primary/10 text-secondary/80 hover:text-secondary'}`}>Services</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => `px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${isActive ? 'bg-primary text-secondary shadow-lg shadow-primary/20' : 'hover:bg-primary/10 text-secondary/80 hover:text-secondary'}`}>About us</NavLink></li>
        <li><NavLink to="/send-percel" className={({ isActive }) => `px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${isActive ? 'bg-primary text-secondary shadow-lg shadow-primary/20' : 'hover:bg-primary/10 text-secondary/80 hover:text-secondary'}`}>Send Parcel</NavLink></li>
        <li><NavLink to="/coverage" className={({ isActive }) => `px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${isActive ? 'bg-primary text-secondary shadow-lg shadow-primary/20' : 'hover:bg-primary/10 text-secondary/80 hover:text-secondary'}`}>Coverage</NavLink></li>
    </>

    return (
        <div className="navbar glass sticky top-4 z-50 px-4 md:px-8 py-3 transition-all duration-500 rounded-full mx-auto w-[98%] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(202,235,102,0.15)] mb-6 border border-white/60 bg-white/40 backdrop-blur-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-primary/20 rounded-full transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content glass rounded-2xl z-50 mt-4 w-64 p-4 shadow-2xl border border-white/60 gap-2 bg-white/80 backdrop-blur-2xl">
                        {links}
                    </ul>
                </div>
                <div className="hover-lift cursor-pointer ml-2 relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative">
                        <Logo />
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none"></div>
                <ul className="menu menu-horizontal px-2 py-1 gap-1 rounded-full bg-white/20 border border-white/40 shadow-inner">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? (
                        <div className="flex items-center gap-3 bg-white/30 rounded-full p-1 pr-2 border border-white/50 shadow-sm">
                            <div className="hidden md:block text-right ml-3">
                                <p className="text-xs font-bold text-secondary">{user.displayName || 'User'}</p>
                                <p className="text-[10px] text-secondary/60">Verified Member</p>
                            </div>
                            <button onClick={handleLogout} className="btn hover-lift btn-sm bg-white/60 border-white hover:bg-secondary hover:text-white text-secondary rounded-full px-5 h-8 min-h-0 transition-all duration-300">Log Out</button>
                        </div>
                    ) : (
                        <Link className='btn btn-ghost border-secondary/20 hover:bg-white hover:shadow-md text-secondary rounded-full px-6 transition-all duration-300' to="/login">Log in</Link>
                    )
                }
                <Link className='btn btn-secondary text-white hover-lift px-8 rounded-full shadow-[0_0_15px_rgba(3,55,61,0.3)] hover:shadow-[0_0_25px_rgba(202,235,102,0.4)] hover:bg-secondary/90 h-10 min-h-0 border-none relative overflow-hidden group' to="/rider">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <span className="relative">Be a Rider</span>
                </Link>
            </div>
        </div>
    );
};


export default Navbar;