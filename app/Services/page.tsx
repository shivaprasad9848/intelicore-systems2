"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import PrimarySolutions from "./PrimarySolutions";
import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const ServicesPage: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-white font-sans flex flex-col"
      initial="hidden"
      animate="visible"
    >
      <HeroSection />
      <PrimarySolutions />
      <ServicesSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;