import React from 'react'
import lineSvg from '../assets/images/Line.png'
import img from '../assets/images/Group 37735.png'

const HeroSection = () => {
    return (
        <div id='Hero' className='flex flex-row justify-between w-full xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-5 text-white max-lg:flex-col max-lg:items-center max-lg:justify-center'>
            <div className='flex flex-1 flex-row items-center xl:px-32 lg:px-16 gap-9 relative w-full max-md:px-0 overflow-y-hidden'>
                <div className='h-[50%] flex justify-center items-center'>
                <img src={lineSvg} alt="line svg" className='max-sm:w-14'/>
                </div>
                <section className='flex flex-col gap-8 max-sm:gap-5'>
                    <p className='text-4xl max-sm:text-2xl'>Transforming Tech with <br className='max-md:hidden' /> <span className='minceText'>Mince</span>Tech</p>
                    <p className='text-lg text-[#CECACA] max-sm:text-sm'>Get access to top private and venture capital firms and <br className='lg:hidden max-sm:hidden' /> conveniently make your own deal.</p>
                </section>
            </div>
            <div className='flex flex-1'>
                <img src={img} alt="/" className=''/>
            </div>
        </div>
    )
}

export default HeroSection