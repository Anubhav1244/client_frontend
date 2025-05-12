import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo from "../assets/photo.jpg";
import Photo2 from "../assets/Photo2.jpg";

const infoSections = [
  {
    key: "Step-1",
    image: photo,
    content:
      "Our mission is to empower individuals with disabilities by providing accessible and high-quality support that promotes independence and dignity.",
    bg: "bg-lime-400",
  },
  {
    key: "Step-2",
    image: Photo2,
    content:
      "We envision a world where all individuals, regardless of ability, have equal opportunities to thrive and contribute meaningfully to society.",
    bg: "bg-orange-300",
  },
  {
    key: "Step-3",
    image: photo,
    content:
      "Integrity, empathy, and commitment are the core values that guide our every action and decision.",
    bg: "bg-purple-400",
  },
];

export default function ChangeProvider() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-lime-500 text-white text-center py-12 px-6 sm:px-8 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          HOW TO CHANGE NDIS PROVIDERS?
        </h2>
        <p className="mb-2">
          When it comes to joining NDIS, you need to meet the eligibility
          criteria. Follow these simple steps to join NDIS if you meet the
          eligibility criteria.
        </p>
        <p className="mb-2">
          Remember you have the choice and control over the way your services
          are delivered.
        </p>
        <p className="font-bold text-lg sm:text-xl mt-6">
          We are happy to assist you throughout this process. Simply call{" "}
          <span className="underline">1800 911 999</span>
        </p>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {infoSections.map((section) => (
          <div
            key={section.key}
            className={`relative h-80 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 ${
              activeCard === section.key ? section.bg : ""
            }`}
            style={{
              backgroundImage:
                activeCard === section.key ? "none" : `url(${section.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleCardClick(section.key)}
          >
            {activeCard !== section.key && (
              <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
            )}
            {activeCard !== section.key && (
              <div className="relative z-10 text-white text-2xl sm:text-3xl font-semibold">
                {section.key}
              </div>
            )}
            <AnimatePresence>
              {activeCard === section.key && (
                <motion.div
                  className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center text-white text-sm sm:text-base font-light z-20 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>{section.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact Us Section */}
      
    </div>
  );
}
