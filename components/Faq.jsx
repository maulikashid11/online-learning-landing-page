import React from 'react'

const Faq = () => {
    return (
        <div className='bg-purple-950 text-white md:p-10 p-5'>
            <h1 className='mt-10 mb-5 text-4xl font-bold text-center'>Frequenty Asked Questions?</h1>
            <div className='my-5 border-1 rounded-md p-5 border-purple-600'>
                <p className='text-xl'>Can I learn at my own pace?</p>
                <p className='text-lg text-gray-400'>Absolutely! All courses are self-paced.</p>
            </div>
            <div className='my-5 border-1 rounded-md p-5 border-purple-600'>
                <p className='text-xl'>Are certificates recognized?  </p>
                <p className='text-lg text-gray-400'>Yes, our certificates are trusted by many employers.  </p>
            </div>
            <div className='my-5 border-1 rounded-md p-5 border-purple-600'>
                <p className='text-xl'>Is there a free trial?  </p>
                <p className='text-lg text-gray-400'>Yes, your first course is free to try.</p>
            </div>
        </div>
    )
}

export default Faq