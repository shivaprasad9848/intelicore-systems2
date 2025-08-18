"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  formData,
  onInputChange,
  isSubmitting,
  submitSuccess
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Send Us a Message
      </motion.h2>
      
      {submitSuccess && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-5 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Your message has been sent successfully! We&apos;ll contact you soon.
        </motion.div>
      )}
      
      <form onSubmit={onSubmit} className="space-y-5">
        {[
          {
            id: "name",
            label: "Name",
            type: "text",
            placeholder: "Your name"
          },
          {
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "Your email"
          },
          {
            id: "message",
            label: "How can we help you?",
            type: "textarea",
            placeholder: "Tell us about your project"
          }
        ].map((field, index) => (
          <motion.div 
            key={field.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <label htmlFor={field.id} className="block text-gray-700 mb-1 font-medium text-sm">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition shadow-sm text-sm"
                rows={4}
                required
                value={formData[field.id as keyof typeof formData]}
                onChange={onInputChange}
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-300 transition shadow-sm text-sm"
                required
                value={formData[field.id as keyof typeof formData]}
                onChange={onInputChange}
              />
            )}
          </motion.div>
        ))}
        
        <motion.button 
          type="submit" 
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className={`w-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center justify-center text-sm ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Submit Your Inquiry'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;