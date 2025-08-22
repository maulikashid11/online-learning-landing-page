import React from 'react'

const HowWorks = () => {
    return (
        <div className='w-full md:p-20 p-5 bg-blue-950 text-white '>
            <h2 className='font-bold text-4xl text-center mb-10'>How It Works ?</h2>
            <div className='flex flex-col lg:flex-row gap-5 justify-center '>
                <p className='font-semibold md:text-xl text-lg text-center rounded-full border-1 border-purple-500 w-full shadow-sm md:shadow-lg  shadow-purple-600 bg-purple-200/20 md:p-5 p-2'>Step 1: Sign up for free </p>
                <p className='font-semibold md:text-xl text-lg text-center rounded-full border-1 border-purple-500 w-full shadow-sm md:shadow-lg  shadow-purple-600 bg-purple-200/20 md:p-5 p-2'>Step 2: Choose your course</p>
                <p className='font-semibold md:text-xl text-lg text-center rounded-full border-1 border-purple-500 w-full shadow-sm md:shadow-lg  shadow-purple-600 bg-purple-200/20 md:p-5 p-2'> Step 3: Learn at your own pace and earn certificates</p>
            </div>
        </div>
    )
}

export default HowWorks