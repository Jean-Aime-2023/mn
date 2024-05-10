import React, { useState } from 'react'
import searchIcon from '../../assets/images/chat/search.png'
import plusIcon from '../../assets/images/chat/plus.png'
import minusIcon from '../../assets/images/chat/minus.png'
import avatar from '../../assets/images/chat/avatar.png'
import AddUser from './AddUser'

const ChatList = () => {

  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList flex flex-col py-3 w-full'>
      <div className='flex gap-2 w-full py-5'>
        <div className="flex flex-1 gap-3 bg-gray-900 rounded-lg items-center px-3">
          <img src={searchIcon} alt="" className='w-[20px] h-[20px]' />
          <input type="text" placeholder='Search' className='bg-transparent border-none outline-none text-white flex-1' />
        </div>
        <div className='bg-gray-900 rounded-[10px] p-3 cursor-pointer' onClick={() => setAddMode((prev) => !prev)}>
          <img src={addMode ? minusIcon : plusIcon} alt="" className=' w-[20px] h-[20px]' />
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

      <AddUser />
    </div>
  )
}

export default ChatList