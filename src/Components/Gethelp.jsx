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

  // const [move,setMove] = useState(window.innerHeight+60)
  // const [closemove, setClosemove] = useState(window.innerHeight)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Prepare data for API request
      const data = {
        name: formData.name,
        surname: formData.surname,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
      
      const response = await apiConnector('POST', GETHELP, data, null, null);
      console.log(response);
      if (response.status !== 200 && response.status !== 204) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!");
      setFormData({ name: "", surname: "", email: "", phone: "", message: "" });
      handleClose(); // Close the form after submission
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  const closeRef = useRef(null)


  const handleClose=()=>{
    closeRef.current.style.display = "none";
  
  }
  

  window.onscroll = handleClose

  

  // useEffect(()=>{
  //   if(move<=closemove){
  //     handleClose()
  //   }else{
      
  //     setClosemove(closemove+10)
  //   }
  // },[closemove])

  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 z-50 gethelp-section"
    // onScroll={handleScroll}
    ref={closeRef}
    >
      <Toaster />
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-purple-900 text-2xl font-bold focus:outline-none cursor-pointer"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl mb-4 font-serif text-purple-900">GET HELP NOW</h2>

        {/* Form */}
        <form className="space-y-4 font-serif" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="border px-3 py-2 text-black w-full focus:outline-none rounded-lg"
            />
            <input
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              type="text"
              placeholder="Surname"
              className="border px-3 py-2 text-black w-full focus:outline-none rounded-lg"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="border px-3 py-2 w-full text-black focus:outline-none col-span-1 rounded-lg"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Telephone"
              className="border px-3 py-2 w-full text-black focus:outline-none col-span-1 rounded-lg"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="border px-3 py-2 text-black w-full resize-none focus:outline-none rounded-lg"
          />

          <button
            type="submit"
            className="bg-purple-900 text-white px-6 py-2 mt-2 hover:bg-purple-800 transition rounded-lg cursor-pointer"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetHelpNowForm;
