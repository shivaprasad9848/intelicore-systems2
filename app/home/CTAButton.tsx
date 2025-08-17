'use client';
import React from 'react';
import { motion } from 'framer-motion';

type CTAButtonProps = {
  secondary?: boolean;
  children: React.ReactNode;
} & React.ComponentProps<typeof motion.button>;

const CTAButton: React.FC<CTAButtonProps> = ({ 
  secondary = false, 
  children, 
  className = '',
  ...props 
}) => (
  <motion.button
    className={`relative px-6 py-3 rounded-lg font-semibold text-base transition-all shadow-lg group ${
      secondary
        ? 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        : 'bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:from-orange-600 hover:to-orange-800'
    } ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-15 transition-opacity duration-300 bg-white/10" />
  </motion.button>
);

export default CTAButton;