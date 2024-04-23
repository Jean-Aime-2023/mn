import React from 'react'
import icon1 from '../assets/images/Third party.png'
import icon2 from '../assets/images/Contract.png'
import icon3 from '../assets/images/Cyber security.png'

const Features = () => {
    return (
        <div className='flex flex-col items-center justify-between gap-10 xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-16'>
            <section className='flex flex-col gap-4 text-center'>
            <h2 className='text-[#002159] font-semibold text-xl'>Our amazing feature you will love</h2>
            <p className='text-[#6B6B6B]'>Enable a streamlined and effortless process for conducting transactions by utilizing a single tap.</p>
            </section>
            <div className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 p-10 gap-14'>
                <div className='flex flex-col justify-center items-center rounded-xl h-[250px] w-[300px] shadow-lg gap-6 p-8 max-sm:w-full'>
                    <section className='flex flex-row items-center gap-7 w-full'>
                        <section className='p-4 bg-[#5547D7] rounded-full'><img src={icon1} alt="" /></section>
                        <p className='text-[#002159] text-[15px]'>Escrow Services</p>
                    </section>
                    <p className='text-[#6B6B6B] text-[15px] self-start'>Our platform seamlessly integrates diverse financial services, offering you a unified experience. </p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl h-[250px] w-[300px] shadow-lg gap-6 p-8 max-sm:w-full'>
                    <section className='flex flex-row items-center gap-7 w-full'>
                        <section className='p-4 bg-[#5547D7] rounded-full'><img src={icon2} alt="" /></section>
                        <p className='text-[#002159] text-[15px]'>Innovation</p>
                    </section>
                    <p className='text-[#6B6B6B] text-[15px] self-start'>Our platform seamlessly integrates diverse financial services, offering you a unified experience. </p>
                </div>
                <div className='flex flex-col justify-center items-center rounded-xl h-[250px] w-[300px] shadow-lg gap-6 p-8 max-sm:w-full'>
                    <section className='flex flex-row items-center gap-7 w-full'>
                        <section className='p-4 bg-[#5547D7] rounded-full'><img src={icon3} alt="" /></section>
                        <p className='text-[#002159] text-[15px]'>Global Connectivity</p>
                    </section>
                    <p className='text-[#6B6B6B] text-[15px] self-start'>Our platform seamlessly integrates diverse financial services, offering you a unified experience. </p>
                </div>

            </div>
        </div>
    )
}

export default Features;