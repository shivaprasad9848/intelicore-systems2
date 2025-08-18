"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactHero from './ContactHero';
import ContactInfoCard from './ContactInfoCard';
import ContactForm from './ContactForm';
import LocationCards from './LocationCards';
import ContactFooter from './ContactFooter';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
} as const;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <ContactHero />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="max-w-6xl mx-auto px-4 py-12 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactInfoCard />
          
          <ContactForm 
            formData={formData}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <LocationCards />
      </motion.div>

      <ContactFooter />
    </div>
  );
};

export default ContactPage;