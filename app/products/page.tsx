"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaLightbulb, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const AiProductsPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans pt-[100px]">
      {/* Hero Section with gradient, SVG, and enhanced animation */}
      <section className="bg-gradient-to-r from-orange-100 to-orange-50 py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10"
        >
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Innovative AI Solutions by <span className="text-orange-200">InteliCore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-lg text-gray-700 max-w-2xl"
            >
              Explore Our AI-Powered Products
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-2 text-sm text-gray-600"
            >
              At InteliCore Systems Private Limited, we're developing cutting-edge AI solutions to simplify career growth and business processes.
            </motion.p>
          </div>
          {/* SVG Illustration */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            className="md:w-1/2 flex justify-center"
          >
            <svg
              width="300"
              height="300"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 h-64 md:w-80 md:h-80"
            >
              <circle cx="100" cy="100" r="80" stroke="#F97316" strokeWidth="8" fill="none" />
              <path
                d="M100 40 L120 80 L80 80 Z"
                fill="#F97316"
                opacity="0.6"
              />
              <path
                d="M60 120 C60 140 140 140 140 120"
                stroke="#F97316"
                strokeWidth="6"
                fill="none"
              />
              <circle cx="100" cy="100" r="20" fill="#F97316" opacity="0.8" />
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Decorative elements with animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-10 left-10 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/3 left-1/3 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"
          ></motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product 1 */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
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
                className="mt-6 w-full bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-2 px-4 rounded transition-colors"
              >
                Notify Me
              </motion.button>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
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
        
        <div className="max-w-2xl mx-auto relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Coming Soon: A Game-Changing AI Career Coach Virtual Interviewer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 text-sm md:text-base"
          >
            Stay tuned for our upcoming AI career solution, set to transform professional growth in 2025. Join our waitlist to be the first to experience it!
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded text-gray-800 w-full sm:w-auto bg-white bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#FDBA74" }}
              className="bg-orange-200 hover:bg-orange-300 text-gray-900 font-semibold px-6 py-2 rounded transition-colors"
            >
              Join Waitlist →
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          {/* IntelliCoreAI */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2">IntelliCoreAI</h3>
            <p className="text-xs mb-2">
              Redefining the future with cutting-edge software solutions in AI, cybersecurity, and cloud computing.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-orange-200 text-xs"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-orange-200 text-xs"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-orange-200 text-xs"><FaLinkedinIn /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:text-orange-200 text-xs">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-200 text-xs">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-200 text-xs">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-200 text-xs">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-200 text-xs">Join Waitlist</a></li>
            </ul>
          </div>
          {/* Our Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2">Our Services</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-xs">AI & Automation</li>
              <li className="text-gray-400 text-xs">Cybersecurity Solutions</li>
              <li className="text-gray-400 text-xs">Cloud Computing</li>
              <li className="text-gray-400 text-xs">App Development</li>
              <li className="text-gray-400 text-xs">Web Platforms</li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-white mb-2">Contact Us</h3>
            <ul className="space-y-1">
              <li className="flex items-center text-gray-400 text-xs"><FaEnvelope className="mr-1 text-orange-200" /> info@intellicoreai.com</li>
              <li className="flex items-center text-gray-400 text-xs"><FaPhone className="mr-1 text-orange-200" /> +91-80884-03455</li>
              <li className="flex items-center text-gray-400 text-xs"><FaMapMarkerAlt className="mr-1 text-orange-200" /> USA: 5601 Executive Dr, Suite 500, Irving, TX 75038</li>
              <li className="flex items-center text-gray-400 text-xs"><FaMapMarkerAlt className="mr-1 text-orange-200" /> India: Q-City, Block B, 3rd Floor, Hyderabad 500032</li>
              <li className="flex items-center text-gray-400 text-xs"><FaMapMarkerAlt className="mr-1 text-orange-200" /> Australia: 12 Cornock Ave, Toongabbie, NSW 2146</li>
              <li className="flex items-center text-gray-400 text-xs"><FaClock className="mr-1 text-orange-200" /> Mon-Sat, 10 AM - 7 PM IST (12:11 AM, Open)</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-2 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 5 IntelliCore Systems. All rights reserved.</p>
          <div className="flex space-x-2 mt-2 md:mt-0">
            <a href="#" className="hover:text-orange-200">Privacy Policy</a>
            <a href="#" className="hover:text-orange-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AiProductsPage;