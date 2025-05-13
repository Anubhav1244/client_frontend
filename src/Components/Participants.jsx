import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      <motion.h1
        className="text-3xl font-serif text-purple-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        NEW PARTICIPANTS
      </motion.h1>

      <motion.form
        className="w-full max-w-6xl grid grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <input name="firstName" onChange={handleChange} placeholder="First Name" className="p-4 bg-purple-800 text-white rounded shadow-md" />
        <input name="lastName" onChange={handleChange} placeholder="Last Name" className="p-4 bg-purple-800 text-white rounded shadow-md" />
        <input name="ndisNumber" onChange={handleChange} placeholder="NDIS Number" className="p-4 bg-purple-800 text-white rounded shadow-md" />
        <select name="language" onChange={handleChange} className="p-4 rounded border shadow-md">
          <option>English</option>
          <option>Spanish</option>
          <option>Other</option>
        </select>
        <input name="phoneNumber" onChange={handleChange} placeholder="Phone Number" className="p-4 bg-purple-800 text-white rounded shadow-md" />
        <input name="address" onChange={handleChange} placeholder="Address" className="p-4 bg-purple-800 text-white rounded shadow-md" />

        <div className="col-span-2">
          <p className="text-purple-800 font-serif mb-2">Mobility</p>
          <div className="flex gap-6 text-black">
            <label><input type="radio" name="mobility" value="have" onChange={handleRadioChange} className="mr-2 text-black" />I have mobility problems</label>
            <label><input type="radio" name="mobility" value="dont" onChange={handleRadioChange} className="mr-2 text-black" />I don't have mobility problems</label>
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-purple-800 font-serif mb-2">Allergies</p>
          <div className="flex gap-6 text-black">
            <label><input type="radio" name="allergies" value="have" onChange={handleRadioChange} className="mr-2" />I have allergies</label>
            <label><input type="radio" name="allergies" value="dont" onChange={handleRadioChange} className="mr-2" />I don't have allergies</label>
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-purple-800 font-serif mb-2">Speech Impediments</p>
          <div className="flex gap-6 text-black">
            <label><input type="radio" name="speech" value="have" onChange={handleRadioChange} className="mr-2" />I have a speech impediment</label>
            <label><input type="radio" name="speech" value="dont" onChange={handleRadioChange} className="mr-2" />I don't have a speech impediment</label>
          </div>
        </div>

        <input name="email" onChange={handleChange} placeholder="Email" className="p-4 bg-purple-800 text-white rounded shadow-md" />
        <input name="extra" onChange={handleChange} placeholder="Anything else you would like to tell us" className="p-4 bg-purple-800 text-white rounded shadow-md" />

        <div className="col-span-2 flex justify-center mt-6">
          <motion.button
            type="submit"
            className="bg-lime-500 text-white px-10 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            SEND
          </motion.button>
        </div>
      </motion.form>

      <div>
                 

      </div>

      


    </div>

  

  );
}