import React from 'react'
import Header from '../components/DashboardComponents/Header'
import List from '../components/DashboardComponents/List'
import Detail from '../components/DashboardComponents/Detail'
import ChatSection from '../components/DashboardComponents/ChatSection'

const Chat = ({ toggleDarkMode }) => {
    return (
        <div className="flex flex-col gap-3 bg-[#F9F9F9] dark:bg-[#0F1631] h-screen text-sm">
            <Header header="Messages" search="true" userProfile="false" toggleDarkMode={toggleDarkMode} />
            <div className='flex mx-9 my-7 h-full w-[96%]'>
                <div className='w-[25%] bg-gray-500 p-5 max-h-full rounded-tl-xl rounded-bl-xl border-2 border-[#3f3e3e]'><List/></div>
                <div className='w-[50%] bg-gray-500 p-5 max-h-full border-2 border-[#3f3e3e]'><ChatSection/></div>
                <div className='w-[25%] bg-gray-500 p-5 max-h-full rounded-tr-xl rounded-br-xl border-2 border-[#3f3e3e]'><Detail/></div>
            </div>
        </div>
    )
}

export default Chat