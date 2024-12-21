import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:tex-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Exchange Policy</p>
        <p className='text-gray-400'> We do not accept any exchange because our products are the best
        </p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Return Policy
        </p>
        <p className='text-gray-400'> We do not accept any return as well!
        </p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Customer Support
        </p>
        <p className='text-gray-400'> Available only on Tuesdays 3pm-4pm. Our staffs will not be available time to time.
        </p>
      </div>

      
    </div>
  )
}

export default OurPolicy
