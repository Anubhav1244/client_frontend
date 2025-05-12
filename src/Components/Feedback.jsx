import React, { useState } from "react";

const FeedbackForm = () => {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-center text-4xl font-serif text-purple-800 mb-10">FEEDBACK</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Text Inputs */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white"
        />
        <input
          type="text"
          name="address"
          placeholder="Residence Address"
          value={formData.address}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white"
        />
        <input
          type="text"
          name="serviceExperience"
          placeholder="How have you found your service so far?"
          value={formData.serviceExperience}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white"
        />
        <input
          type="text"
          name="improvement"
          placeholder="If there was anything we could improve on, what would it be?"
          value={formData.improvement}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white"
        />
        <input
          type="text"
          name="favorite"
          placeholder="What do you like most about our service?"
          value={formData.favorite}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white md:col-span-2"
        />

        {/* Ratings */}
        <div>
          <label className="text-purple-800 font-serif block mb-1">
            Rate our overall service
          </label>
          <div className="space-x-4 text-purple-800">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  type="radio"
                  name="overallRating"
                  value={num}
                  checked={formData.overallRating === `${num}`}
                  onChange={handleChange}
                  className="mr-1"
                />
                {num}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-purple-800 font-serif block mb-1">
            How would you rate our service in terms of being transparent?
          </label>
          <div className="space-x-4 text-purple-800">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  type="radio"
                  name="transparencyRating"
                  value={num}
                  checked={formData.transparencyRating === `${num}`}
                  onChange={handleChange}
                  className="mr-1"
                />
                {num}
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-purple-800 font-serif block mb-1">
            How would you rate our service in terms of being fair and equal?
          </label>
          <div className="space-x-4 text-purple-800">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  type="radio"
                  name="equalityRating"
                  value={num}
                  checked={formData.equalityRating === `${num}`}
                  onChange={handleChange}
                  className="mr-1"
                />
                {num}
              </label>
            ))}
          </div>
        </div>

        {/* Textarea */}
        <textarea
          name="additional"
          placeholder="Is there anything else you would like us to know?"
          value={formData.additional}
          onChange={handleChange}
          className="p-4 bg-purple-800 text-white shadow-md placeholder-white h-32 md:col-span-2"
        />

        <button
          type="submit"
          className="bg-purple-700 text-white py-3 px-6 rounded hover:bg-purple-900 md:col-span-2"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
