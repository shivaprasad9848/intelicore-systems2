"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
} as const;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10
    }
  }
} as const;

const ContactHero = () => {
  return (
    <div className="bg-white py-16 pt-[180px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg "
            >
              <Image
                src="/images/business-person.png"
                alt="AI Solutions"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-6xl lg:text-5xl font-bold leading-tight text-gray-900"
            >
              Connect with Us 
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className='text-orange-500 text-2xl'
            >
              Let&apos;s Build Your Next Solution Together
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 max-w-lg"
            >
              Ready to explore AI, cybersecurity, or cloud computing solutions? Contact InteliCore 
              Systems today! We respond within 24 hours to tailor solutions to your needs.
            </motion.p> 
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;