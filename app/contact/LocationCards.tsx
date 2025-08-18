"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const locations = [
  {
    id: 'india',
    title: 'India Office',
    company: 'IntelCore Systems Pvt. Ltd.',
    address: 'Nagayalanka, Andhra Pradesh, India',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61343.14037538341!2d80.08975512312637!3d15.7891113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b4d3e3a6a6a6f%3A0x9e4e3a6a6a6a6a6f!2sNagayalanka%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1718900000000"
  },
  {
    id: 'usa',
    title: 'USA Office',
    company: 'IntelCore Systems Inc.',
    address: 'San Francisco, California, USA',
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201880.51115438552!2d-122.57768437848272!3d37.757617097271385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1718900000000"
  }
];

const LocationCards = () => {
  const [activeMap, setActiveMap] = useState<string | null>(null);

  return (
    <div className="mt-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Global Locations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Visit our offices or connect with us virtually from anywhere in the world.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <motion.div 
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + index * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
            onMouseEnter={() => setActiveMap(location.id)}
            onMouseLeave={() => setActiveMap(null)}
          >
            <div className="relative w-full h-60 mb-5 rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src={location.mapSrc}
                width="100%"
                height="100%"
                className={`absolute inset-0 transition-all duration-500 ${activeMap === location.id ? 'scale-110' : 'scale-100'}`}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none transition-opacity duration-500 ${activeMap === location.id ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">{location.title}</h3>
            <p className="text-gray-600 mb-1 font-medium text-sm">{location.company}</p>
            <p className="text-gray-600 mb-5 text-sm">{location.address}</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center text-sm"
            >
              Get Directions
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;