'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const OurStorySection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full">
        <svg viewBox="0 0 500 800" className="w-full h-full text-gray-100" preserveAspectRatio="none">
          <path d="M0,100 C150,200 200,50 500,300 L500,00 L0,0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <svg viewBox="0 0 500 800" className="w-full h-full text-gray-100" preserveAspectRatio="none">
          <path d="M500,100 C350,200 300,50 0,300 L0,00 L500,0 Z极" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="absolute -left-4 top-0 h-full w-1 bg-orange-400 z-10"></div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/team-meeting.jpg"
                alt="Intelicore team collaborating"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 text-gray-800">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Founded in 2025, InteliCore Systems Private Limited is a visionary startup driven by innovation. Our passionate team of experts specializes in AI, cybersecurity, and cloud computing, building intelligent solutions that address real-world challenges.
            </motion.p>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We believe in the power of technology to shape the future—transforming careers, empowering businesses, and improving lives. Through our cutting-edge solutions, we help organizations thrive in the digital era with confidence, efficiency, and security.
            </motion.p>
            <motion.button 
              className="bg-orange-400 hover:bg-orange-300 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Learn More About Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;