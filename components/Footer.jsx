"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-blue-950 text-white p-10'>
            <div className='flex justify-between items-center gap-5 flex-col sm:flex-row'>
                <Link href={'/'}><p className='text-2xl font-bold'>Skill<span className='text-purple-500'>Wise</span></p></Link>
                <p className='text-center'>Copyrights &copy; IronCore Fitness | All rights reserved</p>
                <div className="flex space-x-4">
                    <a href="#" className="bg-black hover:bg-gray-800 hover:scale-105 p-2 rounded-full">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="bg-black hover:bg-gray-800 hover:scale-105 p-2 rounded-full">
                        <FaTwitter />
                    </a>
                    <a href="#" className="bg-black hover:bg-gray-800 hover:scale-105 p-2 rounded-full">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer