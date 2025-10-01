import React from 'react'
import { FaG } from 'react-icons/fa6'

const LoginButton = () => {
    return (
        <button className='flex item-center justify-center gap-2 w-full bg-blue-700 text-white 
        font-medium py-3 px-6 text-base rounded-sm hover:bg-blue-600 cursor-pointer'>
            <FaG className='size-6'/>
            Sign In With Google
        </button>
    )
}

export default LoginButton