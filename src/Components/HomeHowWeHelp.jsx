// src/components/HomeHowWeHelp.js
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedCard = ({ title, desc }) => {
  const ref = useRef(null);

  // Track this card’s scroll progress as it passes through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress → translateY from 50 → 0
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  // Fade in from 0 → 1
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
     initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      className="bg-gray-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-serif text-[#6bbd00] mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const HomeHowWeHelp = () => {
  const services = [
    {
      title: 'Plan Management',
      desc:
        'Take control of your NDIS plan with our expert plan management services. We handle the paperwork, payments, and budgeting so you can focus on your goals.',
    },
    {
      title: 'Support Coordination',
      desc:
        'Our experienced support coordinators will guide you through the NDIS, connect you with the right providers, and help you implement your plan effectively.',
    },
    {
      title: 'Finding Providers',
      desc:
        'Access our extensive network of registegreen NDIS providers. We’ll help you find the services and supports that best meet your individual needs.',
    },
    // …more cards if needed
  ];

  return (
    <section className="font-serif py-12 md:py-16 bg-yellow-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-serif text-[#59168c] mb-8 text-center">
          How We Can Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <AnimatedCard
              key={idx}
              title={svc.title}
              desc={svc.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowWeHelp;
