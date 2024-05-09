import React, { useState } from 'react'
import avatar from '../../assets/images/chat/avatar.png'
import moreIcon from '../../assets/images/chat/more.png'
import videoIcon from '../../assets/images/chat/video.png'
import editIcon from '../../assets/images/chat/edit.png'

const UserInfo = () => {
    const [addMode,setAddMode] = useState(false);
  return (
    <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-3'>
            <img src={avatar} alt="" className='w-[50px] h-[50px] rounded-full object-cover'/>
            <h2 className='text-lg font-bold'>John Doe</h2>
        </div>
        <div className='flex gap-5 [&_img]:w-[20px] [&_img]:h-[20px] '>
            <img src={moreIcon} alt="" />
            <img src={videoIcon} alt="" />
            <img src={editIcon} alt="" />
        </div>
    </div>
  )
}

export default UserInfo