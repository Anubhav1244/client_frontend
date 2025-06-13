import React, { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Lazy load the ServiceBanner component
const ServiceBanner = lazy(() => import("../Components/ServiceBanner"));

/// Cloudinary-hosted images
const jobImage = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749742428/serv1_wxaqtb.jpg";
const Living = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749742545/serv7_ko4h4v.jpg";
const sta = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749742598/serv3_aqfokd.jpg";
const Social = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743549/serv13_dfnqnr.jpg";
const overnight ="https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749742711/serv10_rbbud5.jpg";
const sil ="https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749742778/serv8_v3fhnr.jpg";
const CentreAct ="https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749742923/com_eyoml0.jpg";
const therapy = "https://res.cloudinary.com/dpl3ucukv/image/upload/v1749668098/serv5_irv3ta.jpg";
const civic = "https://res.cloudinary.com/dpl3ucukv/image/upload/v1749668291/serv9_be1ycf.jpg";
const Relationship = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743136/serv4_bwysej.jpg";
const Health = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743207/serv11_etrx0c.jpg";
const Lifilong ="https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743262/serv12_dmtukk.jpg";
const Daily = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743307/serv14_nqwzny.jpg";
const Meal = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743344/meal_zz2t4f.jpg";
const lifeskill = "https://res.cloudinary.com/ddz4x5dvd/image/upload/v1749743408/serv16_bpgi1d.jpg";








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
      "Support with Transport under the NDIS enables someone who needs assistance to get from one place to another. This may be for medical appointments, going to work, social activities, or simply going out into the fresh air.",
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
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ServiceBanner />
      </Suspense>

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
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
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
