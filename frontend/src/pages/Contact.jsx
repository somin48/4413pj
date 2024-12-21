import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>4700 Keele Street <br /> Toronto, Ontario, Canada</p>
          <p className='text-gray-500'>Tel: +1 (234) 567-8910 <br /> Email: emailus@email.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers</p>
          <p className='text-gray-500'>Learn more about our teams</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-orange-200 hover:text-green-50 transition-all duration-500'>Explore </button>
          <p></p>

        </div>

      </div>
      
    </div>
  )
}

export default Contact
