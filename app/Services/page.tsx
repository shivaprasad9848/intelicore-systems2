"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaMicrosoft,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiUnrealengine,
} from "react-icons/si";
import Image from "next/image";

// Enhanced BusinessCard Component with improved styling and responsiveness
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

// Animation Variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleUp: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// Main Component
const ServicesPage: React.FC = () => {
  const imagePaths = {
    hero: "/images/hero.png",
    ai: "/images/ai.jpg",
    cybersecurity: "/images/cybersecurity.jpg",
    cloud: "/images/cloud.jpg",
    fullStack: "/images/full-stack-web-dev.jpg",
    backend: "/images/backend-dev.jpg",
    aiKnowledge: "/images/ai-knowledge.jpg",
    dataScience: "/images/data-science.jpg",
    sdetDevops: "/images/sdet-devops.jpg",
  };

  const serviceIcons = {
    robot: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1 .9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5 .67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z" />
      </svg>
    ),
    shield: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    cloud: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
    arrow: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    ),
  };

  const trainingPrograms = [
    {
      image: imagePaths.fullStack,
      title: "Full-Stack Web Development",
      description: "HTML, CSS, Tailwind CSS, React JS",
      path: "/training/full-stack",
    },
    {
      image: imagePaths.backend,
      title: "Backend Development",
      description: "JavaScript, Python, MongoDB",
      path: "/training/backend",
    },
    {
      image: imagePaths.aiKnowledge,
      title: "AI Knowledge",
      description: "NLP/ML, Generative AI",
      path: "/training/ai",
    },
    {
      image: imagePaths.dataScience,
      title: "Data Science",
      description: "Spark, Airflow, dbl, SQL",
      path: "/training/data-science",
    },
    {
      image: imagePaths.sdetDevops,
      title: "SDT & DevOps",
      description: "Jenkins, Docker, GitLab CI/CD",
      path: "/training/devops",
    },
    {
      image: imagePaths.cybersecurity,
      title: "Cybersecurity",
      description: "HTML, CSS, TypeScript, React JS",
      path: "/training/cybersecurity",
    },
  ];

  const technologies = [
    {
      name: "React",
      description: "Modern UI development with the most popular frontend library",
      icon: FaReact,
    },
    {
      name: "Python",
      description: "Versatile language for backend, AI, and data analytics applications",
      icon: FaPython,
    },
    {
      name: "Git",
      description: "Version control for collaborative development and code management",
      icon: FaGitAlt,
    },
    {
      name: "MongoDB",
      description: "Flexible NoSQL database for modern applications",
      icon: SiMongodb,
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: SiTailwindcss,
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript for more reliable and maintainable code",
      icon: SiTypescript,
    },
    {
      name: "Azure",
      description: "Microsoft's cloud platform for enterprise-grade solutions",
      icon: FaMicrosoft,
    },
    {
      name: "Unreal Engine",
      description: "Advanced 3D engine for immersive simulations and visualizations",
      icon: SiUnrealengine,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white font-sans flex flex-col"
      initial="hidden"
      animate="visible"
    >
      {/* Enhanced Hero Section */}
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
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Core Services & Technologies
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl font-semibold mb-2 text-gray-900"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Comprehensive solutions powered by cutting-edge technologies
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg mb-6 text-gray-700"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We deliver tailored services leveraging modern tech stacks to drive your business forward
            </motion.p>
            <motion.a 
              href="http://localhost:3000/discover" 
              className="bg-orange-500 text-white font-medium px-6 py-3 rounded-3xl hover:bg-yellow-600 mb-10 transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Discover More →
            </motion.a>
          </div>
        </div>
      </div>

      {/* Business Cards Section */}
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

        {/* Row 1: AI card centered */}
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

        {/* Row 2: Cybersecurity and Cloud side by side */}
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

      {/* Training Programs Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Project-Oriented Career Training
            </motion.h2>
            <motion.p 
              className="text-orange-500 mt-4 text-lg"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Beyond our core offerings, we provide specialized services
            </motion.p>
            <motion.p 
              className="text-orange-500 mt-2 font-bold text-xl"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Build Real Skills. Showcase Real Results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <motion.div
                key={program.title}
                variants={scaleUp}
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
                    src={program.image}
                    alt={program.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.h3 
                      className="text-xl font-bold text-white"
                      variants={fadeInLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {program.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="p-6">
                  <motion.p 
                    className="text-gray-600 mb-4"
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {program.description}
                  </motion.p>
                  <a
                    href={program.path}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300 group-hover:translate-x-2"
                  >
                    Explore Program
                    {serviceIcons.arrow({ className: "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" })}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Technology Stack
            </motion.h2>
            <motion.p 
              className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Solutions built with modern technologies for top-tier quality and performance
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ 
                    y: -15,
                    boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.2)"
                  }}
                  className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-500/50"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full"
                      whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                    >
                      <Icon className="w-8 h-8 text-orange-500" />
                    </motion.div>
                  </div>
                  <motion.h3 
                    className="text-lg font-semibold text-gray-800"
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {tech.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600 mt-2"
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {tech.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 text-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-100 to-red-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let&apos;s discuss how our solutions can help you achieve your goals
          </motion.p>
          
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-10 pb-6 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <motion.h2 
                className="text-xl font-bold mb-3"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                IntelliCoreAI
              </motion.h2>
              <motion.p 
                className="text-gray-400 text-sm mb-4"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Embracing the future with cutting-edge software applications, cybersecurity, and cloud computing.
              </motion.p>
            </div>

            <div>
              <motion.h3 
                className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block"
                variants={fadeInLeft}
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
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                      <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h3 
                className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block"
                variants={fadeInLeft}
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
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm flex items-center">
                      <span className="w-1 h-1 bg-orange-500 rounded-full mr-2"></span>
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h3 
                className="text-base font-semibold mb-3 border-b border-orange-500 pb-1 inline-block"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Contact Us
              </motion.h3>
              <ul className="space-y-2">
                <motion.li 
                  className="flex items-start"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaEnvelope className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                  <a href="mailto:info@intellicoreai.com" className="text-gray-400 hover:text-orange-500 transition-all duration-300 text-sm">
                    info@intellicoreai.com
                  </a>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaPhone className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 8050383631</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 font-medium text-xs">USA:</p>
                    <p className="text-gray-400 text-xs">5001 Executive Parkway, Suite 500,</p>
                    <p className="text-gray-400 text-xs">Office 515, Frisco, TX 75034</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 font-medium text-xs">India:</p>
                    <p className="text-gray-400 text-xs">O City, Block B, 3rd Floor,</p>
                    <p className="text-gray-400 text-xs">Krishna District, Nagayalanka 521120</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaClock className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs">Business Hours: Mon-Fri, 9 AM - 5 PM</p>
                    <p className="text-gray-400 text-xs">IST (Currently Open)</p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 text-center">
            <motion.p 
              className="text-gray-500 text-xs"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              © 2025 IntelliCore Systems. All rights reserved.
            </motion.p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default ServicesPage;