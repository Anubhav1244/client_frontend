import React from 'react';

const NDISBanner = () => {
  return (
    <div className="relative font-serif w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[550px] flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-300 to-green-300 overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://www.wmq.org.au/images/default-source/core-images-library/disability-images/ndis-social-and-community-participation.jpg?sfvrsn=95b4f76c_2"
        alt="Supported Independent Living"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Text Overlay */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          NDIS Provider
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-4">
          NDIS
        </p>
      </div>
    </div>
  );
};

export default NDISBanner;
