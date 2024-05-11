import React, { useState } from 'react'
import searchIcon from '../../assets/images/chat/search.png'
import plusIcon from '../../assets/images/chat/plus.png'
// import minusIcon from '../../assets/images/chat/minus.png'
import avatar from '../../assets/images/chat/avatar.png'
// import AddUser from './AddUser'
import { IoMdClose } from 'react-icons/io'

const ChatList = () => {

  const [addMode, setAddMode] = useState(false);
  const [open, setOpen] = useState();

  const openAddUser = () => {
    setOpen(true);
  }
  const closeAddUser = () => {
    setOpen(false);
  }

  return (
    <div className='chatList flex flex-col py-3 w-full'>
      <div className='flex gap-2 w-full py-5'>
        <div className="flex flex-1 gap-3 bg-gray-900 rounded-lg items-center px-3">
          <img src={searchIcon} alt="" className='w-[20px] h-[20px]' />
          <input type="text" placeholder='Search' className='bg-transparent border-none outline-none text-white flex-1' />
        </div>
        <div className='bg-gray-900 rounded-[10px] p-3 cursor-pointer' onClick={() => setAddMode((prev) => !prev)}>
          <img onClick={openAddUser} src={plusIcon} alt="" className='w-[20px] h-[20px]' />
        </div>
      </div>
      <div className='overflow-y-scroll max-h-[600px] scrollbar-hidden'>
        <div className="item flex items-center gap-3 p-4 cursor-pointer border-b-[1px] border-gray-400 hover:bg-gray-400 ">
          <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
          <div className="texts flex flex-col">
            <span className='font-medium'>Jane</span>
            <p className='text-sm font-normal'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 p-4 cursor-pointer border-b-[1px] border-gray-400 hover:bg-gray-400">
          <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
          <div className="texts flex flex-col">
            <span className='font-medium'>Jane</span>
            <p className='text-sm font-normal'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 p-4 cursor-pointer border-b-[1px] border-gray-400 hover:bg-gray-400">
          <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
          <div className="texts flex flex-col">
            <span className='font-medium'>Jane</span>
            <p className='text-sm font-normal'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 p-4 cursor-pointer border-b-[1px] border-gray-400 hover:bg-gray-400">
          <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
          <div className="texts flex flex-col">
            <span className='font-medium'>Jane</span>
            <p className='text-sm font-normal'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 p-4 cursor-pointer border-b-[1px] border-gray-400 hover:bg-gray-400">
          <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
          <div className="texts flex flex-col">
            <span className='font-medium'>Jane</span>
            <p className='text-sm font-normal'>Hello</p>
          </div>
        </div>
        <div className="item flex items-center gap-3 p-4 cursor-pointer border-b-[1px] border-gray-400 hover:bg-gray-400">
          <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover' />
          <div className="texts flex flex-col">
            <span className='font-medium'>Jane</span>
            <p className='text-sm font-normal'>Hello</p>
          </div>
        </div>
      </div>


      <div className={`${!open ? "hidden" : "absolute"} w-screen h-screen bg-black/70 top-0 right-0 left-0 bottom-0 z-50`}>
        <IoMdClose onClick={closeAddUser} className='absolute top-10 right-10 darkBlueBg size-10 p-2 text-white rounded-full cursor-pointer' />
        <div className='addUser p-5 darkBlueBg rounded-lg absolute top-0 left-0 right-0 bottom-0 m-auto'>
          <form action="" className='flex gap-5'>
            <input type="text" placeholder='Username' name='username' className='px-4 py-3 rounded-md border bg-transparent outline-none text-white' />
            <button className='px-4 py-3 text-white rounded-md bg-blue-500'>Search</button>
          </form>
          <div className="user mt-6 flex items-center justify-between">
            <div className="detail flex items-center gap-2">
              <img src={avatar} alt="" className='w-[40px] h-[40px] rounded-full object-cover' />
              <p className='text-white'>John Doe</p>
            </div>
            <button className='px-3 py-2 text-white rounded-md bg-blue-500'>Add User</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatList