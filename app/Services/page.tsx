"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaCss3Alt,
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

// Interfaces
interface Service {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  image: string;
  content: string;
  reverse: boolean;
}

interface TrainingProgram {
  image: string;
  title: string;
  description: string;
  path: string;
}

interface Technology {
  name: string;
  description: string;
  icon: React.ElementType;
}

// Animation Variants
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

const floating: Variants = {
  floating: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

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
        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z" />
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

  const services: Service[] = [
    {
      icon: serviceIcons.robot,
      title: "AI and Automation Development",
      image: imagePaths.ai,
      content:
        "Build smart applications with AI-driven insights and automated workflows. Our AI solutions transform data into actionable insights and automate complex processes to enhance efficiency and decision-making.",
      reverse: false,
    },
    {
      icon: serviceIcons.shield,
      title: "Cybersecurity Solutions",
      image: imagePaths.cybersecurity,
      content:
        "Protect your apps and data with secure APIs, encryption, and threat detection. Our comprehensive security solutions safeguard your digital assets against evolving threats.",
      reverse: true,
    },
    {
      icon: serviceIcons.cloud,
      title: "Cloud Computing Services",
      image: imagePaths.cloud,
      content:
        "Develop scalable, cloud-based platforms for global accessibility. Our cloud solutions provide the flexibility, scalability, and reliability your business needs to grow.",
      reverse: false,
    },
  ];

  const trainingPrograms: TrainingProgram[] = [
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

  const technologies: Technology[] = [
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
      {/* Hero Section */}
      <header className="py-25 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden pt-[200px] ">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-orange-100 to-red-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <motion.div 
            variants={fadeInLeft} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-orange-500 rounded-full opacity-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                Our Core Services & Technologies
              </span>
            </h1>
            <p className="text-lg text-gray-700 mt-6 max-w-lg">
              Comprehensive solutions powered by cutting-edge technologies
            </p>
            <p className="text-lg text-gray-700 mt-4 max-w-lg">
              We deliver tailored services leveraging modern tech stacks to drive your business forward
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="mt-8"
            >
              <a
                href="/discover"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Discover More →
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeInRight} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            animate="floating"
            variants={{
              ...fadeInRight,
              floating: floating.floating
            }}
          >
            <img
              src={imagePaths.hero}
              alt="Technology Solutions"
              className="rounded-2xl shadow-xl object-contain w-full h-auto transform transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-20 px-4 space-y-32 relative">
        {/* Decorative background */}
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full filter blur-3xl opacity-20 -z-10"></div>
        
        <div className="text-center mb-20 relative">
          <motion.div 
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Professional Services
          </motion.h2>
          <motion.p 
            className="text-xl text-orange-500 mt-4 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Custom solutions tailored to your business needs
          </motion.p>
        </div>

        {services.map((service) => (
          <motion.div
            key={service.title}
            className={`flex flex-col ${service.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="md:w-1/2 w-full overflow-hidden rounded-2xl">
              <motion.img 
                src={service.image} 
                alt={service.title} 
                className="rounded-2xl shadow-md object-cover w-full h-auto transform transition-all duration-500 hover:scale-110"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  {service.icon({ className: "w-8 h-8 text-orange-500" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{service.content}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Training Programs */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Project-Oriented Career Training
            </motion.h2>
            <motion.p 
              className="text-orange-500 mt-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Beyond our core offerings, we provide specialized services
            </motion.p>
            <motion.p 
              className="text-orange-500 mt-2 font-bold"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Build Real Skills. Showcase Real Results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (
              <motion.div
                key={program.title}
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <a
                    href={program.path}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors duration-300"
                  >
                    Explore Program
                    {serviceIcons.arrow({ className: "w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" })}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <section className="py-20 bg-white relative">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Our Technology Stack
            </motion.h2>
            <motion.p 
              className="text-gray-600 mt-4 max-w-2xl mx-auto"
              variants={fadeInUp}
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
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)"
                  }}
                  className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-500/30"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full">
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{tech.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{tech.description}</p>
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
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-100 to-red-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Let's discuss how our solutions can help you achieve your goals
          </motion.p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Compact Footer - IntelliCoreAI */}
      <footer className="bg-gray-900 text-white pt-10 pb-6 relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
        
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
                  <span className="text-gray-400 text-sm">-479 68888-00458</span>
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
                    <p className="text-gray-400 text-xs">Financial District, Hyderabad 500032</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-orange-500 mt-0.5 mr-2 text-sm flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 font-medium text-xs">Australia:</p>
                    <p className="text-gray-400 text-xs">12, Convex Ave,</p>
                    <p className="text-gray-400 text-xs">Toroquibee, NSW, Australia 2146</p>
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
    </motion.div>
  );
};

export default ServicesPage;