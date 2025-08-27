"use client";

import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
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
          Coming Soon: AI Career Coach & Virtual Interviewer
        </h3>
        <p className="mb-6 text-sm md:text-base">
          Get ready for our next breakthrough—an AI-powered career coach designed to help you practice, improve, and excel in interviews. Launching in 2025, this solution will transform how professionals prepare for their careers.
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
  );
};

export default CTASection;