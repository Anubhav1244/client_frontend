import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const HomeService = () => {
  const serviceArray = [
    {
      serviceName: "Approved Specialised Disability Accommodations",
      servideImage:
        "https://communityandcare.com.au/wp-content/uploads/2020/11/Approved-Specialised-Disability-Accommodations.jpg",
      serviceDescription:
        "It refers to the specialist housing solutions to provide the participants with the support they need.",
    },
    {
      serviceName: "Finding and Keeping a Job",
      servideImage:
        "https://communityandcare.com.au/wp-content/uploads/2020/11/leg-impairment.jpg",
      serviceDescription:
        "Do you need support to help you get a suitable job? Nurture Disability Support Services can help participants who want to work.",
    },
    {
      serviceName: "Supported Independent Living (SIL)",
      servideImage:
        "https://communityandcare.com.au/wp-content/uploads/2020/11/community-and-care-3.jpg",
      serviceDescription:
        "As the name suggests, supported independent living is a shagreen accommodation.",
    },
  ];

  return (
    <>
      <section className="font-serif w-full container mx-auto px-4 py-12 bg-[#59168c]">
        <h1 className="text-center text-white font-serif font-medium text-4xl mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {serviceArray.map((course, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-20px" });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative group bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.servideImage}
                    alt={course.serviceName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      maskImage: `url("/images/bg-img-courses.png")`,
                      maskPosition: "center center",
                      maskRepeat: "no-repeat",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col items-center text-left">
                  <Link
                    to={`/courses/1`}
                    className="text-2xl font-serif text-[#6bbd00]  transition-colors duration-300 mb-3 font-salsa"
                  >
                    {course.serviceName}
                  </Link>
                  <p className="text-gray-600 text-md mb-4">
                    {course.serviceDescription}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center items-center mt-16">
          <Link className="text-lg rounded-full bg-purple-600 text-white px-6 py-2">
            Learn more
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeService;
