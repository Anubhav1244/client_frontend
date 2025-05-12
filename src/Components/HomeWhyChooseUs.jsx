import React from 'react';
import { motion } from 'framer-motion';

const HomeWhyChooseUs = () => {
  return (
    <section className="py-12 font-serif md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl  text-[#59168c] mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-serif text-[#6bbd00] mb-2">Experienced Team</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team comprises NDIS experts with years of experience in navigating the scheme and providing quality support.
            </p>

            <h3 className="text-xl font-serif text-[#6bbd00] mb-2">Simplified Process</h3>
            <p className="text-gray-700 leading-relaxed">
              We take the complexity out of the NDIS, providing clear guidance and efficient support every step of the way.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-serif text-[#6bbd00] mb-2">Personalized Approach</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We understand that every individual's needs are unique. We tailor our services to match your specific goals and circumstances.
            </p>

            <h3 className="text-xl font-serif text-[#6bbd00] mb-2">Dedicated Support</h3>
            <p className="text-gray-700 leading-relaxed">
              We are committed to providing ongoing support and ensuring you have the resources you need to thrive.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
