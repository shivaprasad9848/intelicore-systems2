"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb } from "react-icons/fa";

const ProductCards = () => {
  return (
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
              An all-in-one platform designed to help students, job seekers, and professionals reach their career goals with confidence.
            </p>
            <div className="text-sm font-semibold text-gray-700 mb-1">KEY FEATURES</div>
            <ul className="text-sm text-gray-600 mb-3 list-disc list-inside">
              <li>Skill-Building Resources – Access curated courses, projects, and training to develop in-demand skills.</li>
              <li>Career Preparation Tools – Create ATS-friendly resumes, practice virtual interviews, and track your progress.</li>
              <li>AI-Powered Guidance – Receive personalized career advice using AI, ML, and NLP technologies.</li>
            </ul>
            <div className="text-sm font-semibold text-gray-700 mb-1">BENEFITS</div>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Stronger Technical Expertise – Build the skills employers are looking for.</li>
              <li>Improved Job Readiness – Be fully prepared for interviews and recruitment processes.</li>
              <li>Personalized Career Support – Get tailored recommendations and interactive assistance.</li>
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
            <h2 className="text-xl font-bold mb-2 text-gray-900">AI-Powered Cutting-Edge Solution</h2>
            <p className="text-sm mb-4 text-gray-700">
              An upcoming product built to revolutionize how businesses manage and process data with the power of advanced AI technologies.
            </p>
            <div className="text-sm font-semibold text-gray-700 mb-1">KEY FEATURES</div>
            <ul className="text-sm text-gray-600 mb-3 list-disc list-inside">
              <li>Automated Data Processing – Eliminate manual tasks and streamline workflows effortlessly.</li>
              <li>Intelligent Insights – Gain actionable business intelligence to make smarter decisions.</li>
              <li>Effortless Compliance – Ensure regulatory compliance with minimal effort and maximum accuracy.</li>
            </ul>
            <div className="text-sm font-semibold text-gray-700 mb-1">BENEFITS</div>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              <li>Save Time & Reduce Errors – Boost productivity by automating complex processes.</li>
              <li>Simplify Compliance – Meet industry standards without the hassle.</li>
              <li>Scalable for All Businesses – Flexible solutions that grow with your organization.</li>
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
  );
};

export default ProductCards;