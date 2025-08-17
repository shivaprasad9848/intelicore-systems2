'use client';
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ComingSoonImageStyle = () => (
  <section className="w-full min-h-[300px] flex items-stretch bg-white">
    {/* Left: Coming Soon message - angled background */}
    <div
      className="flex-1 flex flex-col justify-center pl-12 pr-5 py-12 relative bg-[#253A4E] text-left"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      <motion.h1
        className="text-4xl font-bold text-white mb-2"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        COMING <span className="text-orange-500">SOON</span>
      </motion.h1>
      <motion.p
        className="text-gray-300 text-base"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        We are almost done. Just few more days
      </motion.p>
    </div>
    {/* Right: Stay Tuned / Signup */}
    <div
      className="flex-1 flex flex-col justify-center items-center py-12 bg-[#f7f7f6] text-left"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
        marginLeft: '-15%',
        zIndex: 1,
      }}
    >
      <motion.h2
        className="text-lg font-bold text-gray-950 mb-3 tracking-wider"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        STAY TUNED.<span className="text-orange-500">SIGN UP NOW</span>
      </motion.h2>
      <form className="flex mt-1">
        <input
          className="px-4 py-2 border border-gray-400 outline-none text-[#253A4E] bg-[#f7f7f6] w-56"
          type="email"
          placeholder="Enter your email"
          aria-label="Enter your email"
        />
        <button
          type="submit"
          className="px-5 py-2 ml-[-2px] bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </button>
      </form>
    </div>
  </section>
);

export default ComingSoonImageStyle;