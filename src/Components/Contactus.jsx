import React from "react";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[280px] flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-300 to-green-300 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.wmq.org.au/images/default-source/core-images-library/disability-images/ndis-social-and-community-participation.jpg?sfvrsn=95b4f76c_2"
        alt="Supported Independent Living"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      
      {/* Text Overlay */}
      <div className="relative font-serif text-white px-4">
        <h1 className="text-4xl md:text-5xl ">
          Contact Us
        </h1>
       
      </div>
    </div>
  );
};

export default ContactBanner;
