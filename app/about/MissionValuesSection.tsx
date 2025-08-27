'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const MissionValuesSection = () => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Mission & Values
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At InteliCore Systems, our mission is clear—to deliver secure, scalable, and intelligent technology that empowers businesses, individuals, and communities to succeed in the digital era.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left side - Mission */}
          <motion.div 
            className="bg-gray-50 p-12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[380px] max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-80"></div>
              <div className="absolute inset-0 bg-white rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%] overflow-hidden">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/professional-woman.jpg"
                    alt="Professional team member"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.h3 
                className="text-3xl font-light lowercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                our mission
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm max-w-md mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Deliver secure, scalable, and intelligent technology that empowers businesses, individuals, and communities to succeed in the digital era.
              </motion.p>
              
              <motion.h3 
                className="text-3xl font-light lowercase mb-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                our expertise
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm max-w-md mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                We specialize in creating advanced applications and web solutions designed for exceptional user experiences—backed by a professional, passionate team dedicated to your success.
              </motion.p>
              
              <motion.button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300 uppercase text-sm tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Discover How We Can Elevate Your Digital Journey
              </motion.button>
              <motion.p 
                className="text-xs text-gray-400 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Images by Freepik
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <motion.div 
            className="relative h-full min-h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/modern-architecture.jpg"
              alt="Modern architecture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-3xl font-light lowercase mb-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  our promise
                </motion.h3>
                <motion.p 
                  className="text-white text-sm mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  High-quality solutions, innovation at the core, and a commitment to helping you thrive in today's competitive landscape.
                </motion.p>
                
                <motion.h3 
                  className="text-3xl font-light lowercase mb-4 text-white mt-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  our values
                </motion.h3>
                <motion.p 
                  className="text-white text-sm mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Our approach is guided by core values that define who we are and how we work:
                </motion.p>
                <motion.ul 
                  className="text-white text-sm space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {[
                    "Innovation – Driving progress through cutting-edge technologies.",
                    "Integrity – Building trust with transparent and ethical practices.",
                    "Excellence – Committing to the highest standards in every solution.",
                    "Client-Centric Approach – Focusing on delivering real value and impact.",
                    "Sustainability – Enabling long-term, responsible digital transformation."
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValuesSection;
