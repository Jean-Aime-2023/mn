import React, { useState } from 'react'
import logo from '../assets/logos/mince2.png'
import googleLogo from '../assets/logos/google.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { setDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify';

const Login = () => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password, password2);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstname: firstname,
          lastname: lastname,
          password: password,
          password2: password2,
          phonenumber: phonenumber,
          checked: isChecked
        });
      }
      console.log('user registered successfully');
      toast.success("User registration successful!!", {
        position: "bottom-left"
      })
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "bottom-left"
      })
    }
  }

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
          <form className='flex flex-col justify-center gap-5' onSubmit={handleRegister}>
            <div className='flex flex-row items-center justify-between max-lg:flex-col max-lg:gap-7'>
              <div className='flex flex-col gap-4 flex- max-lg:w-full'>
                <label htmlFor="fname" className='text-[#6B6B6B]'>First Name</label>
                <input type="text" placeholder='John' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' onChange={(e) => setFirstname(e.target.value)} />
              </div>
              <div className='flex flex-col gap-5 flex- max-lg:w-full'>
                <label htmlFor="lname" className='text-[#6B6B6B]'>Last Name</label>
                <input type="text" placeholder='Doe' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' onChange={(e) => setLastname(e.target.value)} />
              </div>
            </div>
            <label htmlFor="email" className='text-[#6B6B6B]'>Email</label>
            <input type="email" placeholder='Youremail@gmail.com' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' onChange={(e) => setEmail(e.target.value)} />
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
              onChange={(phoneNumber) => setPhonenumber(phoneNumber)} // Update to directly set phoneNumber
              placeholder='_ _ _   _ _ _   _ _ _'
            />
            <label htmlFor="password" className='text-[#6B6B6B]'>Password</label>
            <input type="password" placeholder='Your password' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password" className='text-[#6B6B6B]'>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' className='py-3 px-4 border-2 border-[#CECACA] rounded-md outline-none focus:outline-none' onChange={(e) => setPassword2(e.target.value)} />
            <div className='flex flow-row gap-3 items-center'>
              <input type="checkbox" id="agree" name="agree" className='w-[18px] h-[18px]' onChange={(e) => setIsChecked(e.target.value)} />
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