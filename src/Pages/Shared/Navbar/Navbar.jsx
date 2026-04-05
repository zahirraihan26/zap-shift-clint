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
        <div className="navbar glass sticky top-4 z-50 px-4 md:px-8 py-3 transition-all duration-300 rounded-full mx-auto w-[98%] shadow-xl shadow-emerald-900/5 mb-6 border border-white/40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-primary/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content glass rounded-2xl z-50 mt-4 w-64 p-4 shadow-2xl border border-white/40 gap-2">
                        {links}
                    </ul>
                </div>
                <div className="hover-lift cursor-pointer ml-2">
                    <Logo />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? (
                        <div className="flex items-center gap-3">
                            <div className="hidden md:block text-right">
                                <p className="text-xs font-bold text-secondary">{user.displayName || 'User'}</p>
                                <p className="text-[10px] text-secondary/60">Verified Member</p>
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline btn-sm border-secondary/20 hover:bg-secondary/10 hover:text-secondary rounded-full px-5 h-10 min-h-0">Log Out</button>
                        </div>
                    ) : (
                        <Link className='btn btn-ghost border-secondary/10 hover:bg-secondary/10 text-secondary rounded-full px-6' to="/login">Log in</Link>
                    )
                }
                <Link className='btn btn-secondary text-white hover-lift px-8 rounded-full shadow-lg shadow-secondary/20 h-10 min-h-0 border-none' to="/rider">Be a Rider</Link>
            </div>
        </div>
    );
};


export default Navbar;