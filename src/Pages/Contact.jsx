import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import ContactBanner from '../Components/Contactus';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { apiConnector } from '../ApiConnector/Axios';
import { CONTACTUS } from '../ApiConnector/apis';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', surname: '', email: '', phone: '', location: '', role: '', message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in the required fields.');
      return;
    }
    const data={
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            role: formData.role,
            message: formData.message,
    }
    try {
      const response = await apiConnector('POST', CONTACTUS, data, null, null);
      console.log(response);
      setTimeout(() => setSubmitted(false), 4000);
      if (response.status!== 200 && response.status !== 204) {
        toast.error('Failed to send message');
        throw new Error('Failed to send message');

      }

      setSubmitted(true);
      toast.success('Message sent successfully!');
      setFormData({ name: '', surname: '', email: '', phone: '', location: '', role: '', message: '' });

      
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <ContactBanner />
      <h2 className="text-3xl font-serif px-4 md:px-16 mt-10 text-purple-900 mb-8">GET IN TOUCH</h2>

      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-16">
        <form onSubmit={handleSubmit} className="flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['name', 'surname', 'email', 'phone', 'location', 'role'].map((field, i) => (
              <input
                key={i}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type={field === 'email' ? 'email' : 'text'}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
              />
            ))}
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-900 text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-700 transition"
            onClick={handleSubmit}
          >
            SUBMIT
          </motion.button>

          <nav>
            <div className="flex gap-4 mb-4 text-xl">
              <a href="#"><FaFacebook className="hover:text-blue-500 transition" /></a>
              <a href="#"><FaTwitter className="hover:text-sky-400 transition" /></a>
              <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
              <a href="#"><FaLinkedin className="hover:text-blue-700 transition" /></a>
            </div>
          </nav>
        </form>

        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-md text-center cursor-pointer"
            style={{ boxShadow: "0 4px 20px rgba(59, 130, 246, 0.5)" }}
          >
            <div className="flex justify-center mb-4">
              <i className="fas fa-phone-alt text-lime-500 text-3xl"></i>
            </div>
            <h3 className="text-purple-900 text-lg mb-2">Phone</h3>
            <a href="tel:1800911999" className="text-gray-600 hover:text-purple-700">
              0411910741 , 0423301149
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="shadow-lg p-8 rounded-md text-center cursor-pointer"
            style={{ boxShadow: "0 4px 20px rgba(59, 130, 246, 0.5)" }}
          >
            <div className="flex justify-center mb-4">
              <i className="fas fa-envelope text-lime-500 text-3xl"></i>
            </div>
            <h3 className="text-purple-900 text-lg mb-2">Email</h3>
            <a href="mailto:info@nurturedisability.com.au" className="text-gray-600 hover:text-purple-700">
              info@nurturedisability.com.au
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
