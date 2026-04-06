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
        <div className='relative min-h-screen overflow-x-hidden pt-4' data-aos="fade-in">
            {/* Global Ambient Background Effects */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-secondary/10 rounded-full blur-[150px]" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-[#2F855A]/5 rounded-full blur-[100px]" style={{ animation: 'float 10s ease-in-out infinite reverse' }}></div>
            </div>

            <div className='max-w-7xl mx-auto relative z-10'>
                <Navbar></Navbar>
                <main className="min-h-[calc(100vh-400px)]">
                    <Outlet></Outlet>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;