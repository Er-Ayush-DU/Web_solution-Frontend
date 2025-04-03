import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:3001/contact', formData, {
        headers: { "Content-Type": "application/json" }
      });

      console.log("Response:", response.data);

     
      setSuccessMessage("Your message has been successfully sent!");

      // ✅ Clear form fields after submission
      setFormData({ name: "", email: "", tel: "" });

     
      setTimeout(() => {
        setSuccessMessage("");
        navigate('/')
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      console.log("Failed to send message.");
    }
  };

  return (
    <div className="relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0 " style={{ backgroundColor: "#2b2b2b" }}>
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">


          {successMessage && (
            <div className="absolute top-0 right-0  bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg w-150">
              {successMessage}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                Fill in the form to start a conversation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">Number</label>
                <input
                  value={formData.tel}
                  onChange={handleChange}
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
