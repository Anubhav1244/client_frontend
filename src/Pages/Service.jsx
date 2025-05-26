import React, { useState } from "react";
import jobImage from "../assets/finding_job.jpg";
import sil from "../assets/sl.jpg";
import sta from "../assets/short_term_accomudation.jpg";
import lifeskill from "../assets/development_daily.jpg";
import therapy from "../assets/therapeutic_support.jpg";
import household from "../assets/meal_preparation.jpg";
import civic from "../assets/cb_social.jpg";
import overnight from "../assets/overnight_care.jpg";
import ServiceBanner from "../Components/ServiceBanner";
import { motion } from "framer-motion";

const services = [
  { title: "Finding and Keeping a Job", image: jobImage, description: "We help you build the skills, confidence, and access to resources to secure and maintain meaningful employment." },
  { title: "Supported Independent Living (SIL)", image: sil, description: "Enjoy greater independence with round-the-clock support in a shared or individual living environment." },
  { title: " Assist with transportation ", image: sta, description: "Temporary housing support to help you transition or rest with comfort and safety." },
  { title: "Development of Daily Living & Life Skills", image: lifeskill, description: "Learn practical skills to improve self-care, communication, and independence." },
  { title: " Travel arrangements.", image: therapy, description: "Access to allied health professionals tailored to your unique needs and goals." },
  { title: "Overnight Care Active/Non-Active", image: sil, description: "We provide overnight support to ensure safety and assistance throughout the night." },
  // { title: "Community Nursing Care", image: therapy, description: "Qualified nurses deliver medical support in the comfort of your home." },
  { title: "Group/Day Center Activities", image: lifeskill, description: "Engaging social and recreational activities in a community setting." },
  { title: "Participation in Community, Social and Civic Activities", image: household, description: "Connect with your community and engage in meaningful social opportunities." },
  { title: "Daily Personal Activities", image: overnight, description: "Assistance with daily routines including hygiene, mobility, and self-care." },
  // { title: "Household Tasks/Lawn Maintenance", image: household, description: "Support with cleaning, laundry, gardening, and meal prep." },
  { title: "CB Social Community and Civic Participation", image: civic, description: "Grow your social network and explore new interests through local events." },
  { title: "CB Relationships", image: civic, description: "Support to foster and maintain healthy personal relationships." },
  { title: "CB Health and Wellbeing", image: sil, description: "Programs that promote physical, emotional, and mental wellbeing." },
  { title: "CB Lifelong Learning", image: civic, description: "Educational programs to build knowledge, confidence, and skills for life." },
  { title: "CB Daily Activity", image: lifeskill, description: "Support with everyday tasks that help you live your best life." },
  { title: "Meal Preparation", image: overnight, description: "Nutritious meal planning and cooking assistance based on your preferences." },
  // { title: "Support coordination", image: sta, description: "Navigate NDIS with ease using expert guidance and service coordination." },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white text-black font-sans">
      <ServiceBanner />

      <motion.div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{opacity:0,scale:0.9}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:0.5}}
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
           initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      // whileHover={{scale:1.08,boxShadow:"0px 0px 10px 5px purple"}}
      transition={{duration:1,ease:"easeInOut"}}
        viewport={{ once: true }}
            key={index}
            className="rounded-lg   hover:scale-110 transition-all"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-5 bg-purple-900 rounded-b-lg text-white flex flex-col justify-between h-fit">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              {expandedIndex === index && (
                <p className="text-sm text-purple-100 mb-3">{service.description}</p>
              )}
              <button
                onClick={() => handleToggle(index)}
                className="text-white underline hover:text-lime-300 text-sm self-start cursor-pointer"
              >
                {expandedIndex === index ? "Show less" : "Find out more"}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
