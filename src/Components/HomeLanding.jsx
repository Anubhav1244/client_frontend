import React, { useState, useEffect } from 'react'; // ✅ added useEffect
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NDISLandingPage = () => {
  const backgroundImages = [
    '/images/pic7.jpg',
    '/images/pic4.jpg',
    '/images/pic5.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  // ✅ Lazy load images (preload on mount)
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="font-serif antialiased min-h-screen">
      <header
        className="relative flex items-center justify-center min-h-screen bg-center bg-cover transition-all duration-700"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
        }}
      >
        <div className="absolute inset-0  bg-opacity-50"></div>

        <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
            <motion.div
              className="text-center md:text-left mb-10 md:mb-0 md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-tight mb-8 text-white">
                <span className="block text-green-400 font-serif text-2xl sm:text-3xl mb-2">
                  Welcome to
                </span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Nurture DisAbility Support Services
                </motion.span>
              </h1>

              <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
                <Link to="../services">
                  <button className="bg-purple-800 hover:bg-purple-600 text-white font-serif font-bold cursor-pointer py-3 px-8 rounded-2xl transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleImageChange(index)}
                className={`w-4 h-4 rounded-full border-2 transition ${
                  index === currentImage
                    ? 'bg-white border-white'
                    : 'bg-gray-400 border-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default NDISLandingPage;
