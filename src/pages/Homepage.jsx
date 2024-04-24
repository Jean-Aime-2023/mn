import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Tools from '../components/Tools'
import Features from '../components/Features'
import Price from '../components/Price'
import { Button } from '../components/ui/button'
import Customers from '../components/Customers'
import Explore from '../components/Explore'
import Questions from '../components/Questions'
import Footer from '../components/Footer'

const Homepage = () => {
    return (
        <div className='flex flex-col gap-10 scrollbar-hidden'>
            <div className='darkBlue flex flex-col gap-4'>
                <Navbar />
                <HeroSection/>
            </div>
            <Tools/>
            {/* <Button>Code With Aime</Button> */}
            <Features/>
            <Price/>
            <Customers/>
            <Explore/>
            <Questions/>
            <Footer/>
        </div>
    )
}

export default Homepage