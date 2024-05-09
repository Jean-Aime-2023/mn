import React from 'react'
import UserInfo from './UserInfo'
import ChatList from './ChatList'

const List = () => {
  return (
    <div className='flex flex-1 flex-col h-full'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List