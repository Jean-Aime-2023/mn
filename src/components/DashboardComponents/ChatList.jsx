import React from 'react'
import searchIcon from '../../assets/images/chat/search.png'
import plusIcon from '../../assets/images/chat/plus.png'
import minusIcon from '../../assets/images/chat/minus.png'

const ChatList = () => {
  return (
    <div className='chatList flex items-center gap-5 py-5 w-full'>
      <div className='flex gap-5 w-full'>
        <div className="flex flex-1 gap-3 bg-gray-900 rounded-lg items-center px-3">
          <img src={searchIcon} alt="" className='w-[20px] h-[20px]' />
          <input type="text" placeholder='Search' className='bg-transparent border-none outline-none text-white flex-1' />
        </div>
        <div className='bg-gray-900 rounded-[10px] p-3'>
          <img src={plusIcon} alt="" className=' w-[20px] h-[20px]' />
        </div>
      </div>
    </div>
  )
}

export default ChatList