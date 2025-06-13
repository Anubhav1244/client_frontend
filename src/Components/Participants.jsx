import React, { useState } from "react";
import { motion } from "framer-motion";
import { apiConnector } from "../ApiConnector/Axios";
import toast, { Toaster } from "react-hot-toast";
import { NEWPARTICIPANTS } from "../ApiConnector/apis";

export default function App() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false); // loading state

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      // Allow only digits for phone number
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.ndisNumber ||
        !formData.phoneNumber ||
        !formData.address ||
        !formData.email ||
        !formData.language ||
        !formData.mobility ||
        !formData.allergies ||
        !formData.speech
      ) {
        toast.error("Please fill in all required fields.");
        throw new Error("Form validation failed");
      }

      setLoading(true);

      const data = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        ndisNumber: formData.ndisNumber,
        phone: formData.phoneNumber,
        address: formData.address,
        email: formData.email,
        knownLanguage: formData.language,
        mobility: formData.mobility,
        allergies: formData.allergies,
        anyComments: formData.extra,
        SpeechImpediments: formData.speech,
      };

      const response = await apiConnector("POST", NEWPARTICIPANTS, data, null, null);
      console.log(response);

      if (response.status === 200) {
        toast.success("Form submitted successfully!");
        setFormData({});
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 p-8 flex justify-center items-center relative">
      <Toaster />

      {/* Custom Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 z-50 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-gray-400 border-t-gray-600 rounded-full animate-spin"></div>
          <p className="text-gray-400 text-lg font-semibold font-serif">Submitting...</p>
        </div>
      )}

      <motion.div
        className="w-full max-w-6xl backdrop-blur-md bg-lime-400/30 border border-white/30 rounded-3xl p-8 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-serif text-lime-800 mb-10 text-center drop-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          NEW PARTICIPANTS
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            ["firstName", "First Name"],
            ["lastName", "Last Name"],
            ["ndisNumber", "NDIS Number"],
            ["phoneNumber", "Phone Number"],
            ["address", "Address"],
            ["email", "Email"],
            ["extra", "Anything else you would like to tell us"],
          ].map(([name, placeholder]) => (
            <input
              key={name}
              name={name}
              value={formData[name] || ""}
              onChange={handleChange}
              placeholder={placeholder}
              className="p-4 rounded-lg bg-white/30 border border-white/20 text-lime-900 placeholder-lime-800 shadow-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          ))}

          <select
            name="language"
            value={formData.language || ""}
            onChange={handleChange}
            className="p-4 rounded-lg bg-white/30 border border-white/20 text-lime-900 shadow-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            <option value="">Select Language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>Other</option>
          </select>

          {[
            {
              title: "Mobility",
              name: "mobility",
              options: [
                ["I have mobility problems ", "I have mobility problems"],
                ["I don't have mobility problems", "I don't have mobility problems"],
              ],
            },
            {
              title: "Allergies",
              name: "allergies",
              options: [
                ["I have allergies", "I have allergies"],
                ["I don't have allergies", "I don't have allergies"],
              ],
            },
            {
              title: "Speech Impediments",
              name: "speech",
              options: [
                ["I have a speech impediment", "I have a speech impediment"],
                ["I don't have a speech impediment", "I don't have a speech impediment"],
              ],
            },
          ].map(({ title, name, options }) => (
            <div key={name} className="md:col-span-2">
              <p className="text-lime-900 font-serif mb-2">{title}</p>
              <div className="flex gap-6 text-lime-800">
                {options.map(([value, label]) => (
                  <label
                    key={value}
                    className="flex items-center flex-wrap gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <input
                      type="radio"
                      name={name}
                      value={value}
                      checked={formData[name] === value}
                      onChange={handleRadioChange}
                      className="appearance-none w-3 h-3 sm:w-4 sm:h-4 border-2 mr-2 border-lime-600 rounded-full checked:bg-lime-600 checked:border-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="md:col-span-2 flex justify-center mt-6">
            <motion.button
              type="submit"
              className="bg-lime-500/80 cursor-pointer text-white px-10 py-3 rounded-sm font-semibold shadow-lg hover:bg-lime-600 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SEND
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
