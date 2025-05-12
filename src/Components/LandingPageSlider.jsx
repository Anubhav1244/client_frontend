import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import LandingPageSliderText from './LandingPageSliderText';

const LandingPageSlider = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); // show popup after 1 second
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative ">
      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0"
      >
        {[
          "https://images.unsplash.com/photo-1589104759909-e355f8999f7e",
          "https://images.unsplash.com/photo-1660795498419-770a46809b8d",
          "https://images.unsplash.com/photo-1631558554184-319c88f4f8a4",
        ].map((url, i) => (
          <SwiperSlide key={i} className="relative overflow-x-hidden">
            <img
              src={`${url}?auto=format&fit=crop&w=2070&q=80`}
              alt="slider"
              className="w-full object-cover h-screen"
            />
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <LandingPageSliderText />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal (above everything) */}
      {showModal && (
        <div className="fixed inset-0 w-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-2 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full border p-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageSlider;
