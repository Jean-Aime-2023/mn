import React, { useState } from 'react'
import logo from '../assets/logos/mince2.png'
import googleLogo from '../assets/logos/google.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  return (
    <div className='w-screen flex justify-center items-center h-screen max-sm:text-sm my-20'>
      <div className='flex flex-col gap-9 lg:w-[38%] max-lg:w-[80%]'>
        <section className='flex flex-col gap-6 justify-center items-center'>
          <div><img src={logo} alt="" className='w-[70px] h-[50px]' /></div>
          <p className='text-[#002159] text-lg font-semibold'>Create you account</p>
        </section>
        <section className='flex flex-col justify-center gap-6'>
          <div className='flex flex-col justify-center gap-9'>
            <section className='flex flex-row justify-center items-center py-4 rounded-md gap-3 border-2 cursor-pointer border-[#CECACA]'>
              <img src={googleLogo} alt="" className='w-[22px] h-[22px]' />
              <p className='text-[#6B6B6B]'>Sign in with Google</p>
            </section>
            <section className='flex flex-row justify-center items-center gap-6 w-full'>
              <hr className='border border-[#CECACA] w-[40%]' />
              <p className='w-[20%] flex items-center justify-center'>OR</p>
              <hr className='border border-[#CECACA] w-[40%]' />
            </section>
          </div>
          <form className='flex flex-col justify-center gap-5'>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-col gap-4'>
                <label htmlFor="email" className='text-[#6B6B6B]'>First Name</label>
                <input type="email" placeholder='John' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' />
              </div>
              <div className='flex flex-col gap-5'>
                <label htmlFor="email" className='text-[#6B6B6B]'>Last Name</label>
                <input type="email" placeholder='Doe' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' />
              </div>
            </div>
            <label htmlFor="email" className='text-[#6B6B6B]'>Email</label>
            <input type="email" placeholder='Youremail@gmail.com' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' />
            <label htmlFor="email" className='text-[#6B6B6B]'>Phone Number</label>
            <PhoneInput
              country={'rw'}
              inputStyle={{
                width: '100%',
                height: '50px',
                border: '2px solid #CECACA',
                fontSize: '17px'
              }}
              specialLabel='Phone Number'
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              placeholder='_ _ _   _ _ _   _ _ _'
            />

            <label htmlFor="password" className='text-[#6B6B6B]'>Password</label>
            <input type="password" placeholder='Your password' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' />
            <label htmlFor="password" className='text-[#6B6B6B]'>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' />
            <div className='flex flow-row gap-3 items-center'>
              <input type="checkbox" id="agree" name="agree" className='w-[18px] h-[18px]' />
              <label htmlFor="agree" className='text-[#6B6B6B]'>Remember me</label>
            </div>
            <button type="submit" className='w-full darkBlue rounded-md text-white py-4 cursor-pointer'>Sign Up</button>
          </form>
        </section>
        <section className='flex flex-row justify-between text-[#5547D7]'>
          <p className='cursor-pointer' onClick={() => navigate("/")}>Back to Home</p>
          <p className='flex flex-row items-center gap-3'><span className='text-[#6B6B6B]'>Have an account ?</span> <span onClick={() => navigate("/login")} className='flex flex-row items-center gap-1 cursor-pointer'>Sign In <FaArrowRightLong /></span></p>
        </section>
      </div>
    </div>
  )
}

export default Login