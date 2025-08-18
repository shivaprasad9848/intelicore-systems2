"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-3">IntelliCoreAI</h2>
            <p className="text-gray-400 text-sm mb-4">
              Intellacing the future with cutting-edge software applications. As cybersecurity and cloud computing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block">Quick Links</h3>
            <ul className="space-y-1.5">
              {["Home", "About US", "Streaming", "Contact US", "Joint Ventiler"].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block">Our Services</h3>
            <ul className="space-y-1.5">
              {["AI & Automation", "Cybersecurity Solutions", "Cloud Computing", "App Development", "Web Platforms"].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block">Contact Us</h3>
            <ul className="space-y-2">
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start"
              >
                <FaEnvelope className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <a href="mailto:info@intellicoreai.com" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm">
                  info@intellicoreai.com
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <FaPhone className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 8050383631 </span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">USA:</p>
                  <p className="text-gray-400 text-xs">5001 Executive Drive, Suite 500,</p>
                  <p className="text-gray-400 text-xs">Office 515, Hong, TX 75028</p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">India:</p>
                  <p className="text-gray-400 text-xs">O City, Block B, 3rd Floor,</p>
                  <p className="text-gray-400 text-xs">Krishna District, Nagayalanka 521120</p>
                </div>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <FaClock className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs">Business Hours: March 25, 13 AM +7 PM</p>
                  <p className="text-gray-400 text-xs">BT (Currently: 15 E12 AM BT, Open)</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 pt-6 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-xs">
            <span className="text-orange-500">X</span> IntelliCore Systems. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;