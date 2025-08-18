"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.h2 
              className="text-xl font-bold mb-3"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              IntelliCoreAI
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-sm mb-4"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Embracing the future with cutting-edge software applications, cybersecurity, and cloud computing.
            </motion.p>
          </div>

          <div>
            <motion.h3 
              className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block"
              variants={fadeInLeft}
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
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3 
              className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block"
              variants={fadeInLeft}
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
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3 
              className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-2">
              <motion.li 
                className="flex items-start"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaEnvelope className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <a href="mailto:info@intellicoreai.com" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm">
                  info@intellicoreai.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaPhone className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 8050383631</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">USA:</p>
                  <p className="text-gray-400 text-xs">5001 Executive Parkway, Suite 500,</p>
                  <p className="text-gray-400 text-xs">Office 515, Frisco, TX 75034</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <div>
                  <p className="text-gray-400 font-medium text-xs">India:</p>
                  <p className="text-gray-400 text-xs">O City, Block B, 3rd Floor,</p>
                  <p className="text-gray-400 text-xs">Krishna District, Nagayalanka 521120</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaClock className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs">Business Hours: Mon-Fri, 9 AM - 5 PM</p>
                  <p className="text-gray-400 text-xs">IST (Currently Open)</p>
                </div>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <motion.p 
            className="text-gray-500 text-xs"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            © 2025 IntelliCore Systems. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;