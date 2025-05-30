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
import GetHelpNowForm from './Components/Gethelp'
import ScrollToTop from './Components/ScrollToTop'
// import ParentComponent from './Components/ParentformComponent'

const App = () => {
  return (
    <>
    {/* <ParentComponent/> */}
    {/* <Navbar/> */}
     <ScrollToTop />
    <NavbarNew/>
    <Routes>
      
      <Route element={<GetHelpNowForm/>} path='/Gethelp'/>
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