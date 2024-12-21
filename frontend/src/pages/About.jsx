import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='gap-y-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome.</p>
        <p>This is Dummy text..</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to ... make all animal happy!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Best Quality</b>
          <p className='text-gray-600'>We are the best.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Easy Shopping</b>
          <p className='text-gray-600'>We are the best.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Friendly Service</b>
          <p className='text-gray-600'>We are the best.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
