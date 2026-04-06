import React from 'react';
import Banner from '../Banner/Banner';
import Howitwork from '../Howitwork/Howitwork';
import Ourservices from '../Ourservices/Ourservices';
import Brands from '../Brands/Brands';
import Reviwes from '../Reviwes/Reviwes';


const reviewspromise =fetch('reviews.json') .then(res=>res.json())

const Home = () => {
    return (
        <div className="relative">
            {/* Background ambient light effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none z-[-1]"></div>
            
            <div className="animate-fade-up">
                <Banner></Banner>
            </div>
            <div className="container mx-auto px-4 md:px-8 mt-24">
                <div data-aos="fade-up" className="hover-lift p-1 rounded-3xl bg-gradient-to-b from-white/40 to-white/10 shadow-sm backdrop-blur-sm">
                    <div className="bg-white/60 rounded-[22px] overflow-hidden">
                        <Howitwork></Howitwork>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 mt-24">
                <Ourservices></Ourservices>
            </div>
            <div className="mt-24 py-16 bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5">
                <div className="container mx-auto px-4 md:px-8">
                    <Brands></Brands>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8 mt-24 mb-24 relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                <Reviwes reviewspromise ={reviewspromise}></Reviwes>
            </div>
        </div>
    );
};

export default Home;