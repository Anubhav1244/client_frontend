import React from "react";
import { motion } from "framer-motion";

const NdisHomeEnquiry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 flex flex-col lg:flex-row items-start justify-between px-6 md:px-16 py-16 gap-10">
      {/* Left Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-3xl p-10 w-full lg:w-1/2 border border-purple-100"
      >
        <h2 className="text-3xl  text-purple-900 mb-8 font-serif tracking-wide">
          MAKE AN ENQUIRY
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 font-serif md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm"
            />
            <input
              type="tel"
              placeholder="Telephone"
              className="border border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm"
            />
            <input
              placeholder="Location of Service"
              className="border border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full border font-serif border-purple-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm resize-none"
          ></textarea>
          <div className="text-left">
            <button
              type="submit"
              className="bg-purple-800 font-serif hover:bg-purple-700 text-white text-lg font-medium py-3 px-10 rounded-xl transition duration-300 shadow-lg"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </motion.div>

      {/* Right Info Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/2 font-serif flex flex-col justify-between gap-10"
      >
        <div>
          <h3 className="text-3xl md:text-3xl font-serif  text-purple-900 mb-4 leading-snug">
            Disability Support Services in Australia
          </h3>
          <h4 className="text-2xl md:text-2xl font-serif text-purple-800 mb-6 leading-tight">
            PERSONALISED CARE PLANS FOR THE BETTERMENT OF A COMMUNITY
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Nurture Disability Support Services offers a complete range of NDIS approved support
            services to the clients. Our commitment to improving the client’s
            life quality makes us second to none. We believe that everyone
            should have a chance to express themselves on their own. Our
            professional team offers a wide range of support services to people
            living with disabilities.
          </p>
          <p className="text-gray-700 text-lg">
            Call us today and we will provide you the best possible support to
            meet all your care needs.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://www.muslimcare.org.au/wp-content/uploads/2021/08/NDIS-1.png"
            alt="NDIS Logo"
            className="w-36 md:w-48 drop-shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NdisHomeEnquiry;
