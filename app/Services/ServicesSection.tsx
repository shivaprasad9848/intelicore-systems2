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
      description: "Master the skills to build modern, responsive web applications from scratch. Our program covers HTML, CSS, Tailwind CSS, and React.js, preparing you to create professional-grade projects and launch a successful career in web development.",
      path: "/training/full-stack",
    },
    {
      image: "/images/backend-dev.jpg",
      title: "Backend Development",
      description: "Learn to build powerful, scalable backend systems using JavaScript, Python, and MongoDB. Gain hands-on experience in APIs, databases, and server-side logic to power real-world applications.",
      path: "/training/backend",
    },
    {
      image: "/images/ai-knowledge.jpg",
      title: "AI & Machine Learning",
      description: "Dive into the future of technology with NLP, Machine Learning, and Generative AI. Develop intelligent solutions and prepare for in-demand roles in AI-driven industries.",
      path: "/training/ai",
    },
    {
      image: "/images/data-science.jpg",
      title: "Data Science",
      description: "Master data-driven decision-making with Apache Spark, Airflow, DBL, and SQL. Learn to analyze, visualize, and interpret complex data to solve real-world business problems.",
      path: "/training/data-science",
    },
    {
      image: "/images/sdet-devops.jpg",
      title: "Software Development & DevOps (SDT & DevOps)",
      description: "Combine coding and deployment expertise. Gain skills in Jenkins, Docker, and GitLab CI/CD to build, test, and deliver applications faster and more efficiently.",
      path: "/training/devops",
    },
    {
      image: "/images/cybersecurity.jpg",
      title: "Cybersecurity",
      description: "Protect digital assets and ensure system integrity. Learn essential security practices, vulnerability testing, and secure coding techniques to defend against modern cyber threats.",
      path: "/training/cybersecurity",
    },
  ];

  const technologies = [
    {
      name: "React",
      description: "Build modern, dynamic user interfaces with the most popular frontend library in the industry.",
      icon: FaReact,
    },
    {
      name: "Python",
      description: "A versatile programming language powering backend systems, AI, and data-driven applications.",
      icon: FaPython,
    },
    {
      name: "Git",
      description: "Industry-standard version control for seamless collaboration and efficient code management.",
      icon: FaGitAlt,
    },
    {
      name: "MongoDB",
      description: "A flexible NoSQL database designed for high-performance, modern applications.",
      icon: SiMongodb,
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework enabling rapid, responsive, and consistent UI development.",
      icon: SiTailwindcss,
    },
    {
      name: "TypeScript",
      description: "Enhance JavaScript with type safety for more robust and maintainable applications.",
      icon: SiTypescript,
    },
    {
      name: "Azure",
      description: "Leverage Microsoft's cloud platform for secure, scalable, and enterprise-ready solutions.",
      icon: FaMicrosoft,
    },
    {
      name: "Unreal Engine",
      description: "Create advanced 3D environments for immersive training, simulations, and visual experiences.",
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
            className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Go beyond theory—gain hands-on experience. At Intelicore Systems, we offer practical, project-based training programs that help students and professionals develop real-world skills and build a portfolio that stands out to employers.
          </motion.p>
          <motion.p 
            className="text-orange-500 mt-4 font-bold text-xl"
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