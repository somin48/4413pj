import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            //authenticate Admin
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })

            if (response.data.success) {
                //save token
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.error("Error during login:", error);
            if (error.response) {
                // Log detailed error response
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
            }
            toast.error('Failed to login Admin');
        }

    }


    return (
        <div className='min-h-screen flex items-center justify-center w-full'>

            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type='email' placeholder='Enter your email' required />
                    </div>

                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type='password' placeholder='Enter your password' required />
                    </div>

                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>Login</button>

                </form>
            </div>

        </div>
    )
}

export default Login
