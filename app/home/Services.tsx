'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCloud, FiShield } from 'react-icons/fi';
import Card from './Card';
import CTAButton from './CTAButton';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Services = () => {
  const services = [
    {
      title: 'AI Assistants',
      description: [
        'Voice-Based AI Assistants',
        'Text-Based Chat Assistants',
        'Agent Assistants (Copilot Tools)',
        'Data & Report Assistants',
        'Creative Assistants',
        'Healthcare AI Assistants',
        'Enterprise & HR Assistants',
      ],
      icon: <FiCpu className="w-full h-full" />,
      image: '/images/ai-ml.jpg',
    },
    {
      title: 'CX Cloud',
      description: [
        'CX Cloud',
        'Virtual Assistants and Chatbot',
        'AI-Powered Agents',
        'Personalized Customer Experiences',
        'Integration with CRM and other Systems',
        'Scalability and Flexibility',
        'Cost-Effectiveness',
      ],
      icon: <FiCloud className="w-full h-full" />,
      image: '/images/cloud.jpg',
    },
    {
      title: 'AI-driven Cybersecurity',
      description: [
        'AI-driven Cybersecurity',
        'AI-Powered Threat Detection & Response',
        'Secure Identity & Access Management',
        'AI in Penetration Testing & Vulnerability Management',
        'Secure API & Cloud Protection',
        'AI-Powered Cybersecurity Compliance',
        'AI-Based Phishing & Fraud Prevention',
        'AI-Driven SOC (Security Operations Center)',
      ],
      icon: <FiShield className="w-full h-full" />,
      image: '/images/security.jpg',
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-950 mb-3"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg mb-4" />
          <motion.p
            className="text-lg text-gray-600"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We specialize in key areas to deliver exceptional software solutions.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={textVariants}>
              <Card
                title={service.title}
                svgIcon={service.icon}
                description={service.description}
                hoverImage={service.image}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTAButton>Learn More About Our Services</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;