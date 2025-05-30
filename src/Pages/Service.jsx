import React, { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Lazy load the ServiceBanner component
const ServiceBanner = lazy(() => import("../Components/ServiceBanner"));

// Images
import jobImage from "../assets/serv1.JPG";
import sil from "../assets/serv2.jpg";
import sta from "../assets/serv3.jpg";
import lifeskill from "../assets/serv16.jpg";
import therapy from "../assets/serv5.jpg";
import household from "../assets/serv8.jpg";
import civic from "../assets/serv9.jpg";
import overnight from "../assets/serv10.jpg";
import CentreAct from "../assets/serv6.jpg";
import Living from "../assets/serv7.jpg";
import Relationship from "../assets/serv4.jpg";
import Lifilong from "../assets/serv12.jpg";
import Social from "../assets/serv13.jpg";
import Daily from "../assets/serv14.jpg";
import Health from "../assets/serv11.jpg";
import Meal from "../assets/serv15.jpg";

const services = [
  {
    title: "Finding and Keeping a Job",
    image: jobImage,
    description:
      "We help you build the skills, confidence, and access to resources to secure and maintain meaningful employment.",
  },
  {
    title: "Supported Independent Living (SIL)",
    image: Living,
    description:
      "Enjoy greater independence with round-the-clock support in a shared or individual living environment.",
  },
  {
    title: "Assist with transportation",
    image: sta,
    description:
      "Temporary housing support to help you transition or rest with comfort and safety.",
  },
  {
    title: "Development of Daily Living & Life Skills",
    image: lifeskill,
    description:
      "Learn practical skills to improve self-care, communication, and independence.",
  },
  {
    title: "Travel arrangements.",
    image: overnight,
    description:
      "Access to allied health professionals tailored to your unique needs and goals.",
  },
  {
    title: "Overnight Care Active/Non-Active",
    image: sil,
    description:
      "We provide overnight support to ensure safety and assistance throughout the night.",
  },
  {
    title: "Group/Day Center Activities",
    image: CentreAct,
    description:
      "Engaging social and recreational activities in a community setting.",
  },
  {
    title: "Participation in Community, Social and Civic Activities",
    image: Social,
    description:
      "Connect with your community and engage in meaningful social opportunities.",
  },
  {
    title: "Daily Personal Activities",
    image: therapy,
    description:
      "Assistance with daily routines including hygiene, mobility, and self-care.",
  },
  {
    title: "CB Social Community and Civic Participation",
    image: civic,
    description:
      "Grow your social network and explore new interests through local events.",
  },
  {
    title: "CB Relationships",
    image: Relationship,
    description:
      "Support to foster and maintain healthy personal relationships.",
  },
  {
    title: "CB Health and Wellbeing",
    image: Health,
    description:
      "Programs that promote physical, emotional, and mental wellbeing.",
  },
  {
    title: "CB Lifelong Learning",
    image: Lifilong,
    description:
      "Educational programs to build knowledge, confidence, and skills for life.",
  },
  {
    title: "CB Daily Activity",
    image: Daily,
    description:
      "Support with everyday tasks that help you live your best life.",
  },
  {
    title: "Meal Preparation",
    image: Meal,
    description:
      "Nutritious meal planning and cooking assistance based on your preferences.",
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white text-black font-sans">
      {/* Lazy load ServiceBanner */}
      <Suspense fallback={<div className="text-center py-10">Loading banner...</div>}>
        <ServiceBanner />
      </Suspense>

      {/* Grid of services */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {services.map((service, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div ref={ref} key={index}>
              {inView && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out"
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
                      <p className="text-sm text-purple-100 mb-3">
                        {service.description}
                      </p>
                    )}
                    <button
                      onClick={() => handleToggle(index)}
                      className="text-white underline hover:text-lime-300 text-sm self-start cursor-pointer"
                    >
                      {expandedIndex === index ? "Show less" : "Find out more"}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
