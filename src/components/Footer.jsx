import React from 'react'
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { SelectDemo } from './Select';


const Footer = () => {
  return (
    <div className='darkBlue w-screen text-white text-xs grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-lg:gap-[7rem] xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-24'>
      <div className='flex flex-col gap-5'>
        <p className='font-semibold text-sm'>Services</p>
        <p>Escrow</p>
        <p>Security account</p>
        <p>Track your money</p>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-bold text-sm'>Go back</p>
        <p>Home</p>
        <p>Features</p>
        <p>Pricing</p>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-semibold text-sm'>Reach out</p>
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
      <div className='flex flex-col gap-5'>
        <p className='font-semibold text-sm'>Newsletter</p>
        <form className='flex flex-row items-center gap-3 text-sm'>
          <input type="text" name="email" id="email" placeholder='Your Email' className='py-2 px-4 rounded-xl outline-none focus:outline-none bg-transparent border' />
          <input type="Submit" className='flex justify-end self-end py-3 px-5 text-sm bg-[#5547D7] text-white rounded-xl cursor-pointer' />
        </form>
        <div className='flex items-center gap-4'>
           <FaLinkedin size={20}/>
           <FaSquareInstagram size={20}/>
           <FaFacebookF size={20}/>
           <FaYoutube size={25}/>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <p>Get Mobile App</p>
          <div className='flex flex-row items-center gap-3'>
            <FaApple size={22}/>
            <FaGooglePlay size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer