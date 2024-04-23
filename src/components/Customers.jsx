import React from 'react'
import bk from '../assets/images/bk.png'
import visa from '../assets/images/visa.png'
import momo from '../assets/images/momo.png'
import mastercard from '../assets/images/mastercard.png'
import paypal from '../assets/images/paypal.png'

const Customers = () => {
    return (
        <div className='flex flex-col items-center justify-between gap-10 xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-16'>
            <h2 className='text-[#002159] font-semibold text-xl'>What Our Happy Customers Say About MinceTech</h2>
            <div className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 p-10 gap-14'>
                <div className='flex flex-col justify-start items-start rounded-xl shadow-lg gap-6 p-12 max-sm:w-full'>
                    <p className='text-[#002159] text-xl'>“The Best Customer Services, Period”</p>
                    <p className='text-[#6B6B6B] text-sm'>Amazing app! User-friendly interface, seamless navigation, and a game-changer for productivity. Highly recommend!</p>
                    <section className='flex flex-row gap-3 items-center'>
                        <div className='rounded-full'>
                            <img src="https://images.pexels.com/photos/20669432/pexels-photo-20669432/free-photo-of-woman-in-jeans-and-orange-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-[50px] h-[50px]' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-[#002159] text-xl'>Angele Marie</p>
                            <p className='text-[#6B6B6B] text-sm'>CEO&Product Designer At Maas Ltd   </p>
                        </div>
                    </section>
                </div>
                <div className='flex flex-col justify-start items-start rounded-xl shadow-lg gap-6 p-12 max-sm:w-full'>
                    <p className='text-[#002159] text-xl'>“The Best Customer Services, Period”</p>
                    <p className='text-[#6B6B6B] text-sm'>Amazing app! User-friendly interface, seamless navigation, and a game-changer for productivity. Highly recommend!</p>
                    <section className='flex flex-row gap-3 items-center'>
                        <div className='rounded-full'>
                            <img src="https://images.pexels.com/photos/20669432/pexels-photo-20669432/free-photo-of-woman-in-jeans-and-orange-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-[50px] h-[50px]' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-[#002159] text-xl'>Angele Marie</p>
                            <p className='text-[#6B6B6B] text-sm'>CEO&Product Designer At Maas Ltd   </p>
                        </div>
                    </section>
                </div>
                <div className='flex flex-col justify-start items-start rounded-xl shadow-lg gap-6 p-12 max-sm:w-full'>
                    <p className='text-[#002159] text-xl'>“The Best Customer Services, Period”</p>
                    <p className='text-[#6B6B6B] text-sm'>Amazing app! User-friendly interface, seamless navigation, and a game-changer for productivity. Highly recommend!</p>
                    <section className='flex flex-row gap-3 items-center'>
                        <div className='rounded-full'>
                            <img src="https://images.pexels.com/photos/20669432/pexels-photo-20669432/free-photo-of-woman-in-jeans-and-orange-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='w-[50px] h-[50px]' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-[#002159] text-xl'>Angele Marie</p>
                            <p className='text-[#6B6B6B] text-sm'>CEO&Product Designer At Maas Ltd   </p>
                        </div>
                    </section>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full gap-[4rem] py-20'>
                <h2 className='text-[#002159] font-semibold text-xl'>Our partners</h2>
                <div className='grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 gap-[10rem]'>
                    <div><img src={mastercard} alt="" /></div>
                    <div><img src={visa} alt="" /></div>
                    <div><img src={paypal} alt="" /></div>
                    <div><img src={momo} alt="" /></div>
                    <div><img src={bk} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Customers