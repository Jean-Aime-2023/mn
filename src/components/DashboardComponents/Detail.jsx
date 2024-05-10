import React from 'react'
import avatar from '../../assets/images/chat/avatar.png'
import arrowUpIcon from '../../assets/images/chat/arrowUp.png'
import arrowDownIcon from '../../assets/images/chat/arrowDown.png'
import downloadIcon from '../../assets/images/chat/download.png'

const Detail = () => {
  return (
    <div className='detail text-[16px]'>
      <div className="user px-9 py-5 flex flex-col items-center gap-4 border-b-[1px] border-gray-400">
        <img src={avatar} alt="" className='w-[70px] h-[70px] rounded-full object-cover' />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor.</p>
      </div>
      <div className="info p-10 flex flex-col gap-6">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className='font-semibold'>Chat Settings</span>
            <img src={arrowUpIcon} alt="" className='w-[27px] h-[27px] bg-gray-800 p-2 rounded-full cursor-pointer' />
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className='font-semibold'>Privacy & help</span>
            <img src={arrowUpIcon} alt="" className='w-[27px] h-[27px] bg-gray-800 p-2 rounded-full cursor-pointer' />
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className='font-semibold'>Shared Photos</span>
            <img src={arrowDownIcon} alt="" className='w-[27px] h-[27px] bg-gray-800 p-2 rounded-full cursor-pointer' />
          </div>
          <div className="photos text-[16px] mt-4 flex flex-col gap-5">
            <div className="photoItem flex items-center gap-4 justify-between">
              <div className="photoDetail flex gap-3">
                <img className='w-[30px] h-[30px] rounded-sm object-cover' src="https://images.pexels.com/photos/20789234/pexels-photo-20789234/free-photo-of-woman-in-hijab-sitting-with-book-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span className=''>photo_2024_2.png</span>
              </div>
              <img src={downloadIcon} alt="" className='w-[30px] h-[30px] bg-gray-800 p-2 rounded-full cursor-pointer' />
            </div>
            <div className="photoItem flex items-center gap-4 justify-between">
              <div className="photoDetail flex gap-3">
                <img className='w-[30px] h-[30px] rounded-sm object-cover' src="https://images.pexels.com/photos/20789234/pexels-photo-20789234/free-photo-of-woman-in-hijab-sitting-with-book-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span className=''>photo_2024_2.png</span>
              </div>
              <img src={downloadIcon} alt="" className='w-[30px] h-[30px] bg-gray-800 p-2 rounded-full cursor-pointer' />
            </div>
            <div className="photoItem flex items-center gap-4 justify-between">
              <div className="photoDetail flex gap-3">
                <img className='w-[30px] h-[30px] rounded-sm object-cover' src="https://images.pexels.com/photos/20789234/pexels-photo-20789234/free-photo-of-woman-in-hijab-sitting-with-book-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span className=''>photo_2024_2.png</span>
              </div>
              <img src={downloadIcon} alt="" className='w-[30px] h-[30px] bg-gray-800 p-2 rounded-full cursor-pointer' />
            </div>
            <div className="photoItem flex items-center gap-4 justify-between">
              <div className="photoDetail flex gap-3">
                <img className='w-[30px] h-[30px] rounded-sm object-cover' src="https://images.pexels.com/photos/20789234/pexels-photo-20789234/free-photo-of-woman-in-hijab-sitting-with-book-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span className=''>photo_2024_2.png</span>
              </div>
              <img src={downloadIcon} alt="" className='w-[30px] h-[30px] bg-gray-800 p-2 rounded-full cursor-pointer' />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span className='font-semibold'>Shared Files</span>
            <img src={arrowDownIcon} alt="" className='w-[27px] h-[27px] bg-gray-800 p-2 rounded-full cursor-pointer' />
          </div>
        </div>
        <button className='px-4 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500'>Block User</button>
      </div>
    </div>
  )
}

export default Detail