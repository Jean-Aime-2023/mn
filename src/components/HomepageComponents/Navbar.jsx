import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { NavLink, useNavigate } from 'react-router-dom';
import minceLogo from '../../assets/logos/mince.png'
import CustomButton from './CustomButton';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);
    const handleSetActive = (to) => {
        console.log(to);
    };
    const openMenuFunc = () => {
        setOpenMenu(true)
    }
    const closeMenuFunc = () => {
        setOpenMenu(false)
    }

    return (
        <div className='darkBlue fixed w-screen z-20 flex flex-row items-center justify-between xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-5 max-lg:text-sm'>
            <div>
                <NavLink
                    to="/"
                    className="flex flex-row items-center gap-3"
                >
                    <img
                        src={minceLogo}
                        alt="/"
                        className="w-[50px] h-[45px] max-lg:w-[50px] max-lg:h-[40px]"
                    />
                    <h1 className="minceText text-[23px] duration-300 max-sm:text-[17px]">
                        MinceTech
                    </h1>
                </NavLink>
            </div>
            <ul className='flex flex-row xl:gap-10 gap-2 text-white max-md:hidden'>
                <Link to="Hero" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer' activeClassName='active' onSetActive={handleSetActive}>Home</Link>
                <Link to="Features" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer' activeClassName='active' onSetActive={handleSetActive}>Features</Link>
                <Link to="Pricing" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Pricing</Link>
                <Link to="Customers" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Customers</Link>
                <Link to="Explore" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>Explore</Link>
                <Link to="Questions" spy={true} smooth={true} offset={-150} duration={500} className='cursor-pointer'>Questions</Link>
            </ul>
            <div className='flex flex-row items-center gap-5 max-md:hidden'>
                <CustomButton
                    otherStyles='bg-transparent border border-2 border-white text-white hover:bg-white hover:text-[#5846DF]'
                    action={'Login'}
                    onClick={() => navigate("/login")}
                />
                <CustomButton
                    otherStyles='bg-[#5846DF] text-white'
                    action={'Register'}
                    onClick={() => navigate("/signup")}
                />
            </div>
            <div onClick={() => openMenuFunc()} className='max-md:block md:hidden bg-secondary-100 p-2 rounded-lg shadow-2xl cursor-pointer'>
                <CiMenuFries color='white' size={25} fontWeight={20} />
            </div>
            <div className={`${!openMenu ? 'hidden' : 'block'} bg-black/70 w-full h-screen fixed top-0 left-0 z-10`}>
                <div className={`${openMenu ?
                    'absolute top-0 left-0 w-[50%] h-screen flex flex-col gap-14 py-10 px-7 max-sm:px-5' :
                    'absolute top-0 left-[-100px] p-10 ease-in duration-500'} darkBlue
                    `}>
                    <div className='flex flex-row justify-between'>
                        <NavLink
                            to="/"
                            className="flex flex-row items-center gap-3"
                        >
                            <img
                                src={minceLogo}
                                alt="/"
                                className="w-[50px] h-[45px] max-lg:w-[50px] max-lg:h-[40px]"
                            />
                            <h1 className="minceText text-[23px] duration-300 max-sm:text-[17px]">
                                MinceTech
                            </h1>
                        </NavLink>
                        <div onClick={() => closeMenuFunc()} className='max-md:block darkBlue p-2 rounded-lg shadow-2xl cursor-pointer'>
                            <IoClose color='white' size={25} fontWeight={20} />
                        </div>
                    </div>
                    <ul className='flex flex-col gap-10 text-white text-lg max-sm:text-sm'>
                        <Link to="Hero" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Home</Link>
                        <Link to="Features" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Features</Link>
                        <Link to="Pricing" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Pricing</Link>
                        <Link to="Customers" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Customers</Link>
                        <Link to="Explore" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Explore</Link>
                        <Link to="Questions" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>Questions</Link>
                    </ul>
                    <div className='flex flex-col gap-6'>
                        <CustomButton
                            otherStyles='bg-transparent w-full border border-2 border-white text-white hover:bg-white hover:text-[#5846DF]'
                            action={'Login'}
                            onClick={() => { }}
                        />
                        <CustomButton
                            otherStyles='bg-[#5846DF] w-full text-white'
                            action={'Register'}
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar