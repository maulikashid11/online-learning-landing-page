import React from 'react'

const CTA = () => {
    return (
        <div className='bg-white p-5 flex flex-col gap-2 items-center justify-center'>
            <img src="CTA.jpg" className='w-80' alt="" />
            <p className='text-purple-500 text-center text-3xl md:text-5xl font-bold my-2'>Start learning today. Your first course is free.</p>
            <button className='rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white md:p-5 p-3 text-xl font-semibold cursor-pointer'>Sign Up Now</button>
        </div>
    )
}

export default CTA