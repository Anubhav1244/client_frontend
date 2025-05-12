import React from 'react'
import NavbarTop from './NavbarTop'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const navLinks = [
        {
            label:"Home",
            path:"/"
        },
        {
            label:"About us",
            path:"/about-us"
        },
        {
            label:"NDIS",
            path:"/ndis"
        },
        {
            label:"Services",
            path:"/services"
        },
        // {
        //     label:"Brochure",
        //     path:"/"
        // },
        {
            label:"Contact us",
            path:"/"
        },
    ]


  return (
    <section className='w-full'>
        <NavbarTop/>

        <section className='w-full  bg-pink-600'>
            <div className='w-full   flex justify-center items-center gap-6 py-6 bg-blue-700'>
            {
                navLinks.map((elem,index)=>{
                    return(
                        <Link key={index} to={`${elem.path}`} className='text-lg uppercase text-white'>{elem.label}</Link>
                    )
                })
            }

            </div>


        </section>


    </section>
  )
}

export default Navbar