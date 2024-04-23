import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import CustomButton from './CustomButton'
import { FaRegCircleCheck } from "react-icons/fa6";


const Price = () => {
    return (
        <div id='Pricing' className='darkBlue text-white flex flex-col items-center justify-between gap-10 xl:px-28 lg:px-20 md:px-10 max-md:px-8 py-16'>
            <section className='flex flex-col gap-4 text-center'>
                <h2 className='text-xl'>Explorer our amazing tools</h2>
                <p>Enable a streamlined and effortless process for conducting transactions by utilizing a single tap.</p>
            </section>
            <Tabs defaultValue="yearly" className="flex flex-col justify-center items-center w-full gap-6">
                <TabsList>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <TabsContent className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:w-full' value="monthly">
                    <div className="border-2 border-white rounded-xl px-10 py-9 flex flex-col gap-6 w-[250px] h-[440px] text-[17px] max-sm:w-full" >
                        <section className='flex flex-col max-sm:items-center'>
                            <p>Free Trial</p>
                            <p>$ 0.00</p>
                        </section>

                        <hr className='border-2 border-white' />

                        <section className='flex flex-col gap-6'>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>14 days</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Chat Support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>24/7 support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Finger print</span>
                            </p>
                            <CustomButton
                                otherStyles='bg-[#5846DF] w-full text-white text-sm'
                                action={'Get Started'}
                                onClick={() => { }}
                            />
                        </section>
                    </div>
                    <div className="border-2 border-white rounded-xl px-10 py-9 flex flex-col gap-6 w-[250px] h-[440px] text-[17px] max-sm:w-full" >
                        <section className='flex flex-col max-sm:items-center'>
                            <p>Basic</p>
                            <p>$ 4.99</p>
                        </section>

                        <hr className='border-2 border-white' />

                        <section className='flex flex-col gap-6'>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>14 days</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Chat Support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>24/7 support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Finger print & Face Recognition</span>
                            </p>
                            <CustomButton
                                otherStyles='bg-[#5846DF] w-full text-white text-sm'
                                action={'Get Started'}
                                onClick={() => { }}
                            />
                        </section>
                    </div>
                    <div className="border-2 border-white rounded-xl px-10 py-9 flex flex-col gap-6 w-[250px] h-[440px] text-[17px] max-sm:w-full" >
                        <section className='flex flex-col max-sm:items-center'>
                            <p>Premium</p>
                            <p>$ 9.99</p>
                        </section>

                        <hr className='border-2 border-white' />

                        <section className='flex flex-col gap-6'>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>14 days</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Chat Support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>24/7 support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Finger print,Face Recognition && </span>
                            </p>
                            <CustomButton
                                otherStyles='bg-[#5846DF] w-full text-white text-sm'
                                action={'Get Started'}
                                onClick={() => { }}
                            />
                        </section>
                    </div>
                </TabsContent>
                <TabsContent className='grid lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:w-full' value="yearly">
                    <div className="border-2 border-white rounded-xl px-10 py-9 flex flex-col gap-6 w-[250px] h-[440px] text-[17px] max-sm:w-full" >
                        <section className='flex flex-col max-sm:items-center'>
                            <p>Free Trial</p>
                            <p>$ 0.00</p>
                        </section>

                        <hr className='border-2 border-white' />

                        <section className='flex flex-col gap-6'>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>14 days</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Chat Support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>24/7 support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Finger print</span>
                            </p>
                            <CustomButton
                                otherStyles='bg-[#5846DF] w-full text-white text-sm'
                                action={'Get Started'}
                                onClick={() => { }}
                            />
                        </section>
                    </div>
                    <div className="border-2 border-white rounded-xl px-10 py-9 flex flex-col gap-6 w-[250px] h-[440px] text-[17px] max-sm:w-full" >
                        <section className='flex flex-col max-sm:items-center'>
                            <p>Basic</p>
                            <p>$ 4.99</p>
                        </section>

                        <hr className='border-2 border-white' />

                        <section className='flex flex-col gap-6'>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>14 days</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Chat Support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>24/7 support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Finger print & Face Recognition</span>
                            </p>
                            <CustomButton
                                otherStyles='bg-[#5846DF] w-full text-white text-sm'
                                action={'Get Started'}
                                onClick={() => { }}
                            />
                        </section>
                    </div>
                    <div className="border-2 border-white rounded-xl px-10 py-9 flex flex-col gap-6 w-[250px] h-[440px] text-[17px] max-sm:w-full" >
                        <section className='flex flex-col max-sm:items-center'>
                            <p>Premium</p>
                            <p>$ 9.99</p>
                        </section>

                        <hr className='border-2 border-white' />

                        <section className='flex flex-col gap-6'>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>14 days</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Chat Support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>24/7 support</span>
                            </p>
                            <p className='flex flex-row gap-4 text-sm max-sm:justify-center'>
                                <span><FaRegCircleCheck color='green' /></span>
                                <span>Finger print,Face Recognition && </span>
                            </p>
                            <CustomButton
                                otherStyles='bg-[#5846DF] w-full text-white text-sm'
                                action={'Get Started'}
                                onClick={() => { }}
                            />
                        </section>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default Price