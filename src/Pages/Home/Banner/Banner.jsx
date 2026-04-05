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
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16">
            <Carousel 
                autoPlay={true}
                infiniteLoop={true}
                interval={4000}
                showThumbs={false}
                showStatus={false}
                className="banner-carousel"
            >
                {banners.map((banner, index) => (
                    <div key={index} className="relative h-[400px] md:h-[600px]">
                        <img src={banner.img} className="object-cover h-full w-full" alt={banner.title} />
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent flex items-center px-10 md:px-20">
                            <div className="glass p-8 md:p-12 rounded-3xl max-w-xl text-left animate-fade-up">
                                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                                    {banner.title.split(' ').map((word, i) => (
                                        <span key={i} className={i % 2 !== 0 ? 'text-primary' : ''}>{word} </span>
                                    ))}
                                </h2>
                                <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed">
                                    {banner.subtitle}
                                </p>
                                <div className="flex gap-4 mt-8 flex-wrap">
                                    <button className="btn btn-primary px-8 rounded-full shadow-lg shadow-primary/20 hover-lift text-secondary font-bold text-lg border-none hover:bg-[#b0d14b]">Get Started</button>
                                    <button className="btn btn-outline rounded-full border-white/50 text-white hover:bg-white hover:text-secondary px-8 hover-lift font-bold text-lg backdrop-blur-sm">Learn More</button>
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