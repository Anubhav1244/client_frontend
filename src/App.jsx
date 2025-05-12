import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomeAllSections from './Pages/HomeAllSections'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NavbarNew from './Components/NavbarNew'
import Service from './Pages/Service'
import NDIS from './Pages/Ndis'

const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <NavbarNew/>
    <Routes>
      <Route element={<HomeAllSections/>}  path='/'/>
      <Route element={<About/>}  path='/about-us'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Service/>} path='/services'/>
      <Route element={<NDIS/>} path='/Ndis'/>

    </Routes>

    <Footer/>
    </>
  )
}

export default App