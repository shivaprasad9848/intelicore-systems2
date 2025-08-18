"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 pt-[200px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Innovative AI Solutions by <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-orange-500"
            >
              InteliCore
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-600 max-w-lg"
          >
            Explore Our AI-Powered Products
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-600"
          >
            At InteliCore Systems Private Limited, we&apos;re developing cutting-edge AI solutions to simplify career growth and business processes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Book a demo
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-1"
            >
              <p className="text-2xl font-bold text-gray-900">75.2%</p>
              <p className="text-sm text-gray-500">Avg daily activity</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-1"
            >
              <p className="text-2xl font-bold text-gray-900">~20k</p>
              <p className="text-sm text-gray-500">Daily users</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-1"
            >
              <div className="flex items-center">
                <p className="text-2xl font-bold text-gray-900 mr-1">4.5</p>
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className={`w-5 h-5 ${i < 4 ? 'text-gray-900' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">Avg rating</p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Right side - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full h-full min-h-[600px]"
        >
          <Image
            src="/images/heroproduct.png"
            alt="AI Solutions Dashboard"
            fill
            className="object-contain object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;