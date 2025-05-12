import React from 'react'
import Home from './Home'
import NdisHomeEnquiry from '../Components/NdisHomeEnquiry'
import HomeGetYourOffer from '../Components/HomeGetYourOffer'
import HomeService from '../Components/HomeService'
import NDISLandingPage from '../Components/HomeLanding'
import HomeWhyChooseUs from '../Components/HomeWhyChooseUs'
import Hometestimonial from '../Components/Hometestimonial'
import HomeHowWeHelp from '../Components/HomeHowWeHelp'
import NavbarNew from '../Components/NavbarNew'

const HomeAllSections = () => {
  return (
    <section className='w-full overflow-x-hidden'>

        {/* <Home/> */}
        {/* <NavbarNew/> */}
        <NDISLandingPage/>
        <NdisHomeEnquiry/>
        <HomeGetYourOffer/>
        <HomeWhyChooseUs/>
        <HomeService/>
        <Hometestimonial/>
        <HomeHowWeHelp/>

    </section>
  )
}

export default HomeAllSections