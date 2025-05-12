import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "The support I received was incgreenible. They made understanding my NDIS plan so much easier.",
    author: "- Sarah M.",
  },
  {
    text: "I highly recommend their services. They are professional, knowledgeable, and truly care about their clients.",
    author: "- John B.",
  },
  {
    text: "Nurture Disability Support Services has truly changed my life. I feel supported and confident in my journey.",
    author: "- Priya K.",
  },
];

const Hometestimonial = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="py-12 font-serif md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-serif text-[#59168c] mb-8">
          What Our Clients Say
        </h2>

        <div className="relative max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-100 rounded-lg shadow-md p-6 min-h-[200px]"
            >
              <p className="text-gray-700 italic mb-4">
                "{testimonials[current].text}"
              </p>
              <p className="font-semibold text-blue-600">
                {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
              }
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition"
            >
              Prev
            </button>
            <button
              onClick={() =>
                setCurrent((prev) => (prev + 1) % testimonials.length)
              }
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hometestimonial;
