'use client';
import React from 'react';
import { motion, Easing } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const easeOut: Easing = 'easeOut';
const easeInOut: Easing = 'easeInOut';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const AIProjectOverview: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-orange-50 to-orange-100 overflow-hidden px-6">
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/30 blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-300/30 blur-[150px] -z-10" />

      {/* Decorative diamonds with subtle animations */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 rotate-45 bg-orange-400/70"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-4 h-4 rotate-45 bg-yellow-500/70"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 rotate-45 bg-orange-500/70"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-3 h-3 rotate-45 bg-pink-500/60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute top-10 right-1/5 w-2 h-2 rotate-45 bg-blue-500/60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
      />

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 pt-24">
        {/* Left content */}
        <motion.div
          className="flex-1 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          {/* Box with robot icon and heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl px-5 py-3 shadow-lg mb-8 max-w-md"
          >
            <span className="text-3xl mr-3">🤖</span>
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-gray-950"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Introducing InteliCore: the first AI Agent.
            </motion.h1>
          </motion.div>

          <div className="space-y-6">
            {/* Gradient text */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-[#253A4E] bg-clip-text text-transparent leading-tight"
            >
              Welcome to InteliCore Systems
            </motion.h2>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-2xl text-gray-950 font-medium"
            >
              Innovate with AI, Cybersecurity, and Cloud Solutions
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-gray-600 max-w-2xl"
            >
              At InteliCore Systems Private Limited, we&apos;re redefining the future
              with cutting-edge software solutions. Craft an interview-ready
              resume in minutes, bypass ATS filters, and accelerate your growth
              with project-based training — all under one roof.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex-1 min-w-[200px]">
                <Link
                  href="/services"
                  className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-md flex justify-center"
                >
                  Explore Our Services
                </Link>
              </div>
              <div className="flex-1 min-w-[200px]">
                <Link
                  href="/contact"
                  className="w-full px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors flex justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right robot - removed motion effects */}
        <div className="flex-1 flex justify-center relative md:-ml-32 lg:-ml-40 xl:-ml-48">
          <Image
            src="/images/robot-orange.png"
            alt="AI Robot representing InteliCore innovation"
            width={1500}
            height={1400}
            className="drop-shadow-[0_0_50px_rgba(255,165,0,0.5)] pl-16 min-h-[560px] min-w-[150%] pt-25"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AIProjectOverview;