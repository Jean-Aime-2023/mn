import React from 'react'
import Navbar from '../components/HomepageComponents/Navbar'
import HeroSection from '../components/HomepageComponents/HeroSection'
import Tools from '../components/HomepageComponents/Tools'
import Features from '../components/HomepageComponents/Features'
import Price from '../components/HomepageComponents/Price'
import Customers from '../components/HomepageComponents/Customers'
import Explore from '../components/HomepageComponents/Explore'
import Questions from '../components/HomepageComponents/Questions'
import Footer from '../components/HomepageComponents/Footer'

const Homepage = () => {
    return (
        <div className='flex flex-col gap-10 scrollbar-hidden'>
            <div className='darkBlue flex flex-col gap-4'>
                <Navbar />
                <HeroSection />
            </div>
            <Tools />
            {/* <Button>Code With Aime</Button> */}
            <Features />
            <Price />
            <Customers />
            <Explore />
            <Questions />
            <Footer />
        </div>
    )
}

export default Homepage