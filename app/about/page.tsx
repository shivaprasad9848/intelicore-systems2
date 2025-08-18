'use client';

import HeroSection from './HeroSection';
import OurStorySection from './OurStorySection';
import MissionValuesSection from './MissionValuesSection';
import TimelineSection from './TimelineSection';
import Footer from './Footer';
import React from 'react';

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