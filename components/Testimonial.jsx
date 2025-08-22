"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div className="w-full  md:p-10 p-5 bg-white bg-center bg-cover">
            <h1 className='text-center text-4xl md:text-6xl font-bold py-10'>What People Say?</h1>
            <Swiper modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                className='md:w-[70%] mx-auto'
            >
                <SwiperSlide>
                    <p className='text-xl md:text-3xl text-gray-8   00'>"SkillWise helped me land my dream job with practical skills and great instructors."  </p>
                    <p className='text-xl fond-semibold my-5'>- Sarah K.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='text-xl md:text-3xl text-gray-8   00'>"Flexible learning that fits my busy schedule. Highly recommend!"</p>
                    <p className='text-xl fond-semibold my-5'>- James L.</p>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Testimonials