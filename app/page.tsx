'use client';
import React, { useState } from 'react';
import { motion, Easing } from 'framer-motion';
import {
  FiArrowRight,
  FiCpu,
  FiCloud,
  FiShield,
  FiUsers,
  FiGlobe,
} from 'react-icons/fi';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const easeOut: Easing = 'easeOut';
const easeInOut: Easing = 'easeInOut';


// Animation variants for text elements (reusable)
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};


const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};


// AI Project Overview Component (enhanced with more dynamic animations)
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


      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0">
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
              className="text-2xl md:text-3xl font-bold text-gray-900"
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
              className="text-2xl text-gray-700 font-medium"
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


        {/* Right robot with slow entrance animation from top right */}
        <motion.div
          className="flex-1 flex justify-center relative md:-ml-32 lg:-ml-40 xl:-ml-48"
          initial={{ x: "100%", y: "-100%", opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: easeOut }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
          >
            <Image
              src="/images/robot-orange.png"
              alt="AI Robot representing InteliCore innovation"
              width={1500}
              height={1400}
              className="drop-shadow-[0_0_50px_rgba(255,165,0,0.5)] pl-16 min-h-[560px] min-w-[150%] pt-25"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


// Card Component (added dynamic hover state for more interactivity)
interface CardProps {
  title: string;
  svgIcon: React.ReactNode;
  description: string | string[];
  hoverImage: string;
}


const Card: React.FC<CardProps> = ({ title, svgIcon, description, hoverImage }) => {
  const [animationState, setAnimationState] = useState<'idle' | 'animating' | 'complete'>('idle');


  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden w-96 h-[520px] cursor-pointer dark:bg-gray-800 dark:text-white hover:shadow-xl transition-shadow flex flex-col"
      onHoverStart={() => setAnimationState('animating')}
      onHoverEnd={() => setAnimationState('idle')}
      whileHover={{ scale: 1.05 }} // Added dynamic scale on hover for more dynamism
      transition={{ duration: 0.3 }}
    >
      {/* Top Rounded Section */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-t-3xl w-full flex flex-col items-center pt-6 pb-4">
        <div className="w-16 h-16 text-orange-500">{svgIcon}</div>
        <motion.h3
          className="text-xl font-semibold mt-2"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
      </div>


      {/* Description & Arrow/Image Reveal */}
      <div className="p-6 text-center flex-1 flex flex-col">
        <motion.div
          className="text-gray-600 dark:text-gray-300 mb-6 flex-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {typeof description === 'string' ? (
            <motion.p variants={textVariants}>{description}</motion.p>
          ) : (
            <motion.ul
              className="list-disc pl-5 space-y-1 text-left"
              variants={listVariants}
            >
              {description.map((text) => (
                <motion.li key={text} variants={textVariants}>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>


        {/* Rounded Box Container */}
        <div className="relative w-full h-16 rounded-3xl border border-gray-300 dark:border-gray-600 overflow-hidden mt-auto">
          {/* Moving Arrow */}
          {animationState !== 'complete' && (
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300"
              animate={{
                x: animationState === 'animating' ? 'calc(100% - 60px)' : 0,
              }}
              transition={{
                duration: 1.5,
                ease: easeInOut,
                onComplete: () => animationState === 'animating' && setAnimationState('complete'),
              }}
            >
              <FiArrowRight />
            </motion.div>
          )}


          {/* Image Reveal */}
          {animationState === 'complete' && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={hoverImage}
                alt={`${title} illustration`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};


// CTA Button Component (added dynamic hover animation)
interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  children: React.ReactNode;
}


const CTAButton: React.FC<CTAButtonProps> = ({ secondary, children, ...props }) => (
  // @ts-expect-error Ignoring type mismatch between motion.button and ButtonHTMLAttributes for now
  <motion.button
    className={`relative px-6 py-3 rounded-lg font-semibold text-base transition-all shadow-lg group ${
      secondary
        ? 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white'
        : 'bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:from-orange-600 hover:to-orange-800'
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-15 transition bg-white/10" />
  </motion.button>
);


// Services Section (enhanced with staggered animations)
// Services Section (enhanced with staggered animations)
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
    <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-[#111927] dark:to-[#050a15] px-4 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg mb-4" />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We specialize in key areas to deliver exceptional software solutions.
          </motion.p>
        </div>

        {/* Increased gap from gap-20 to gap-24 (or you can use any value like gap-32 for even more spacing) */}
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
// Why Choose Us Section (enhanced with more animations)
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
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        className="text-3xl font-bold text-center mb-6 relative pb-2"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Why Choose InteliCore Systems?
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-400 rounded-full"></span>
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 mb-12"
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
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-800 dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }} // Added dynamic hover for cards
            >
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-lg ${feature.color.replace('text', 'bg')} bg-opacity-20 mr-4`}
                >
                  <span className={feature.color}>{feature.icon}</span>
                </div>
                <div>
                  <motion.h2
                    className="text-xl font-semibold mb-2 dark:text-white"
                    variants={textVariants}
                  >
                    {feature.title}
                  </motion.h2>
                  <motion.p
                    className="text-gray-600 dark:text-gray-300"
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
          whileHover={{ scale: 1.02 }} // Added subtle hover animation
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


// ComingSoonImageStyle component (added Framer Motion to text for dynamism)
// ComingSoonImageStyle component (added Framer Motion to text for dynamism)
const ComingSoonImageStyle = () => (
  <section className="w-full min-h-[300px] flex items-stretch">
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
        className="text-lg font-bold text-[#253A4E] mb-3 tracking-wider"
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

// Footer (added Framer Motion to all text elements)
// Footer (added Framer Motion to all text elements)
const Footer = () => (
  <footer className="bg-[#253A4E] text-white pt-10 pb-6 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <motion.h2
            className="text-xl font-bold mb-3 text-white"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            InteliCore Systems
          </motion.h2>
          <motion.p
            className="text-gray-200 text-sm mb-4"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Embracing the future with cutting-edge software applications in AI, cybersecurity, and cloud computing.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div>
          <motion.h3
            className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block text-white"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Quick Links
          </motion.h3>
          <ul className="space-y-1.5">
            {["Home", "About Us", "Services", "Contact Us", "Joint Ventures"].map((item) => (
              <motion.li
                key={item}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href="#" className="text-gray-200 hover:text-orange-400 transition-all duration-300 text-sm flex items-center">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <motion.h3
            className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block text-white"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </motion.h3>
          <ul className="space-y-1.5">
            {["AI & Automation", "Cybersecurity Solutions", "Cloud Computing", "App Development", "Web Platforms"].map((service) => (
              <motion.li
                key={service}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a href="#" className="text-gray-200 hover:text-orange-400 transition-all duration-300 text-sm flex items-center">
                  <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                  {service}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <motion.h3
            className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block text-white"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h3>
          <ul className="space-y-2">
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaEnvelope className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <a href="mailto:info@intelicoreai.com" className="text-gray-200 hover:text-orange-400 transition-all duration-300 text-sm">
                info@intelicoreai.com
              </a>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaPhone className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <span className="text-gray-200 text-sm">+91 8050383631</span>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium text-xs">USA:</p>
                <p className="text-gray-200 text-xs">5001 Finley Drive, Suite 500,</p>
                <p className="text-gray-200 text-xs">Irving, TX 75038</p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaMapMarkerAlt className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-200 font-medium text-xs">India:</p>
                <p className="text-gray-200 text-xs">One City, Block B, 3rd Floor,</p>
                <p className="text-gray-200 text-xs">Krishna District, Nagayalanka 521120</p>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FaClock className="text-orange-400 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-200 text-xs">Business Hours: Mon-Fri, 9 AM - 7 PM IST</p>
                <p className="text-gray-200 text-xs">(Currently: {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hour12: true })} IST, Open)</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-600 text-center">
        <motion.p
          className="text-gray-300 text-xs"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          © InteliCore Systems. All rights reserved.
        </motion.p>
      </div>
    </div>
  </footer>
);


// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#050a15]">
      <AIProjectOverview />
      <Services />
      <ComingSoonImageStyle />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};


export default HomePage;
