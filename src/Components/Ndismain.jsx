import React from 'react';
import photo from '../assets/photo.jpg';
import { motion } from 'framer-motion';

export default function NdisInfo() {
  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12 sm:py-16">
    <motion.div
      className="p-6 md:p-12 max-w-6xl mx-auto text-[#1E2E5C] "
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif  mb-6 border-l-4 border-green-500 pl-4">
        How does the NDIS work?
      </h1>

      <p className="text-base sm:text-lg mb-8 leading-relaxed">
        To make use of NDIS funding, participants need to register with the National
        Disability Insurance Agency (NDIA). If you are eligible for NDIS support and have
        received an ‘access decision’ letter, you can create an NDIS plan that suits your
        needs and take it to a suitable NDIS provider to see that your needs are met.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Box - Am I Eligible? */}
        <motion.div
          className="border-2 border-purple-800 rounded-2xl p-6 text-center flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={photo}
            alt="Eligibility"
            className="h-20 w-24 sm:h-24 sm:w-28 object-contain mb-4"
          />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Am I eligible?</h2>
          <p className="mb-4 text-gray-700 max-w-md">
            Answer some simple questions to see if you are eligible for the NDIS. These
            questions are just a guide, as the final decision is up to the NDIA.
          </p>
          <a
            href="https://www.ndis.gov.au/applying-access-ndis/am-i-eligible"
            className="inline-block bg-lime-400 text-[#1E2E5C] font-bold py-2 px-6 rounded-full hover:bg-lime-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eligibility Checklist
          </a>
        </motion.div>

        {/* Right Box - How To Apply? */}
        <motion.div
          className="border-2 border-purple-800 rounded-2xl p-6 text-center flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://img.icons8.com/ios-filled/100/000000/add-user-group-man-man.png"
            alt="Apply"
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain mb-4"
          />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">How To Apply?</h2>
          <p className="mb-4 text-gray-700 max-w-md">
            If you meet the eligibility criteria, you can ask to become a participant by
            completing an Access Request Form.
          </p>
          <a
            href="https://www.ndis.gov.au/applying-access-ndis/how-apply"
            className="inline-block bg-lime-400 text-[#1E2E5C] font-bold py-2 px-6 rounded-full hover:bg-lime-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply For The NDIS
          </a>
        </motion.div>
      </div>
    </motion.div>
  </div>
  );
}
