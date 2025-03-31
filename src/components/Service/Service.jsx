import React from 'react';
import { motion } from 'framer-motion';

// Placeholder images (you can replace these with your own URLs or local images)
const serviceImages = {
  webDesign: 'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=1974&auto=format&fit=crop',
  frontend: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop',
  backend: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  fullStack: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
};

const ServicesCard = () => {
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

  // Animation variants for pop-up effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Staggered animation for each card
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
              {/* Image Section */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              {/* Overlay Effect on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-1 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-90">
                <p className="text-white font-semibold cursor-pointer"><a href="">Click here</a></p>
               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;