import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { apiConnector } from "../ApiConnector/Axios";
import { GETFEEDBACK } from "../ApiConnector/apis";
const Hometestimonial = () => {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        testimonials.length > 0 ? (prev + 1) % testimonials.length : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials]);

  // Fetch testimonials from API
  const fetchTestimonials = async () => {
    try {
      const response = await apiConnector(
        "GET",
        GETFEEDBACK,
        null,
        null,
        null
      );
      
      if(response.status === 200) {
        const data = response?.data?.feedbacks;
        console.log("Testimonials data:", data);
        setTestimonials(data);
      }

    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section className="py-12 font-serif md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-serif text-[#59168c] mb-8">
          What Our Clients Say
        </h2>

        <div className="relative max-w-xl mx-auto">
          {testimonials.length > 0 ? (
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
                  "{testimonials[current]?.feedback}"
                </p>
                <p className="font-semibold text-blue-600">
                  - {testimonials[current]?.firstName}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : (
            <p className="text-gray-500">No testimonials available.</p>
          )}

          {testimonials.length > 1 && (
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={() =>
                  setCurrent(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length
                  )
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Hometestimonial;
