"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Animation Variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

interface BusinessCardProps {
  firstName: string;
  lastName: string;
  title: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  imageSrc: string;
  imageAlt: string;
  highlightColor?: string;
  reverse?: boolean;
  icon?: React.ReactNode;
}

const BusinessCard = ({
  firstName,
  lastName,
  title,
  phone,
  email,
  website,
  address,
  imageSrc,
  imageAlt,
  highlightColor = 'yellow',
  reverse = false,
  icon,
}: BusinessCardProps) => {
  return (
    <motion.div 
      className={`flex flex-col md:flex-row w-full max-w-3xl rounded-2xl overflow-hidden bg-white border border-gray-100 ${reverse ? 'md:flex-row-reverse' : ''} hover:shadow-xl transition-all duration-500 hover:scale-105`}
      whileHover={{ y: -5 }}
    >
      {/* Photo side */}
      <div className="w-full md:w-2/5 bg-gray-100 flex items-center justify-center relative h-64 md:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      {/* Info side */}
      <div className="w-full md:w-3/5 bg-white p-6 md:p-8 flex flex-col justify-center relative">
        {/* Colored bar */}
        <div className={`absolute top-8 left-0 h-2 w-12 bg-${highlightColor}-400 rounded`}></div>
        {/* Icon above heading */}
        {icon && <div className="flex justify-start mb-2">{icon}</div>}
        {/* Name and title */}
        <motion.h1 
          className="text-2xl font-bold uppercase tracking-wide mb-1"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {firstName} <span className={`text-${highlightColor}-500`}>{lastName}</span>
        </motion.h1>
        <motion.p 
          className="text-md text-gray-500 mb-4"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
        <div className="w-2/3 h-0.5 bg-gray-300 mb-6"></div>
        {/* Details, vertical list */}
        <ul className="space-y-4 text-gray-700 text-[15px]">
          {phone && 
            <motion.li
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {phone}
            </motion.li>
          }
          {email && 
            <motion.li
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {email}
            </motion.li>
          }
          {website && 
            <motion.li
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a href="http://localhost:3000/Services#" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">
                {website}
              </a>
            </motion.li>
          }
          {address && (
            <motion.li 
              className="flex items-center"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <svg className={`mr-1 text-${highlightColor}-500`} width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              {address}
            </motion.li>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default BusinessCard;