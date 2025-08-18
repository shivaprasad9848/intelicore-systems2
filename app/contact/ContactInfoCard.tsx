"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactInfoCard = () => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Get In Touch
      </motion.h2>
      
      <div className="space-y-5 mb-8">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
            title: "Email",
            content: "info@intelcore.com",
            description: "We respond to all inquiries within 24 hours"
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            ),
            title: "Phone",
            content: "+91-888-4455",
            description: "Mon-Sat, 10 AM - 7 PM IST"
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            title: "Global Offices",
            content: (
              <>
                <p className="text-gray-600 text-sm">India: Nagayalanka, AP</p>
                <p className="text-gray-600 text-sm">USA: San Francisco, CA</p>
              </>
            ),
            description: null
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-start"
          >
            <div className="bg-orange-50 p-2 rounded-lg mr-4 flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
              {item.description && (
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center text-sm"
        >
          Sign Up Now
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-orange-400 text-orange-400 hover:bg-orange-50 font-medium py-2 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
        >
          Join Waitlist
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;