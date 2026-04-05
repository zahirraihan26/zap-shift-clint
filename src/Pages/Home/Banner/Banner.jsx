import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png"
import bannerImg2 from "../../../assets/banner/banner2.png"
import bannerImg3 from "../../../assets/banner/banner3.png"

const Banner = () => {
    const banners = [
        { img: bannerImg1, title: "Swift & Secure Delivery", subtitle: "Your package is our priority" },
        { img: bannerImg2, title: "Global Reach, Local Touch", subtitle: "Connecting businesses worldwide" },
        { img: bannerImg3, title: "Reliability You Can Trust", subtitle: "Providing logistics excellence" }
    ];

    return (
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl mb-16 mx-4 md:mx-0 border border-white/20">
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                interval={5000}
                showThumbs={false}
                showStatus={false}
                className="banner-carousel"
            >
                {banners.map((banner, index) => (
                    <div key={index} className="relative h-[450px] md:h-[650px]">
                        <img src={banner.img} className="object-cover h-full w-full brightness-75 transition-all duration-700 hover:scale-105" alt={banner.title} />
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent flex items-center px-10 md:px-24">
                            <div className="glass p-10 md:p-14 rounded-[2.5rem] max-w-2xl text-left animate-fade-up animate-float border border-white/30 backdrop-blur-xl">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30">Fast & Reliable</span>
                                <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                                    {banner.title.split(' ').map((word, i) => (
                                        <span key={i} className={i % 2 !== 0 ? 'text-gradient' : ''}>{word} </span>
                                    ))}
                                </h2>
                                <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed font-medium opacity-90 max-w-lg">
                                    {banner.subtitle}
                                </p>
                                <div className="flex gap-5 mt-10 flex-wrap">
                                    <button className="btn btn-primary px-10 rounded-full shadow-2xl shadow-primary/30 hover-lift text-secondary font-black text-lg border-none glow-effect">Get Started</button>
                                    <button className="btn btn-outline rounded-full border-white/40 text-white hover:bg-white hover:text-secondary px-10 hover-lift font-bold text-lg backdrop-blur-md transition-all duration-500">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};


export default Banner;