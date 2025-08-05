// src/app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-200 to-orange-200 text-gray-800 pt-[200px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Left side - Image with decorative frame */}
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 border-2 border-orange-300/50 rounded-xl transform group-hover:scale-[1.02] transition-all duration-300"></div>
          <div className="absolute inset-4 border-2 border-orange-300/30 rounded-lg transform group-hover:scale-[1.01] transition-all duration-500"></div>
          
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/team-collaboration.jpg"
              alt="Intelicore team collaborating"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-orange-300/10"></div>
          </div>
          
          <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-orange-400/80 shadow-lg shadow-orange-400/30"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-orange-500/80 shadow-lg shadow-orange-500/30"></div>
          <div className="absolute top-1/2 -right-4 h-16 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
        </motion.div>
        
        {/* Right side - Text content */}
        <motion.div 
          className="space-y-6 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building Tomorrow's <br />
            <span className="text-orange-600">Technology Today</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-800 max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Founded in 2025, Intelicore Systems Private Limited is a dynamic startup dedicated to innovation.
            Our passionate team of experts leverages AI, cybersecurity, and cloud computing to craft software
            solutions that solve real-world challenges.
          </motion.p>
          
          <motion.button 
            className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Learn More About Our Services
          </motion.button>
          
          <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-orange-400/20 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full">
        <svg viewBox="0 0 500 800" className="w-full h-full text-gray-100" preserveAspectRatio="none">
          <path d="M0,100 C150,200 200,50 500,300 L500,00 L0,0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <svg viewBox="0 0 500 800" className="w-full h-full text-gray-100" preserveAspectRatio="none">
          <path d="M500,100 C350,200 300,50 0,300 L0,00 L500,0 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="absolute -left-4 top-0 h-full w-1 bg-orange-400 z-10"></div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/team-meeting.jpg"
                alt="Intelicore team collaborating"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 text-gray-800">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Story
            </motion.h2>
            <motion.p 
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Founded in 2025, InteliCore Systems Private Limited is a dynamic startup dedicated to innovation.
              Our passionate team of experts leverages AI, cybersecurity, and cloud computing to craft software
              solutions that solve real-world challenges.
            </motion.p>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We believe in the power of technology to transform businesses and enhance lives.
              With our cutting-edge solutions, we're helping organizations navigate the digital
              landscape with confidence and security.
            </motion.p>
            <motion.button 
              className="bg-orange-400 hover:bg-orange-300 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Learn More About Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MissionValuesSection = () => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Mission & Values
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At InteliCore Systems, we're on a mission to deliver secure, scalable, and intelligent
            technology for businesses and individuals. Our work is guided by core values that
            define who we are.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left side - Mission */}
          <motion.div 
            className="bg-gray-50 p-12 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-[380px] max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-80"></div>
              <div className="absolute inset-0 bg-white rounded-[40%_60%_70%_30%_/_40%_50%_60%_70%] overflow-hidden">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <Image
                    src="/images/professional-woman.jpg"
                    alt="Professional team member"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <motion.h3 
                className="text-3xl font-light lowercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                our mission
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm max-w-md mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Deliver secure, scalable, and intelligent technology for businesses and individuals.
              </motion.p>
              
              <motion.h3 
                className="text-3xl font-light lowercase mb-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                our expertise
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm max-w-md mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Cutting-edge app and web development with a focus on user experience.
              </motion.p>
              
              <motion.button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-colors duration-300 uppercase text-sm tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Learn More
              </motion.button>
              <motion.p 
                className="text-xs text-gray-400 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Images by Freepik
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Values */}
          <motion.div 
            className="relative h-full min-h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/modern-architecture.jpg"
              alt="Modern architecture"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h3 
                  className="text-3xl font-light lowercase mb-4 text-white"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  our promise
                </motion.h3>
                <motion.p 
                  className="text-white text-sm mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  High-quality solutions backed by innovation and trust.
                </motion.p>
                <motion.p 
                  className="text-white text-sm mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Discover how we can elevate your digital journey
                </motion.p>
                <motion.ul 
                  className="text-white text-sm space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {[
                    "Innovation through cutting-edge technology",
                    "Integrity in all our solutions",
                    "Excellence in execution",
                    "Client-centric approach",
                    "Sustainable digital transformation"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      • {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  return (
    <section id="journey" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>

        <motion.div 
          className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-200 before:to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              year: "2025",
              title: "Company Founded",
              description: "Intelligence Systems was established with a vision to revolutionize software development through AI, cybersecurity, and cloud solutions."
            },
            {
              year: "2025",
              title: "First Major Clients",
              description: "Secured our first major partnerships and began developing innovative solutions for businesses across sectors."
            },
            {
              year: "Soon",
              title: "AI Career Solution Launch",
              description: "Our revolutionary AI career platform will launch, transforming how professionals approach career development."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-200 text-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">{item.year}</span>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${item.year === "Soon" ? "text-orange-400" : "text-orange-500"}`}>
                    {item.title}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4"
            >
              IntelliCoreAI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6"
            >
              Intelligencing the future with cutting-edge software applications. As cybersecurity and cloud computing.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Streaming", "Contact Us", "Joint Version"].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "AI & Automation",
                "Cybersecurity Solutions",
                "Cloud Computing",
                "App Development",
                "Web Platforms"
              ].map((service, index) => (
                <motion.li
                  key={index}
                  className="text-gray-400"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  info@intellicoreai.com
                </motion.p>
                <motion.p 
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  +91 01051035051
                </motion.p>
              </div>
              <div>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  SQL: Execute Drive, Suite 500,
                </motion.p>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Office File, Hang, TX 75003
                </motion.p>
              </div>
              <div>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  CPUs Block 5, Sui Floor,
                </motion.p>
                <motion.p 
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Kobe's District Hospitalities 53000
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Intellectual Systems. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

const IntelicorePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OurStorySection />
      <MissionValuesSection />
      <TimelineSection />
      <Footer />
    </div>
  );
};

export default IntelicorePage;