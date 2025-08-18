"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import BusinessCard from "./BusinessCard";
import { serviceIcons } from "./ServiceIcons";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" as const 
    } 
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" as const 
    } 
  },
};

const PrimarySolutions = () => {
  const imagePaths = {
    ai: "/images/ai.jpg",
    cybersecurity: "/images/cybersecurity.jpg",
    cloud: "/images/cloud.jpg",
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 space-y-16 relative">
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="text-center mb-16 relative">
        <motion.div 
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-900"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Primary Solutions
        </motion.h2>
        <motion.p 
          className="text-xl text-orange-500 mt-4 max-w-2xl mx-auto"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We specialize in three key areas to deliver exceptional software solutions for your business.
        </motion.p>
      </div>

      <motion.div 
        className="flex w-full justify-center items-center mb-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BusinessCard
          firstName="AI"
          lastName="and Automation Development"
          title=""
          phone="Build smart applications with AI-driven insights and automated workflows."
          email="Our AI solutions transform data into actionable insights and automate complex processes to enhance efficiency and decision-making."
          website="Learn More"
          address=""
          imageSrc={imagePaths.ai}
          imageAlt="AI and Automation Development"
          highlightColor="yellow"
          reverse={false}
          icon={serviceIcons.robot({ className: "w-12 h-12 text-yellow-500 mb-2" })}
        />
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row w-full justify-between items-center gap-8"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <BusinessCard
          firstName="Cybersecurity"
          lastName="Solutions"
          title=""
          phone="Protect your apps and data with secure APIs, encryption, and threat detection."
          email="Our comprehensive security solutions safeguard your digital assets against evolving threats."
          website="Learn More"
          address=""
          imageSrc={imagePaths.cybersecurity}
          imageAlt="Cybersecurity Solutions"
          highlightColor="blue"
          reverse={false}
          icon={serviceIcons.shield({ className: "w-12 h-12 text-blue-500 mb-2" })}
        />
        <BusinessCard
          firstName="Cloud"
          lastName="Computing Services"
          title=""
          phone="Develop scalable, cloud-based platforms for global accessibility."
          email="Our cloud solutions provide the flexibility, scalability, and reliability your business needs to grow."
          website="Learn More"
          address=""
          imageSrc={imagePaths.cloud}
          imageAlt="Cloud Computing Services"
          highlightColor="green"
          reverse={false}
          icon={serviceIcons.cloud({ className: "w-12 h-12 text-green-500 mb-2" })}
        />
      </motion.div>
    </section>
  );
};

export default PrimarySolutions;