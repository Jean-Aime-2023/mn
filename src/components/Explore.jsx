import React from 'react'
import svg1 from '../assets/images/svg1.png'
import bracelet from '../assets/images/bracelet.png'
import { FaArrowRightLong } from "react-icons/fa6";

import CustomButton from './CustomButton'

const Explore = () => {
    return (
        <div id='Explore' className='darkBlue text-white flex flex-row max-lg:flex-col items-center gap-10 max-lg:gap-[7rem] xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-16'>
            <div className='flex flex-1 max-lg:w-full flex-col gap-[3rem]'>
                <section className='flex flex-col gap-4'>
                    <p className='text-2xl max-sm:text-xl'>Choose Your Own Unique Digital Bracelet  </p>
                    <p className='text-[#CECACA] max-sm:text-sm'>Fully customizable, beautiful and elegant bracelets that are available at a best price allowing you to make transactions anywhere at anytime</p>
                </section>
                <CustomButton
                    otherStyles='bg-[#5846DF] text-white flex flex-row items-center gap-4 max-sm:text-sm rowReverse'
                    icon={<FaArrowRightLong />}
                    action={'Explore more'}
                    onClick={() => { }}
                />
            </div>
            <div className='flex flex-1 max-lg:w-full h-full'>
                <div className='flex flex-row items-center'>
                    <section><img src={svg1} alt="" className='max-lg:h-full max-lg:w-full' /></section>
                    <section className='max-lg:h-full max-lg:w-full' ><img src={bracelet} alt="" className='max-lg:h-full max-lg:w-full' /></section>
                </div>
            </div>
        </div>
    )
}

export default Explore