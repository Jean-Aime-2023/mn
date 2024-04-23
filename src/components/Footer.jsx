import React from 'react'
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className='darkBlue text-white grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-[7rem] xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-16'>
      <div className='flex flex-col gap-5'>
        <p>Services</p>
        <p>Escrow</p>
        <p>Security account</p>
        <p>Track your money</p>
      </div>
      <div className='flex flex-col gap-5'>
        <p>Go back</p>
        <p>Home</p>
        <p>Features</p>
        <p>Pricing</p>
      </div>
      <div className='flex flex-col gap-5'>
        <p>Reach out</p>
        <p className='flex gap-3'>
            <span><LuPhone/></span>
            <span>+250798978831</span>
        </p>
        <p className='flex gap-3'>
            <span><MdOutlineEmail/></span>
            <span>MinceTech@gmail.com</span>
        </p>
        <p>Language</p>
        
      </div>
      <div></div>
    </div>
  )
}

export default Footer