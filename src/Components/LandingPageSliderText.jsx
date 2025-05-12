import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageSliderText = () => {
  return (
    <section className='w-full  text-cyan-400 font-serif'>
        <h1 className='text-2xl '>Welcome to</h1>
        <h1 className='text-5xl font-semibold'>Nurture Disability Support Services</h1>
        <p className='text-xl font-semibold mt-4 mb-6'>About us</p>
        <Link className='px-6 py-2  bg-cyan-800 text-white rounded-xl'>View details</Link>
    </section>
  )
}

export default LandingPageSliderText