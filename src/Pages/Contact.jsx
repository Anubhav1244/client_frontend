import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/social.png'
import ContactBanner from '../Components/Contactus';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in the requigreen fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', surname: '', email: '', phone: '', location: '', role: '', message: '' });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <ContactBanner/>
      <h2 className="text-3xl font-serif px-4 md:px-16 mt-10 text-purple-900 mb-8">GET IN TOUCH</h2>

      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-16">
        {/* Form */}
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

          {error && <p className="text-green-600">{error}</p>}
          {submitted && <p className="text-green-600">Message sent successfully!</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-900 text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-700 transition"
          >
            SUBMIT
          </motion.button>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[
              { icon: {Facebook}, link: 'https://facebook.com' },
              { icon: Instagram, link: 'https://instagram.com' },
              { icon: {Linkedin}, link: 'https://linkedin.com' },
            ].map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                className="bg-lime-500 p-3 rounded-full hover:bg-lime-600 transition">
                <i className={`fab fa-${item.icon} text-white`}></i>
              </a>
            ))}
          </div>
        </form>

        {/* Contact Cards */}
        <div className="flex flex-col gap-6 w-full md:w-1/3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-8 rounded-md text-center cursor-pointer"
          style={{
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.5)"
         }}
    >
            <div className="flex justify-center mb-4">
              <i className="fas fa-phone-alt text-lime-500 text-3xl"></i>
            </div>
            <h3 className="text-purple-900  text-lg mb-2">Phone</h3>
            <a href="tel:1800911999" className="text-gray-600 hover:text-purple-700">
              0411910741 , 0423301149
            </a>
        </motion.div>

          <motion.div 
          whileHover={{ scale: 1.03 }} 
          className="shadow-lg p-8 rounded-md text-center cursor-pointer"
          style={{
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.5)"
         }}>
            <div className="flex justify-center mb-4">
              <i className="fas fa-envelope text-lime-500 text-3xl"></i>
            </div>
            <h3 className="text-purple-900  text-lg mb-2">Email</h3>
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
