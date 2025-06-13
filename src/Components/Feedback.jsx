import React, { useState } from "react";
import { apiConnector } from "../ApiConnector/Axios";
import toast from "react-hot-toast";
import { FEEDBACK } from "../ApiConnector/apis";

const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    address: "",
    contact: "",
    email: "",
    serviceExperience: "",
    improvement: "",
    favorite: "",
    overallRating: "1",
    equalityRating: "1",
    transparencyRating: "1",
    additional: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contact") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !formData.firstName ||
        !formData.address ||
        !formData.contact ||
        !formData.email ||
        !formData.serviceExperience ||
        !formData.improvement ||
        !formData.favorite ||
        !formData.overallRating ||
        !formData.equalityRating ||
        !formData.transparencyRating
      ) {
        toast.error("Please fill in all required fields.");
        throw new Error("Form validation failed");
      }

      setLoading(true);

      const data = {
        firstName: formData.firstName,
        residenceAddress: formData.address,
        phone: formData.contact,
        email: formData.email,
        foundServiceSofar: formData.serviceExperience,
        anyImprovements: formData.improvement,
        likeMostAboutService: formData.favorite,
        ratingoverAllService: formData.overallRating,
        ratingbeingfair: formData.equalityRating,
        ratingbeingTransparent: formData.transparencyRating,
        feedback: formData.additional,
      };

      const response = await apiConnector("POST", FEEDBACK, data, null, null);
      console.log(response);

      if (response.status === 200 || response.status === 204) {
        toast.success("Feedback submitted successfully!");
        setFormData({
          firstName: "",
          address: "",
          contact: "",
          email: "",
          serviceExperience: "",
          improvement: "",
          favorite: "",
          overallRating: "1",
          equalityRating: "1",
          transparencyRating: "1",
          additional: "",
        });
      } else {
        throw new Error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Error submitting feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 py-10 px-4 flex items-center justify-center">
      <div className="relative w-full max-w-5xl">
        {/* Updated Spinner Overlay */}
        {loading && (
          <div className="absolute inset-0 bg-white/70 z-50 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
            <p className="text-gray-400 text-lg font-semibold font-serif">Submitting...</p>
          </div>
        )}

        <div className="backdrop-blur-md bg-lime-400/30 border border-lime-300/50 shadow-2xl rounded-3xl p-8 w-full">
          <h1 className="text-center text-4xl font-serif text-lime-700 mb-10 drop-shadow-md">
            FEEDBACK
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["firstName", "First Name"],
              ["address", "Residence Address"],
              ["contact", "Contact Number"],
              ["email", "Email Address"],
              ["serviceExperience", "How have you found your service so far?"],
              ["improvement", "What could we improve?"],
              ["favorite", "What do you like most about our service?"],
            ].map(([name, placeholder]) => (
              <input
                key={name}
                type={name === "email" ? "email" : "text"}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className={`p-4 rounded-lg bg-white/30 border border-white/20 text-lime-900 placeholder-lime-800 shadow-md focus:outline-none focus:ring-2 focus:ring-lime-500 ${
                  name === "favorite" ? "md:col-span-2" : ""
                }`}
              />
            ))}

            {[
              ["overallRating", "Rate our overall service"],
              ["transparencyRating", "How would you rate transparency?"],
            ].map(([name, label]) => (
              <div key={name}>
                <label className="text-lime-900 font-serif block mb-1">{label}</label>
                <div className="space-x-4 text-lime-800">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <label key={num}>
                      <input
                        type="radio"
                        name={name}
                        value={num}
                        checked={formData[name] === `${num}`}
                        onChange={handleChange}
                        className="appearance-none w-4 h-4 border-2 border-lime-600 rounded-full mr-2 checked:bg-lime-600 checked:ring-2 checked:ring-lime-200 checked:border-lime-600"
                      />
                      {num}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-lime-900 font-serif block mb-1">
                Rate our fairness and equality
              </label>
              <div className="space-x-4 text-lime-800">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num}>
                    <input
                      type="radio"
                      name="equalityRating"
                      value={num}
                      checked={formData.equalityRating === `${num}`}
                      onChange={handleChange}
                      className="appearance-none w-4 h-4 border-2 border-lime-600 rounded-full mr-2 checked:bg-lime-600 checked:ring-2 checked:ring-lime-200 checked:border-lime-600"
                    />
                    {num}
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="additional"
              placeholder="Is there anything else you would like us to know?"
              value={formData.additional}
              onChange={handleChange}
              className="p-4 rounded-lg bg-white/30 border border-white/20 text-lime-900 placeholder-lime-800 shadow-md h-32 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />

            <button
              type="submit"
              className="bg-lime-500/80 cursor-pointer text-white py-3 px-6 rounded-xl font-semibold tracking-wide hover:bg-lime-600 transition-all md:col-span-2 shadow-lg"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
