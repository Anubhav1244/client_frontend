import React, { useState } from "react";

const faqData = [
  {
    question: "Who is eligible for the NDIS?",
    answer:
      "People under 65 with a permanent and significant disability may be eligible."
  },
  {
    question: "How do I apply for the NDIS?",
    answer:
      "You can apply through the NDIS website or by calling the NDIS contact center."
  },
  {
    question: "How does the NDIS funding process work?",
    answer:
      "Funding is based on your needs and goals, and it's discussed during your planning meeting."
  },
  {
    question: "How do I find a service provider through the NDIS?",
    answer:
      "You can use the NDIS Provider Finder tool on the NDIS website to search for providers."
  },
  {
    question: "Can I choose my own service provider?",
    answer:
      "Yes, participants have the freedom to choose and change their service providers."
  },
  {
    question: "Can I start planning before my first meeting with the NDIS?",
    answer:
      "Yes, preparing early helps you clearly express your goals and support needs."
  },
  {
    question: "How do I manage my NDIS plan and budget?",
    answer:
      "You can manage it yourself, with a plan manager, or let the NDIA manage it for you."
  },
  {
    question: "What happens if I'm not happy with my service provider?",
    answer:
      "You can change providers or make a complaint through the NDIS Commission."
  }
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 border-l-8 border-green-500 pl-4">
          NDIS FAQ:
        </h1>
        <div className="bg-gray-100 rounded-2xl shadow">
          {faqData.map((item, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-200 focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                <span className="text-green-500 text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-700 transition-all duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
