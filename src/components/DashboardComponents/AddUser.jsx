import React, { useState } from 'react'
import avatar from '../../assets/images/chat/avatar.png'
import { IoMdClose } from "react-icons/io";


const AddUser = () => {
    const [open,setOpen] = useState(false);
    return (
        <div className='w-screen h-screen bg-black/70 absolute top-0 right-0 left-0 bottom-0 z-50'>
            <IoMdClose className='absolute top-10 right-10 bg-gray-800 size-10 p-2 text-white rounded-full'/>
            <div className='addUser p-5 bg-gray-800 rounded-lg absolute top-0 left-0 right-0 bottom-0 m-auto'>
            <form action="" className='flex gap-5'>
                <input type="text" placeholder='Username' name='username' className='px-4 py-3 rounded-md border bg-transparent outline-none text-white'/>
                <button className='px-4 py-3 text-white rounded-md bg-blue-500'>Search</button>
            </form>
            <div className="user mt-6 flex items-center justify-between">
                <div className="detail flex items-center gap-2">
                    <img src={avatar} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
                    <p className='text-white'>John Doe</p>
                </div>
                <button className='px-3 py-2 text-white rounded-md bg-blue-500'>Add User</button>
            </div>
        </div>
        </div>
    )
}

export default AddUser