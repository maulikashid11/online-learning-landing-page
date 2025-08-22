import React from 'react'

const HeroSection = () => {
    return (
        <div className='relative overflow-hidden'>
            <div className='bg-gradient-to-br from-blue-500 to-purple-500 w-200 h-20 rounded-full absolute mx-auto inset-0 top-40 animate-pulse'></div>
            <div className='w-full bg-transparent backdrop-blur-3xl flex items-center justify-center md:flex-row flex-col-reverse gap-2 md:gap-5 p-5'>
                <div className='flex flex-col items-start justify-center gap-10 p-10 '>
                    <h1 className='text-6xl md:text-8xl font-bold'>Learn Skills <br /> That Matter</h1>
                    <p className='text-lg md:text-2xl font-semibold'>Join thousands of learners upgrading their careers with SkillWise. <br /> Flexible, affordable, expert-led courses.</p>
                    <button className='rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white p-5 text-md md:text-xl font-semibold cursor-pointer'>Browse Courses</button>
                </div>
                <img src="heroimage.jpg" className='md:w-[40%] rounded-full' alt="" />
            </div>
        </div>
    )
}

export default HeroSection