'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiUsers, FiGlobe } from 'react-icons/fi';
import Image from 'next/image';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyChooseUs = () => {
  const features = [
    {
      title: 'AI-Powered Business Automation',
      description:
        'Transform your operations with intelligent systems that reduce costs by 40% while improving customer satisfaction.',
      icon: <FiCpu className="h-6 w-6" />,
      color: 'text-blue-600',
    },
    {
      title: 'Enterprise Cybersecurity Solutions',
      description:
        'Protect your business from evolving cyber threats with AI-powered security frameworks that prevent 99.7% of attacks before they impact your operations.',
      icon: <FiUsers className="h-6 w-6" />,
      color: 'text-purple-600',
    },
    {
      title: 'CX Cloud - Intelligent Customer Experience Platform',
      description:
        'Transform your customer support with AI-powered cloud platform that reduces response times by 75% and increases customer satisfaction to 98%.',
      icon: <FiGlobe className="h-6 w-6" />,
      color: 'text-green-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <motion.h1
        className="text-3xl font-bold text-gray-950 text-center mb-6 relative pb-2"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Why Choose InteliCore Systems?
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-400 rounded-full"></span>
      </motion.h1>
      <motion.p
        className="text-center text-gray-900 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span variants={childVariants} className="block">
          With proven expertise across industries, InteliCore Systems delivers transformative solutions in AI-Powered Business Automation, Enterprise Cybersecurity Solutions, and CX Cloud – Intelligent Customer Experience Platform.
        </motion.span>
        <motion.span variants={childVariants} className="block">
          Partner with us to leverage cutting-edge innovation, technical excellence, and comprehensive support for your business success.
        </motion.span>
        <motion.span variants={childVariants} className="block">
          Our revolutionary CareerAI Pro is an AI-powered career coach analyzing 50M+ job market data points to accelerate growth 300% faster.
        </motion.span>
        <motion.span variants={childVariants} className="block">
          We also offer AI-Powered Cutting Edge Solutions for streamlining data processes, project-oriented career training, and end-to-end implementation from strategy to deployment.
        </motion.span>
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left side cards */}
        <motion.div
          className="lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-lg ${feature.color.replace('text', 'bg')} bg-opacity-20 mr-4`}
                >
                  <span className={feature.color}>{feature.icon}</span>
                </div>
                <div>
                  <motion.h2
                    className="text-xl font-semibold mb-2 text-gray-950"
                    variants={textVariants}
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-600"
                    variants={textVariants}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative overflow-hidden shadow-md border-t-4 border-r-4 border-orange-400 rounded-tl-4xl rounded-br-4xl">
            <Image
              src="/images/whychoose.jpg"
              alt="Why choose InteliCore Systems?"
              width={500}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;