import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler= () => {
        event.preventDefault(); // submitting will not reload current page
    }

  return (
    <div className='text-center'>
        <p className='text-2xl front-medium text-gray-600'> Subscribe now and get 0% off!
        </p>
        <p className='text-gray-400 mt-3'>
            Dummy text.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pd-1'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox
