import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import HowWorks from '@/components/HowWorks'
import Testimonials from '@/components/Testimonial'
import TopCourses from '@/components/TopCourses'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <TopCourses />
      <HowWorks />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </>
  )
}

export default page