import React from 'react'
import avatar from '../../assets/images/chat/avatar.png'
import phoneIcon from '../../assets/images/chat/phone.png'
import videoIcon from '../../assets/images/chat/video.png'
import infoIcon from '../../assets/images/chat/info.png'
import emojiIcon from '../../assets/images/chat/emoji.png'
import imgIcon from '../../assets/images/chat/img.png'
import cameraIcon from '../../assets/images/chat/camera.png'
import micIcon from '../../assets/images/chat/mic.png'

const ChatSection = () => {
  return (
    <div className='chat h-full'>
      <div className="top flex items-center justify-between border-b-[1px] border-gray-400 pb-4">
        <div className="user flex items-center gap-3">
          <img src={avatar} alt="" className='w-[50px] h-[50px] object-cover rounded-full' />
          <div className="texts">
            <span className='font-medium'>John Doe</span>
            <p className='font-light'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons flex items-center gap-3 [&_img]:w-[20px] [&_img]:h-[20px]">
          <img src={phoneIcon} alt="" />
          <img src={videoIcon} alt="" />
          <img src={infoIcon} alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom p-3 flex justify-between items-center border-t-[1px] border-gray-400">
        <div className="icons flex gap-7 [&_img]:w-[20px] [&_img]:h-[20px] [&_img]:cursor-pointer">
          <img src={imgIcon} alt="" />
          <img src={cameraIcon} alt="" />
          <img src={micIcon} alt="" />
        </div>
        <input type="text" placeholder="Type a message..." className='flex bg-gray-900 border-none outline-none text-white rounded-lg px-3 py-2' />
        <div className="emoji">
          <img src={emojiIcon} alt="" />
        </div>
        <button className=''>Send</button>
      </div>
    </div>
  )
}

export default ChatSection