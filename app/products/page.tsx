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
            At InteliCore Systems Private Limited, we're developing cutting-edge AI solutions to simplify career growth and business processes.
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

const AiProductsPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <HeroSection />
      
      {/* Product Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.5 }}
            className="border rounded-xl shadow-md p-6 relative overflow-hidden bg-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-60 z-0"></div>
            <div className="relative z-10">
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="text-orange-200 text-3xl mb-4">
                <FaRocket />
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">AI Career Assistance Platform</h2>
              <p className="text-sm mb-4 text-gray-700">
                A comprehensive platform to support professionals in achieving their career goals.
              </p>
              <div className="text-sm font-semibold text-gray-700 mb-1">KEY FEATURES</div>
              <ul className="text-sm text-gray-600 mb-3 list-disc list-inside">
                <li>Skill-building resources</li>
                <li>Career preparation tools</li>
                <li>Personalized guidance using AI, ML and NLP</li>
              </ul>
              <div className="text-sm font-semibold text-gray-700 mb-1">BENEFITS</div>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Enhanced technical skills</li>
                <li>Better job opportunity preparation</li>
                <li>Tailored, interactive support</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FDBA74" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-2 px-4 rounded transition-colors"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border rounded-xl shadow-md p-6 relative overflow-hidden bg-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white opacity-60 z-0"></div>
            <div className="relative z-10">
              <div className="absolute top-4 right-4 bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </div>
              <div className="text-orange-200 text-3xl mb-4">
                <FaLightbulb />
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Cutting Edge Solution</h2>
              <p className="text-sm mb-4 text-gray-700">
                An upcoming product designed to streamline AI data process for businesses using advanced AI technology.
              </p>
              <div className="text-sm font-semibold text-gray-700 mb-1">KEY FEATURES</div>
              <ul className="text-sm text-gray-600 mb-3 list-disc list-inside">
                <li>Automated data processes</li>
                <li>Intelligent insights</li>
                <li>Compliance with minimal effort</li>
              </ul>
              <div className="text-sm font-semibold text-gray-700 mb-1">BENEFITS</div>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Saves time and reduces errors</li>
                <li>Simplifies financial compliance</li>
                <li>Works for businesses of all sizes</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FDBA74" }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-2 px-4 rounded transition-colors"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-50 py-16 text-center text-gray-900 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"
          ></motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Coming Soon: A Game-Changing AI Career Coach Virtual Interviewer
          </h3>
          <p className="mb-6 text-sm md:text-base">
            Stay tuned for our upcoming AI career solution, set to transform professional growth in 2025. Join our waitlist to be the first to experience it!
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-gray-800 w-full sm:w-auto bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#FDBA74" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-200 hover:bg-orange-300 text-gray-900 font-semibold px-6 py-2 rounded transition-colors"
            >
              Join Waitlist →
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      {/* Footer Section */}
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
    </div>
  );
};

export default AiProductsPage;