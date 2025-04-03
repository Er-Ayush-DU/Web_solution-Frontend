import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';




const serviceImages = {
  webDesign: 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1974&auto=format&fit=crop',
  frontend: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
  backend: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  fullStack: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
};

const ServicesCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    age: '',
    websiteType: '',
    description: '',
    serviceType: ''
  });

  const services = [
    {
      title: 'Web Design',
      description: 'Modern and responsive web design services.',
      image: serviceImages.webDesign,
    },
    {
      title: 'Frontend Development',
      description: 'Interactive and optimized UI development.',
      image: serviceImages.frontend,
    },
    {
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions.',
      image: serviceImages.backend,
    },
    {
      title: 'Full Stack Development',
      description: 'Complete web solutions from frontend to backend.',
      image: serviceImages.fullStack,
    },
  ];

  const handleOpenForm = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsFormOpen(true);
    setFormData(prev => ({
      ...prev,
      serviceType: serviceTitle
    }));
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/service', formData, {
        headers: { "Content-Type": "application/json" }
      });
      console.log('Form submitted:', response.data);
      alert(`Thank you for your request for ${selectedService}! We'll contact you soon.`);
      setIsFormOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        age: '',
        websiteType: '',
        description: '',
        serviceType: selectedService
      });
    } catch (error) {
      console.error("Error:", error);
      console.log("Failed to send message.");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 },
    },
  };

  // Function to get the correct image key from service title
  const getImageKey = (title) => {
    return title.toLowerCase()
      .replace(' development', '')
      .replace(' full stack', 'FullStack')
      .replace(' web design', 'WebDesign')
      .replace(' ', '');
  };

  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                onClick={() => handleOpenForm(service.title)}
              >
                <p className="text-white font-semibold">Click here</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Request Form Modal with service-specific background */}
      {isFormOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backgroundImage: `url(${serviceImages[getImageKey(selectedService)]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-opacity-70"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative z-10"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Request {selectedService}</h3>
                <button
                  onClick={handleCloseForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={2}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="18"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="websiteType" className="block text-sm font-medium text-gray-700">Type of Website</label>
                    <select
                      id="websiteType"
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select website type</option>
                      <option value="Personal Portfolio">Personal Portfolio</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Blog">Blog</option>
                      <option value="Educational">Educational</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Describe the website you want to create..."
                      required
                    ></textarea>
                  </div>

                  <input type="hidden" name="serviceType" value={selectedService} />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;