"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ProductCards from "./ProductCards";
import CTASection from "./CTASection";
import Footer from "./Footer";

const AiProductsPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <HeroSection />
      <ProductCards />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AiProductsPage;