import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiConnector } from "../ApiConnector/Axios";
import { GETHELP } from "../ApiConnector/apis";

const GetHelpNowForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // <-- New loading state
  const closeRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setLoading(true); // Start loading

    try {
      const data = {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await apiConnector("POST", GETHELP, data);
      if (response.status !== 200 && response.status !== 204) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleClose = () => {
    closeRef.current.style.display = "none";
  };

  window.onscroll = handleClose;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 gethelp-section"
      ref={closeRef}
    >
      <Toaster />

      {/* Spinner Overlay */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-50 rounded">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-800 border-solid border-r-transparent"></div>
        </div>
      )}

      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-purple-900 text-2xl font-bold focus:outline-none cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-2xl mb-4 font-serif text-purple-900">GET HELP NOW</h2>

        <form className="space-y-4 font-serif" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="border px-3 py-2 text-black w-full focus:outline-none rounded-lg"
              disabled={loading}
            />
            <input
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              type="text"
              placeholder="Surname"
              className="border px-3 py-2 text-black w-full focus:outline-none rounded-lg"
              disabled={loading}
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="border px-3 py-2 w-full text-black focus:outline-none col-span-1 rounded-lg"
              disabled={loading}
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Telephone"
              className="border px-3 py-2 w-full text-black focus:outline-none col-span-1 rounded-lg"
              disabled={loading}
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="border px-3 py-2 text-black w-full resize-none focus:outline-none rounded-lg"
            disabled={loading}
          />

          <button
            type="submit"
            className={`bg-purple-900 text-white px-6 py-2 mt-2 rounded-lg cursor-pointer transition ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-purple-800"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetHelpNowForm;
