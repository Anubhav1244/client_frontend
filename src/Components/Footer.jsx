import React from 'react';
import flag from "../assets/Fla.jpg";
import flag2 from "../assets/flag2.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { label } from 'framer-motion/client';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks =[
    {
      label:"Home",
      path:"/",
    },
    {
      label:"About us",
      path:"/about-us",
    },
   
    {
      label:"Services",
      path:"/services",
    },
    {
      label:"NDIS",
      path:"/Ndis",
    },
   
    {
      label:"Contact Us",
      path:"/contact",
    },
  ]
  return (
    <>
      {/* Acknowledgement Section */}
       <div className="bg-purple-900 text-white py-8 px-4 sm:px-8 text-center ">
        <h1 className="text-xl sm:text-2xl font-serif font-bold mb-2">
          CONTACT US TODAY
        </h1>

        
        <p className="font-serif mb-2 max-w-3xl mx-auto">
          We’re here for you — don’t hesitate to get in touch if you require
          support or advice. Our client managers are on call from 9:00 AM – 5:00 PM.
          Contact us on <strong> 0451223235 , 0423301149
</strong>.
        </p>
        <p className="font-serif font-bold text-green-600">
          Email:{" "}
          <a
            href="mailto:info@nurturedisability.com.au"
            className="underline text-green-600 hover:text-white"
          >
            info@nurturedisability.com.au
          </a>
        </p>
      </div>
     

      {/* Main Footer Links with Hover Animations */}
      <footer className="footer sm:footer-horizontal  bg-white text-black text-xl p-10 flex flex-col md:flex-row justify-around items-start gap-8">
        {/* Logo & Scroll-to-Top */}
        <aside>
          <div className="w-80 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/images/logo.png" alt="logo" className="w-full object-cover hover:opacity-80 transition-opacity duration-300" />
          </div>
          <h6 className='font-serif text-bold text-purple-900'>Nurture Disability Support Services</h6>
        </aside>

        {/* Company Links */}
        <nav>
          <h6 className="text-[#86c400] text-center font-serif text-2xl">Quick Links</h6>
          {footerLinks.map((item,index) => (
            <Link key={index} to={item.path} className="link link-hover  hover:text-primary font-serif text-[18px] transition duration-300">{item.label}</Link>
          ))}
        </nav>
        
        <nav>
  <h6 className="text-lime-500 text-center font-serif text-2xl mb-2">Get In Touch</h6>
  {[
    { icon: <Mail className="w-5 h-5 text-lime-500 mr-2" />, text: "info@nurturedisability.com.au" },
    { icon: <Phone className="w-5 h-5 text-lime-500 mr-2" />, text: "0451223235 , 0423301149" },
    { icon: <MapPin className="w-5 h-5 text-lime-500 mr-2" />, text: "27, Easy St. Loganholme, QLD-4129" },
    { icon: <Clock className="w-5 h-5 text-lime-500 mr-2" />, text: "9:00 AM - 5:00 PM" }
  ].map((item, index) => (
    <a
      key={index}
      className="flex items-center text-black font-serif text-[18px] hover:text-primary transition duration-300 mb-1"
    >
      {item.icon}
      {item.text}
    </a>
  ))}
</nav>
        
          

        {/* Social Media */}
        <nav>
          <h6 className="font-serif text-[#86c400]">Follow Us</h6>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaFacebook className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-sky-400 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-700 transition" /></a>
          </div>
        </nav>
        
        
      </footer>
       
       
    <div className="bg-lime-500 py-4 px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 h-auto md:h-44">
  {/* Left side image */}
  <img
    src={flag}
    alt="Aboriginal and Torres Strait Islander Flags"
    className="h-16 md:h-20 w-auto object-contain"
  />

  {/* Centered text with heading */}
  <div className="flex-1 text-center px-2">
    <h2 className="text-base md:text-lg font-bold text-red-700 font-serif mb-1">
      "See the ability, not the disability"
    </h2>
    <p className="text-xs md:text-sm font-serif">
      We acknowledge the traditional owners of country throughout Australia, and their continuing connection to land, sea and community. We pay our respects to them and their cultures, and to elders past and present.
    </p>
  </div>

  {/* Right side image */}
  <img
    src={flag2}
    alt="Pride and Trans Flags"
    className="h-16 md:h-20 w-auto object-contain"
  />
</div>




      {/* Bottom Footer */}
      <footer className="footer sm:footer-horizontal footer-center  bg-[#59168b] text-base-content p-4 border-t border-base-200">
        <aside>
          <p className="text-sm text-white font-serif">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

