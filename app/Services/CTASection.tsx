"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CTASection = () => {
  return (
    <section className="py-16 text-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-100 to-red-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80极g-gradient-to-r from-yellow-100 to-orange-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to Transform Your Career?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Take the next step toward success. Whether you're a student building skills, a job seeker preparing for opportunities, or an employer seeking top talent, Intelicore Systems has the solutions to help you achieve your goals.
        </motion.p>
        
        <motion.div 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-6"
        >
          <a
            href="/contact"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-2xl"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;