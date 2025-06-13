import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeGetYourOffer = () => {
  return (
    <section className="bg-[#f7f7f7]  py-8 px-4 sm:px-8 md:px-12 lg:px-16  mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 md:gap-16">
        
        {/* Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-md md:max-w-sm flex-shrink-0"
        >
          <img
            src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Consultation"
            className="rounded-xl shadow-lg w-full h-64 sm:h-72 md:h-80 object-cover"
          />
        </motion.div>

        {/* Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-1/2 font-serif text-center md:text-left px-2 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-purple-900 mb-4 leading-tight">
            Get Your Special Offers Today
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-2">
            Simply contact our consultant today on <strong>0411910741 , 0423301149</strong> and
            make an appointment to meet in your home or anywhere you find ideal and
            receive your welcome pack.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Once you are a Nurture Disability Support Services member, you will receive your first
            hour for free.
          </p>
          <Link to="/participant">
            <button className="bg-purple-900 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition">
              Sign Up
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGetYourOffer;
