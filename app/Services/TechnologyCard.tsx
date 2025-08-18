"use client";

import React from "react";
import { motion } from "framer-motion";

interface TechnologyCardProps {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  index: number;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ 
  name, 
  description, 
  icon: Icon,
  index 
}) => {
  return (
    <motion.div
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ 
        y: -15,
        boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.2)"
      }}
      className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-500/50"
    >
      <div className="flex justify-center mb-4">
        <motion.div 
          className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-full"
          whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
        >
          <Icon className="w-8 h-8 text-orange-500" />
        </motion.div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default TechnologyCard;