'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCpu,
  FiCloud,
  FiShield,
  FiCode,
  FiUsers,
  FiLock,
  FiGlobe,
} from 'react-icons/fi';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

// Card Component
interface CardProps {
  title: string;
  svgIcon: React.ReactNode;
  description: string;
  hoverImage: string;
}

const Card: React.FC<CardProps> = ({ title, svgIcon, description, hoverImage }) => {
  const [animationState, setAnimationState] = useState<'idle' | 'animating' | 'complete'>('idle');

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden w-72 h-[420px] cursor-pointer dark:bg-gray-800 dark:text-white hover:shadow-xl transition-shadow flex flex-col"
      onHoverStart={() => setAnimationState('animating')}
      onHoverEnd={() => setAnimationState('idle')}
    >
      {/* Top Rounded Section */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-t-3xl w-full flex flex-col items-center pt-6 pb-4">
        <div className="w-16 h-16 text-orange-500">{svgIcon}</div>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>

      {/* Description & Arrow/Image Reveal */}
      <div className="p-6 text-center flex-1 flex flex-col">
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">{description}</p>

        {/* Rounded Box Container */}
        <div className="relative w-full h-14 rounded-3xl border border-gray-300 dark:border-gray-600 overflow-hidden mt-auto">
          {/* Moving Arrow */}
          {animationState !== 'complete' && (
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300"
              animate={{
                x: animationState === 'animating' ? 'calc(100% - 60px)' : 0,
              }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
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
                alt={title}
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

// CTA Button Component
interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  children: React.ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ secondary, children, ...props }) => (
  <button
    className={`relative px-6 py-3 rounded-lg font-semibold text-base transition-all shadow-lg group ${
      secondary
        ? 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white'
        : 'bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:from-orange-600 hover:to-orange-800'
    }`}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-15 transition bg-white/10" />
  </button>
);

// Hero Section
const Hero = () => (
  <div className="bg-gradient-to-b from-orange-100 to-white dark:from-[#0A162F] dark:to-[#141B21] flex flex-col items-center justify-start text-center px-4 pb-40 pt-[270px]">
    <motion.div
      className="flex items-center justify-between bg-gradient-to-r from-orange-200 to-orange-100 dark:from-orange-700/30 dark:to-orange-600/30 rounded-full px-6 py-2 shadow-md mb-10 max-w-fit text-base md:text-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="bg-white dark:bg-gray-800 text-teal-800 dark:text-teal-300 text-sm md:text-base font-bold rounded-full px-3 py-1 mr-3">
        New
      </span>
      <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg">
        Introducing <strong>InteliCore</strong>: the first AI Agent.
      </p>
      <button className="ml-3 text-gray-900 dark:text-white font-bold text-xl md:text-2xl">›</button>
    </motion.div>

    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      Welcome to InteliCore Systems
    </motion.h1>

    <motion.h2
      className="text-2xl md:text-3xl text-orange-600 dark:text-orange-400 font-semibold mb-6 leading-snug"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      Innovate with AI, Cybersecurity, and Cloud Solutions
    </motion.h2>

    <motion.p
      className="max-w-3xl text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      At InteliCore Systems Private Limited, we're redefining the future with
      cutting-edge software solutions.
    </motion.p>

    <motion.div
      className="flex gap-6 flex-col sm:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <CTAButton>Explore Our Services</CTAButton>
      <CTAButton secondary>Contact Us</CTAButton>
    </motion.div>
  </div>
);

// Services Section
const Services = () => {
  const services = [
    {
      title: 'AI Assistants',
      description:
        'Create intelligent, user-focused applications. Our AI solutions transform data into actionable insights and automate complex workflows.',
      icon: <FiCpu className="w-full h-full" />,
      image: '/images/ai-ml.jpg',
    },
    {
      title: 'CX Cloud',
      description:
        'Scale seamlessly with cloud-based solutions. Our expertise in cloud technologies ensures your applications perform reliably at any scale.',
      icon: <FiCloud className="w-full h-full" />,
      image: '/images/cloud.jpg',
    },
    {
      title: 'Cybersecurity',
      description:
        'Safeguard your digital assets with advanced protection. We implement robust security measures to protect your data and systems.',
      icon: <FiShield className="w-full h-full" />,
      image: '/images/security.jpg',
    },
    {
      title: 'Web Development',
      description:
        'Modern, responsive web applications that deliver exceptional user experiences across all devices.',
      icon: <FiCode className="w-full h-full" />,
      image: '/images/web-dev.jpg',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 dark:from-[#111927] dark:to-[#050a15] px-4 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg mb-4" />
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We specialize in key areas to deliver exceptional software solutions.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-30 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              svgIcon={service.icon}
              description={service.description}
              hoverImage={service.image}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <CTAButton>Learn More About Our Services</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose Us Section (right image static)
const WhyChooseUs = () => {
  const features = [
    {
      title: 'Innovative AI Technology',
      description:
        'Our AI solutions are designed to simplify and enhance your career preparation. Our platform provides intuitive, AI-driven tools to support you every step of the way.',
      icon: <FiCpu className="h-6 w-6" />,
      color: 'text-blue-600',
    },
    {
      title: 'Built for All Professionals',
      description:
        'From freshers entering the workforce to experienced professionals seeking new opportunities, our platform is tailored to meet diverse needs.',
      icon: <FiUsers className="h-6 w-6" />,
      color: 'text-purple-600',
    },
    {
      title: 'Join a Thriving Community',
      description:
        'Be part of a growing community of professionals who trust our platform to advance their careers.',
      icon: <FiGlobe className="h-6 w-6" />,
      color: 'text-green-600',
    },
    {
      title: 'Unwavering Commitment to Security',
      description:
        'Your privacy is our priority. We adhere to strict security standards, using secure authentication protocols and privacy-first practices to protect your data.',
      icon: <FiLock className="h-6 w-6" />,
      color: 'text-red-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-center mb-6 relative pb-2">
        Why Choose InteliCore Systems?
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-400 rounded-full"></span>
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
        we are dedicated to revolutionizing career development through innovative AI solutions.
      </p>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left side cards */}
        <div className="lg:w-1/2 space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 dark:bg-gray-800 dark:text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <div
                  className={`p-2 rounded-lg ${feature.color.replace('text', 'bg')} bg-opacity-20 mr-4`}
                >
                  <span className={feature.color}>{feature.icon}</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side static image */}
        <div className="lg:w-1/2 relative">
          <div className="relative overflow-hidden shadow-md border-t-4 border-r-4 border-orange-400 rounded-tl-4xl rounded-br-4xl">
            <Image
              src="/images/whychoose.jpg"
              alt="why choose?"
              width={500}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Coming Soon Section
const ComingSoon = () => {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-50 to-orange-50 py-20 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-xl text-gray-500 mb-4">— Coming Soon</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Get Notified</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">When We Launch</h2>

        <div className="max-w-md w-full">
          <div className="flex rounded-full border border-gray-300 overflow-hidden shadow-sm w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-3 focus:outline-none text-gray-700"
            />
            <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition whitespace-nowrap">
              Notify Me
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">*Don't worry we will not spam you :)</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-12">
          {['twitter', 'instagram', 'facebook'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">{social}</span>
              <div className="w-5 h-5 bg-current rounded-full"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-gray-950 text-white pt-10 pb-6 relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">IntelliCoreAI</h2>
          <p className="text-gray-400 text-sm mb-4">
            Intellacing the future with cutting-edge software applications. As cybersecurity and cloud computing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block">Quick Links</h3>
          <ul className="space-y-1.5">
            {["Home", "About US", "Streaming", "Contact US", "Joint Ventiler"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                  <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block">Our Services</h3>
          <ul className="space-y-1.5">
            {["AI & Automation", "Cybersecurity Solutions", "Cloud Computing", "App Development", "Web Platforms"].map((service) => (
              <li key={service}>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                  <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <FaEnvelope className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <a href="mailto:info@intellicoreai.com" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm">
                info@intellicoreai.com
              </a>
            </li>
            <li className="flex items-start">
              <FaPhone className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <span className="text-gray-400 text-sm">+91 8050383631 </span>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-400 font-medium text-xs">USA:</p>
                <p className="text-gray-400 text-xs">5001 Executive Drive, Suite 500,</p>
                <p className="text-gray-400 text-xs">Office 515, Hong, TX 75028</p>
              </div>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-400 font-medium text-xs">India:</p>
                <p className="text-gray-400 text-xs">O City, Block B, 3rd Floor,</p>
                <p className="text-gray-400 text-xs">Krishna District, Nagayalanka 521120</p>
              </div>
            </li>
            <li className="flex items-start">
              <FaClock className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
              <div>
                <p className="text-gray-400 text-xs">Business Hours: March 25, 13 AM +7 PM</p>
                <p className="text-gray-400 text-xs">BT (Currently: 15 E12 AM BT, Open)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-xs">
          <span className="text-orange-500">X</span> IntelliCore Systems. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#050a15]">
      <Hero />
      <Services />
      <ComingSoon />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomePage;