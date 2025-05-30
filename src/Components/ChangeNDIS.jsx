import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photo from "../assets/photo.jpg";
import Photo2 from "../assets/photo2.jpg";

const infoSections = [
  {
  key: "Step-1",
  image: photo,

  content:
    "Our mission is to empower individuals with disabilities by providing accessible, inclusive, and high-quality support services. We are committed to creating environments where individuals feel respected, valued, and encouraged to reach their full potential. Through personalized care and innovative solutions, we aim to enhance independence, promote dignity, and improve overall quality of life.",
  bg: "bg-lime-400 "  ,
},
{
  key: "Step-2",
  image: Photo2,
  content:
    "We envision a world where every individual—regardless of their physical or cognitive abilities—has equal access to opportunities, resources, and platforms to thrive. Our vision is rooted in the belief that inclusion and diversity enrich communities. We strive for a society where people with disabilities are empowered to live fulfilling lives and contribute meaningfully at all levels.",
  bg: "bg-orange-300",
},
{
  key: "Step-3",
  image: photo,
  content:
    "Integrity, empathy, and commitment are the foundational values that guide our actions and decisions. We hold ourselves accountable to the highest ethical standards, approach every individual with compassion and respect, and dedicate ourselves fully to the mission of inclusion and empowerment. These values shape our culture, our services, and the impact we aim to make in the lives of those we support.",
  bg: "bg-purple-400",
}

];

export default function ChangeProvider() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (key) => {
    setActiveCard(activeCard === key ? null : key);
  };

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-lime-500  font-serif text-white text-center py-12 px-6 sm:px-8 md:px-12">
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
          <span className="underline">0411910741 , 0423301149
</span>
        </p>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {infoSections.map((section) => (
          <div
            key={section.key}
            className={`relative h-80  text-7xl font-serif  flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 ${
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
