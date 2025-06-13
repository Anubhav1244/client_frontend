import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { apiConnector } from '../ApiConnector/Axios';
import { CONTACTUS } from '../ApiConnector/apis';

const ContactBanner = lazy(() => import('../Components/Contactus'));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    location: '',
    role: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

    try {
      setLoading(true);
      const response = await apiConnector('POST', CONTACTUS, formData);

      if (response.status !== 200 && response.status !== 204) {
        toast.error('Failed to send message');
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {loading && (
        <div className="absolute inset-0 bg-white/70 z-50 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-lg font-semibold font-serif">Submitting...</p>
        </div>
      )}

      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ContactBanner />
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-3xl font-serif px-4 md:px-16 mt-10 text-purple-900 mb-8">GET IN TOUCH</h2>

      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-16">
        <form onSubmit={handleSubmit} className="flex-1 space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['name', 'surname', 'email', 'phone', 'location', 'role'].map((field, i) => (
              <input
                key={i}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                type={
                  field === 'email'
                    ? 'email'
                    : field === 'phone'
                    ? 'tel'
                    : 'text'
                }
                inputMode={field === 'phone' ? 'numeric' : undefined}
                pattern={field === 'phone' ? '[0-9]*' : undefined}
                onKeyDown={
                  field === 'phone'
                    ? (e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== 'Backspace' &&
                          e.key !== 'Tab'
                        ) {
                          e.preventDefault();
                        }
                      }
                    : undefined
                }
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
                disabled={loading}
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
            disabled={loading}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={`bg-purple-900 text-white cursor-pointer font-semibold py-3 px-8 rounded-md transition ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple-700'
            }`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'SUBMIT'}
          </motion.button>

          <nav>
            <div className="flex gap-4 mb-4 text-xl">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-black hover:text-blue-500 transition" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-black hover:text-sky-400 transition" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-black hover:text-pink-500 transition" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-black hover:text-blue-700 transition" />
              </a>
            </div>
          </nav>
        </form>

        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-md text-center cursor-pointer shadow-lg"
            style={{ boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)' }}
          >
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-lime-500 text-3xl" />
            </div>
            <h3 className="text-purple-900 text-lg mb-2">Phone</h3>
            <a href="tel:1800911999" className="text-gray-600 hover:text-purple-700">
              0451223245 , 0423301149
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="shadow-lg p-8 rounded-md text-center cursor-pointer"
            style={{ boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)' }}
          >
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-lime-500 text-3xl" />
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
