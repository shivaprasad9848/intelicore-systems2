'use client';
import React from 'react';
import AllProjectOverview from './AiProjectOverview';
import Services from './Services';
import ComingSoonImageStyle from './ComingSoonImageStyle';
import WhyChoosels from './WhyChooseUs';
import Footer from './Footer';
// Remove Footer import if the component doesn't exist
// import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <AllProjectOverview />
      <Services />
      <ComingSoonImageStyle />
      <WhyChoosels />
      <Footer/>
    </div>
  );
};

export default HomePage;