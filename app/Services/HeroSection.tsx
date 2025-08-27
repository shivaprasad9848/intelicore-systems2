"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const HeroSection = () => {
  return (
    <div className="bg-gray-100 rounded-2xl flex flex-col md:flex-row font-sans overflow-hidden pt-[100px] md:pt-[135px] relative">
      <div className="relative flex w-full md:w-1/2 flex-col rounded-tl-2xl rounded-bl-2xl bg-[#efefef]">
        <div className="mx-4 md:mx-8 rounded-xl relative h-[400px] md:h-[500px]">
          <Image
            src="/images/your-team-image.jpg"
            alt="Three business professionals collaborating around a table"
            fill
            className="object-cover transition-transform duration-500"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none z-10">
          <svg viewBox="0 0 500 250" className="absolute left-0 bottom-[-30px] w-[300px] h-[200px]">
            <polygon points="0,250 500,250 0,0" fill="#F87C29"/>
            <polygon points="0,250 320,0 0,0" fill="#FFCF36"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 bg-[#f7f7f7] justify-between p-6 md:px-12 md:py-0">
        <div className="flex flex-col flex-1 justify-center items-start pt-6 md:pt-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 inline-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut" 
                } 
              }
            }}
          >
            Our Core Services & Technologies
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-semibold mb-2 text-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.2
                } 
              }
            }}
          >
            Innovative solutions built on next-generation technologies
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg mb-6 text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: 0.4
                } 
              }
            }}
          >
            At Intelicore Systems, we offer customized services designed to meet your unique business needs, leveraging advanced tech stacks to accelerate growth, enhance efficiency, and keep you ahead in the digital era.
          </motion.p>
          <motion.a 
            href="/discover" 
            className="bg-orange-500 text-white font-medium px-6 py-3 rounded-3xl hover:bg-yellow-600 mb-10 transition-all duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Discover More →
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;