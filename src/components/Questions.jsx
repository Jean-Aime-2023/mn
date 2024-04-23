import React from 'react'
import { AccordionDemo } from './Accordion'

const Questions = () => {
  return (
    <div className='flex flex-row justify-between max-lg:flex-col items-center gap-20 max-lg:gap-[7rem] xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-16'>
      <div className='flex flex-col gap-8 flex-1 lg:self-start max-lg:w-full'>
        <p className='text-[#002159] font-semibold text-xl'>Frequently Asked Questions</p>
        <AccordionDemo />
      </div>
      {/* <div className='max-lg:hidden'></div> */}
      <div className='flex flex-col gap-8 flex-1 max-lg:w-full'>
        <p className='text-[#002159] font-semibold text-xl'>Ask a different question</p>
        <form action="" className='flex flex-col gap-8'>
          <input type="text" placeholder='Name' className='py-3 px-4 text-sm outline-none focus:outline-none borderB bg-white/85 rounded-lg' />
          <input type="text" placeholder='Email' className='py-3 px-4 text-sm outline-none focus:outline-none borderB bg-white/85 rounded-lg' />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='py-3 px-4 text-sm outline-none focus:outline-none borderB bg-white/85 rounded-lg'></textarea>
          <input type="Submit" className='flex justify-end self-end py-3 px-5 text-sm bg-[#5547D7] text-white rounded-xl cursor-pointer' />
        </form>
      </div>
    </div>
  )
}

export default Questions