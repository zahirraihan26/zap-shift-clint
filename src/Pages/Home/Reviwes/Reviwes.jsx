import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Reviewcard from './Reviewcard';

const Reviwes = ({ reviewspromise }) => {
    const reviews = use(reviewspromise)

    return (
        <div className='py-24 md:py-32 bg-gray-50/30 rounded-[4rem] my-24'>
            <div className='text-center max-w-3xl mx-auto mb-20 px-6' data-aos="fade-up">
                <h3 className="text-4xl md:text-6xl font-bold mb-8 text-secondary">
                    Voice of <span className="text-primary italic">Our Customers</span>
                </h3>
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                    Don't just take our word for it. Join thousands of satisfied businesses and individuals who rely on Zapshift for their logistics needs.
                </p>
            </div>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="reviews-swiper pb-20 px-6"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide key={review.id} className="pb-12">
                            <Reviewcard review={review}></Reviewcard>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};


export default Reviwes;