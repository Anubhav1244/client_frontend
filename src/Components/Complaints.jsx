import React, { useState } from "react";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    complaint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint submitted:", formData);
  };

  return (
    <div className="h-full bg-yellow-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl space-y-6"
      >
        <h1 className="text-purple-900 text-center text-4xl font-serif mb-6">
          COMPLAINT
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-lime-400 text-white placeholder-white px-4 py-4 w-full sm:w-[300px] shadow-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-lime-400 text-white placeholder-white px-4 py-4 w-full sm:w-[300px] shadow-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-lime-400 text-white placeholder-white px-4 py-4 w-full sm:w-[300px] shadow-md"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-4 w-full sm:w-[150px] shadow-md"
          >
            SUBMIT
          </button>
        </div>

        <div className="flex justify-center">
          <textarea
            name="complaint"
            placeholder="Complaint About?"
            value={formData.complaint}
            onChange={handleChange}
            className="bg-lime-400 text-white placeholder-white px-4 py-4 w-full sm:w-[90%] h-52 shadow-md resize-none"
          />
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
