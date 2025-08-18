"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { serviceIcons } from "./ServiceIcons";

interface TrainingProgramProps {
  image: string;
  title: string;
  description: string;
  path: string;
}

const TrainingProgramCard: React.FC<TrainingProgramProps> = ({ 
  image, 
  title, 
  description, 
  path 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        boxShadow: "0 25px 30px -10px rgba(0, 0, 0, 0.15)"
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-md group transition-all duration-500 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={path}
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300 group-hover:translate-x-2"
        >
          Explore Program
          {serviceIcons.arrow({ className: "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" })}
        </a>
      </div>
    </motion.div>
  );
};

export default TrainingProgramCard;