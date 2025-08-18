"use client";

import React from "react";
import { motion } from "framer-motion";
import TrainingProgramCard from "./TrainingProgramCard";
import TechnologyCard from "./TechnologyCard";
import { FaReact, FaPython, FaGitAlt, FaMicrosoft } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiTailwindcss, SiUnrealengine } from "react-icons/si";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServicesSection = () => {
  const trainingPrograms = [
    {
      image: "/images/full-stack-web-dev.jpg",
      title: "Full-Stack Web Development",
      description: "HTML, CSS, Tailwind CSS, React JS",
      path: "/training/full-stack",
    },
    {
      image: "/images/backend-dev.jpg",
      title: "Backend Development",
      description: "JavaScript, Python, MongoDB",
      path: "/training/backend",
    },
    {
      image: "/images/ai-knowledge.jpg",
      title: "AI Knowledge",
      description: "NLP/ML, Generative AI",
      path: "/training/ai",
    },
    {
      image: "/images/data-science.jpg",
      title: "Data Science",
      description: "Spark, Airflow, dbl, SQL",
      path: "/training/data-science",
    },
    {
      image: "/images/sdet-devops.jpg",
      title: "SDT & DevOps",
      description: "Jenkins, Docker, GitLab CI/CD",
      path: "/training/devops",
    },
    {
      image: "/images/cybersecurity.jpg",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
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
            <TrainingProgramCard 
              key={program.title}
              image={program.image}
              title={program.title}
              description={program.description}
              path={program.path}
            />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              icon={tech.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;