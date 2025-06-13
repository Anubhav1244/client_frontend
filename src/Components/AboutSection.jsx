import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Photo from '../assets/mission.jpg';
import Photo2 from '../assets/vision.jpg';
import Photo3 from '../assets/value.jpg';
import Photo4 from "../assets/serv12.jpg";
import Photo5 from "../assets/serv1.jpg";
import Photo6 from "../assets/serv3.jpg";
import Photo7 from "../assets/serv6.jpg";
import Photo8 from "../assets/serv18.jpg";

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  const handleCardClick = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const infoSections = [
    {
      key: 'Mission',
      image: Photo,
      content:
        'Our mission is to empower individuals with disabilities by providing accessible and high-quality support that promotes independence and dignity.',
      bg: 'bg-lime-400 text-white text-xl ',
    },
    {
      key: 'Vision',
      image: Photo2,
      content:
        'We envision a world where all individuals, regardless of ability, have equal opportunities to thrive and contribute meaningfully to society.',
      bg: 'bg-orange-300 text-white text-xl',
    },
    {
      key: 'Values',
      image: Photo3,
      content:
        'Integrity, empathy, and commitment are the core values that guide our every action and decision.',
      bg: 'bg-purple-400 text-white text-xl',
    },
  ];

  const pillars = [
    {
      title: 'Choice and Control',
      img: Photo4,
      description:
        'We empower participants to make their own decisions with confidence and independence.',
    },
    {
      title: 'Transparency',
      img: Photo5,
      description:
        'Clear communication and honest service is the foundation of our approach.',
    },
    {
      title: 'Participant Focus',
      img: Photo6,
      description:
        'Our services revolve around the unique needs and aspirations of every participant.',
    },
    {
      title: 'Growth',
      img: Photo7,
      description:
        'We help individuals unlock their full potential through consistent support and development.',
    },
  ];

  return (
    <>
      {/* Section 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center font-serif justify-between px-6 md:px-20 py-16 bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
          initial={{ opacity: 0, scale: 0.9, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-900 mb-6">
            Nurture Disability and Support Services
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            We are Community & Care, committed to improving your quality of life. We can assist you with daily personal activities to achieve a certain level of independence...
          </p>
          <p className="text-gray-700 text-lg">
            Everything we do brings support, convenience, and development to the lives of people with disabilities...
          </p>
        </motion.div>
        <div className="md:w-1/2">
          <img
            src={Photo8}
            alt="Elderly couple outdoors"
            loading="lazy"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </motion.div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gray-50">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.8, x: -80 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'anticipate' }}
          viewport={{ once: true }}
        >
          <img
            src={Photo2}
            alt="Support and Care"
            loading="lazy"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto md:mx-0"
          />
        </motion.div>
        <div className="md:w-1/2  font-serif md:pl-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-purple-900 mb-6">
            PERSONALIZED SUPPORT
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            We understand that every individual has different emotional, physical, and mental needs...
          </p>
          <p className="text-gray-700 text-lg">
            Whether it’s a comforting conversation, companionship, or assistance with personal care...
          </p>
        </div>
      </div>

      {/* Mission Vision Values Section */}
      <div className="grid grid-cols-1 text-8xl font-serif md:grid-cols-3">
        {infoSections.map((section) => (
          <motion.div
            key={section.key}
            className={`relative h-80 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 ${
              hoveredCard === section.key ? section.bg : ''
            }`}
            style={{
              backgroundImage:
                hoveredCard === section.key ? 'none' : `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onMouseEnter={() => setHoveredCard(section.key)}
            onMouseLeave={() => setHoveredCard(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {hoveredCard !== section.key && (
              <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
            )}

            {hoveredCard !== section.key && (
              <motion.div
                className="relative z-10 text-white text-3xl font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {section.key}
              </motion.div>
            )}

            <AnimatePresence>
              {hoveredCard === section.key && (
                <motion.div
                  className="absolute inset-0 p-6 flex items-center text-white text-sm font-light z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>{section.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Key Pillars Section */}
      <div className="bg-[#dcf7b0] font-serif py-16 px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={pillar.img}
                alt={pillar.title}
                loading="lazy"
                className="rounded shadow-lg w-full h-48 object-cover mb-4"
              />
              <div className="bg-white text-purple-900 text-center py-4 px-3 rounded w-full">
                <h3 className="font-semibold text-lg">{pillar.title}</h3>
                <button
                  className="text-lime-500 text-2xl mt-2 focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  {openIndex === index ? '−' : '+'}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      className="text-gray-600 text-sm mt-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {pillar.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default About;
