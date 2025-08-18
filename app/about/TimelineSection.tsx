'use client';

import { motion } from 'framer-motion';
import React from 'react';

const TimelineSection = () => {
  return (
    <section id="journey" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          className="text-3xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>

        <motion.div 
          className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-200 before:to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              year: "2025",
              title: "Company Founded",
              description: "Intelligence Systems was established with a vision to revolutionize software development through AI, cybersecurity, and cloud solutions."
            },
            {
              year: "2025",
              title: "First Major Clients",
              description: "Secured our first major partnerships and began developing innovative solutions for businesses across sectors."
            },
            {
              year: "Soon",
              title: "AI Career Solution Launch",
              description: "Our revolutionary AI career platform will launch, transforming how professionals approach career development."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-200 text-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="font-bold">{item.year}</span>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${item.year === "Soon" ? "text-orange-400" : "text-orange-500"}`}>
                    {item.title}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;