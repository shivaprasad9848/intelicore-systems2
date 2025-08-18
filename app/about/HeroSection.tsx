'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-200 to-orange-200 text-gray-800 pt-[200px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Left side - Image with decorative frame */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 border-2 border-orange-300/50 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
          <div className="absolute inset-4 border-2 border-orange-300/30 rounded-lg transform group-hover:scale-[1.01] transition-all duration-500"></div>
          
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/team-collaboration.jpg"
              alt="Intelicore team collaborating"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-300/10"></div>
          </div>
          
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-orange-400/80 shadow-lg shadow-orange-400/30"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-orange-500/80 shadow-lg shadow-orange-500/30"></div>
          <div className="absolute top-1/2 -right-4 h-16 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
        </motion.div>
        
        {/* Right side - Text content */}
        <motion.div 
          className="space-y-6 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building Tomorrow&apos;s <br />
            <span className="text-orange-600">Technology Today</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-800 max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Founded in 2025, Intelicore Systems Private Limited is a dynamic startup dedicated to innovation.
            Our passionate team of experts leverages AI, cybersecurity, and cloud computing to craft software
            solutions that solve real-world challenges.
          </motion.p>
          
          <motion.button 
            className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Learn More About Our Services
          </motion.button>
          
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-orange-400/20 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;