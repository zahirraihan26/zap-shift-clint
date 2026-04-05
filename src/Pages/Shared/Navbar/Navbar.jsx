import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

    const {user, logOut}=useAuth()

    const handelLogout =()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }


    const links = <>
        <li><NavLink to="/" className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'hover:bg-primary/10'}`}>Services</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'hover:bg-primary/10'}`}>About us</NavLink></li>
        <li><NavLink to="/send-percel" className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'hover:bg-primary/10'}`}>Send Parcel</NavLink></li>
        <li><NavLink to="/coverage" className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 ${isActive ? 'text-primary font-bold' : 'hover:bg-primary/10'}`}>Coverage</NavLink></li>
    </>

    return (
        <div className="navbar glass sticky top-4 z-50 px-4 md:px-8 py-3 transition-all duration-300 rounded-full mx-auto w-[98%] shadow-lg shadow-emerald-900/5 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content glass rounded-box z-1 mt-3 w-52 p-4 shadow-xl">
                        {links}
                    </ul>
                </div>
                <div className="hover-lift">
                    <Logo />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                  {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? <button onClick={handelLogout} className="btn btn-ghost border-secondary/20 hover:bg-secondary/10">Log Out</button> 
                    : <Link className='btn btn-ghost border-secondary/20 hover:bg-secondary/10' to="/login">Log in</Link>
                }
                <Link className='btn btn-secondary text-white hover-lift px-6' to="/rider">Be a Rider</Link>
            </div>
        </div>
    );
};


export default Navbar;