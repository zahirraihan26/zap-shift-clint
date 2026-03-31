import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_peoplefrom from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandsLogos = [amazon, amazon_vector, casio, moonstar, randstad, star, start_peoplefrom]

const Brands = () => {
    return (
        <div className="py-20">
            <div className="text-center mb-12">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400 mb-2">Trusted by Global Leaders</p>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            </div>
            <Swiper
                loop={true}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                centeredSlides={true}
                spaceBetween={50}
                grabCursor={true}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="brands-swiper"
            >
                {brandsLogos.map((logo, index) => (
                    <SwiperSlide key={index} className="flex items-center justify-center py-10 px-4">
                        <img 
                            src={logo} 
                            alt={`brand-${index}`} 
                            className="h-12 md:h-16 w-auto object-contain transition-all duration-500 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default Brands;