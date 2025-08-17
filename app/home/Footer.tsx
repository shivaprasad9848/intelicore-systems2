'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => (
  <footer className="bg-[#253A4E] text-white pt-10 pb-6 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <motion.h2
            className="text-xl font-bold mb-3 text-gray-950"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            InteliCore Systems
          </motion.h2>
          <motion.p
            className="text-gray-200 text-sm mb-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Embracing the future with cutting-edge software applications in AI, cybersecurity, and cloud computing.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div>
          <motion.h3
            className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block text-gray-950"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-1.5">
            {["Home", "About Us", "Services", "Contact Us", "Joint Ventures"].map((item) => (
              <motion.li
                key={item}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href="#" className="text-gray-200 hover:text-orange-400 transition-all duration-300 text-sm flex items-center">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <motion.h3
            className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block text-gray-950"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h3>
          <ul className="space-y-1.5">
            {["AI & Automation", "Cybersecurity Solutions", "Cloud Computing", "App Development", "Web Platforms"].map((service) => (
              <motion.li
                key={service}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href="#" className="text-gray-200 hover:text-orange-400 transition-all duration-300 text-sm flex items-center">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <motion.h3
            className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block text-gray-950"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h3>
          <ul className="space-y-2">
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <a href="mailto:info@intelicoreai.com" className="text-gray-200 hover:text-orange-400 transition-all duration-300 text-sm">
                info@intelicoreai.com
              </a>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaPhone className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <span className="text-gray-200 text-sm">+91 8050383631</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium text-xs">USA:</p>
                <p className="text-gray-200 text-xs">5001 Finley Drive, Suite 500,</p>
                <p className="text-gray-200 text-xs">Irving, TX 75038</p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium text-xs">India:</p>
                <p className="text-gray-200 text-xs">One City, Block B, 3rd Floor,</p>
                <p className="text-gray-200 text-xs">Krishna District, Nagayalanka 521120</p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaClock className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-200 text-xs">Business Hours: Mon-Fri, 9 AM - 7 PM IST</p>
                <p className="text-gray-200 text-xs">(Currently: {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hour12: true })} IST, Open)</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-600 text-center">
        <motion.p
          className="text-gray-300 text-xs"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          © InteliCore Systems. All rights reserved.
        </motion.p>
      </div>
    </div>
  </footer>
);

export default Footer;