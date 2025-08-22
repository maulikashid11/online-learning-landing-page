import React from 'react'

const Features = () => {
    return (
        <div className='w-full md:p-20 p-5 bg-gray-50 '>
            <h2 className='font-bold text-4xl text-center mb-10'>Features</h2>
            <div className='flex gap-5 md:flex-row flex-col justify-center '>
                <div className='rounded-md border-3 border-purple-500 w-full shadow p-5'>
                    <img src="expert.jpg" className='my-4 w-40 mx-auto' alt="" />
                    <p className='font-semibold text-2xl text-center'>Expert Instructors</p>
                    <p className='text-lg text-center my-5'>Learn from industry professionals with real-world experience.  </p>
                </div>
                <div className='rounded-md border-3 border-purple-500 w-full shadow p-5'>
                    <img src="pace.jpg" className='my-4 w-60 mx-auto' alt="" />
                    <p className='font-semibold text-2xl text-center'>Self-Paced Learning</p>
                    <p className='text-lg text-center my-5'>Access anytime, anywhere — no deadlines, just progress.  </p>
                </div>
                <div className='rounded-md border-3 border-purple-500 w-full shadow p-5'>
                    <img src="certification.jpg" className='my-4 w-40 mx-auto' alt="" />
                    <p className='font-semibold text-2xl text-center'> Certificates of Completion</p>
                    <p className='text-lg text-center my-5'>Boost your resume with verified certificates.</p>
                </div>
            </div>
        </div>
    )
}

export default Features