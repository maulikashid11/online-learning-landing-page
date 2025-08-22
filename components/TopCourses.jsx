import React from 'react'

const TopCourses = () => {
    return (
        <div className='w-full md:p-10 p-5  bg-gradient-to-r from-blue-100 to-green-100 '>
            <h2 className='font-bold text-4xl text-center mb-10'>Top Courses</h2>
            <div className='flex sm:flex-row flex-col gap-5 justify-center '>
                <div className='rounded-md bg-white w-full shadow p-5 flex flex-col gap-4'>
                    <img src="fullstack.jpg" alt="" />
                    <p className='font-semibold text-xl'>Full-Stack Web Development: Learn React, Node.js & MongoDB </p>
                    <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam aspernatur, totam sapiente est saepe doloremque praesentium expedita dicta qui....</p>
                    <p className='text-md'>Duration - 45 Hours</p>
                    <button className='text-xl mx-auto bg-radial from-yellow-500 to-red-500 rounded-full py-3 px-5 text-white cursor-pointer hover:scale-102 duration-200'>Enroll Now</button>
                </div>
                <div className='rounded-md bg-white w-full shadow p-5 flex flex-col gap-4'>
                    <img src="ui.jpg" alt="" />
                    <p className='font-semibold text-xl'>UI/UX Design Basics: Master modern design with Figma </p>
                    <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam aspernatur, totam sapiente est saepe doloremque praesentium expedita dicta qui....</p>
                    <p className='text-md'>Duration - 20 Hours</p>
                    <button className='text-xl mx-auto bg-radial from-yellow-500 to-red-500 rounded-full py-3 px-5 text-white cursor-pointer hover:scale-102 duration-200'>Enroll Now</button>
                </div>
                <div className='rounded-md bg-white w-full shadow p-5 flex flex-col gap-4'>
                    <img src="digital.jpg" alt="" />
                    <p className='font-semibold text-xl'>Digital Marketing Crash Course: SEO, ads, and content marketing</p>
                    <p className='text-md text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam aspernatur, totam sapiente est saepe doloremque praesentium expedita dicta qui....</p>
                    <p className='text-md'>Duration - 15 Hours</p>
                    <button className='text-xl mx-auto bg-radial from-yellow-500 to-red-500 rounded-full py-3 px-5 text-white cursor-pointer hover:scale-102 duration-200'>Enroll Now</button>
                </div>
            </div>
        </div>
    )
}

export default TopCourses