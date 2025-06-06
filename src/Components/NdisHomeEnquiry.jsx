import React, { useState } from "react";
import { motion } from "framer-motion";
import { apiConnector } from "../ApiConnector/Axios";
import toast from "react-hot-toast";
import {MAKE_ENQUIRY} from "../ApiConnector/apis";

const NdisHomeEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    locationofservice: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData };

    setLoading(true);
    try {
      const res = await apiConnector("POST", MAKE_ENQUIRY, data);
      if (res.status === 200) {
        toast.success("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          locationofservice: "",
          message: ""
        });
      } else {
        toast.error("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-purple-50 flex flex-col lg:flex-row items-start justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-10 md:py-16 gap-10">
      {loading && (
        <div className="absolute inset-0 bg-white/60 z-50 flex flex-col justify-center items-center space-y-4">
          <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-700 rounded-full animate-spin" aria-label="Loading Spinner" role="status"></div>
          <p className="text-purple-800 text-lg font-semibold font-serif">Submitting...</p>
        </div>
      )}

      {/* Left Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 w-full lg:w-1/2 border border-purple-100"
      >
        <h2 className="text-2xl sm:text-3xl text-purple-900 mb-6 sm:mb-8 font-serif tracking-wide text-center lg:text-left">
          MAKE AN ENQUIRY
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 font-serif md:grid-cols-2 gap-6">
            <input name="name" required type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="border text-black border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm" />
            <input name="email" required type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border text-black border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm" />
            <input name="phone" type="tel" placeholder="Telephone" value={formData.phone} onChange={handleChange} className="border text-black border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm" />
            <input name="locationofservice" placeholder="Location of Service" value={formData.locationofservice} onChange={handleChange} className="border text-black border-purple-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm" />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border text-black font-serif border-purple-300 rounded-xl p-4 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all shadow-sm resize-none"
          ></textarea>

          <div className="text-center lg:text-left">
            <button
              type="submit"
              className={`bg-purple-800 font-serif hover:bg-purple-700 text-white text-lg font-medium py-3 px-10 rounded-xl transition duration-300 shadow-lg flex items-center justify-center gap-2 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
              disabled={loading}
            >
              {loading && (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
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
          <h3 className="text-2xl sm:text-3xl text-purple-900 mb-4 leading-snug text-center lg:text-left">
            Disability Support Services in Australia
          </h3>
          <h4 className="text-xl sm:text-2xl text-purple-800 mb-6 leading-tight text-center lg:text-left">
            PERSONALISED CARE PLANS FOR THE BETTERMENT OF A COMMUNITY
          </h4>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center lg:text-left">
            Nurture Disability Support Services offers a complete range of NDIS approved support
            services to the clients. Our commitment to improving the client’s
            life quality makes us second to none...
          </p>
          <p className="text-gray-700 text-base sm:text-lg text-center lg:text-left">
            Call us today and we will provide you the best possible support to meet all your care needs.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://www.muslimcare.org.au/wp-content/uploads/2021/08/NDIS-1.png"
            alt="NDIS Logo"
            className="w-28 sm:w-36 md:w-48 drop-shadow-md"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NdisHomeEnquiry;
