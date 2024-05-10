import React, { useEffect, useRef, useState } from 'react'
import avatar from '../../assets/images/chat/avatar.png'
import phoneIcon from '../../assets/images/chat/phone.png'
import videoIcon from '../../assets/images/chat/video.png'
import infoIcon from '../../assets/images/chat/info.png'
import emojiIcon from '../../assets/images/chat/emoji.png'
import imgIcon from '../../assets/images/chat/img.png'
import cameraIcon from '../../assets/images/chat/camera.png'
import micIcon from '../../assets/images/chat/mic.png'
import EmojiPicker from 'emoji-picker-react'

const ChatSection = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null)
  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])
  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  };

  console.log(text);

  return (
    <div className='chat h-full flex flex-col'>
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
      <div className="center py-10 flex flex-col gap-10 overflow-y-scroll max-h-[645px] scrollbar-hidden [&_img]:w-[30px] [&_img]:h-[30px] [&_img]:rounded-full [&_img]:object-cover [&_p]:p-3 [&_p]:rounded-xl">
        <div className="message max-w-[70%] flex gap-5">
          <img src={avatar} alt=""/>
          <div className="texts flex-1 flex flex-col gap-3">
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nobis vel. Nemo tempore quam, provident iusto amet corrupti unde expedita deserunt placeat, optio officiis quaerat impedit doloremque minus suscipit repudiandae.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message max-w-[70%] flex gap-5 own">
          <div className="texts flex-1 flex flex-col gap-3">
            <img src="https://images.pexels.com/photos/20789234/pexels-photo-20789234/free-photo-of-woman-in-hijab-sitting-with-book-on-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nobis vel. Nemo tempore quam, provident iusto amet corrupti unde expedita deserunt placeat, optio officiis quaerat impedit doloremque minus suscipit repudiandae.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div ref={endRef}></div>
      <div className="bottom mt-auto p-3 flex justify-between items-center border-t-[1px] border-gray-400 gap-3">
        <div className="icons flex gap-4 [&_img]:w-[20px] [&_img]:h-[20px] [&_img]:cursor-pointer">
          <img src={imgIcon} alt="" />
          <img src={cameraIcon} alt="" />
          <img src={micIcon} alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={e => setText(e.target.value)} className='flex bg-gray-900 border-none outline-none text-white text-[13px] rounded-lg px-3 py-2 flex-1' />
        <div className="emoji relative">
          <img src={emojiIcon} alt="" className='w-[20px] h-[20px] cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
          <div className="picker absolute b-[50px] left-0">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='text-white px-3 py-2 bg-gray-900 rounded-lg border-none'>Send</button>
      </div>
    </div>
  )
}

export default ChatSection