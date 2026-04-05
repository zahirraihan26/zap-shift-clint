import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RootLayout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className='max-w-7xl mx-auto overflow-x-hidden' data-aos="fade-in"> 
            <Navbar></Navbar>
            <main className="min-h-[calc(100vh-400px)]">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;