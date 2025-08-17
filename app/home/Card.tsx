'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

interface CardProps {
  title: string;
  svgIcon: React.ReactNode;
  description: string | string[];
  hoverImage: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Card: React.FC<CardProps> = ({ title, svgIcon, description, hoverImage }) => {
  const [animationState, setAnimationState] = useState<'idle' | 'animating' | 'complete'>('idle');

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg overflow-hidden w-96 h-[520px] cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
      onHoverStart={() => setAnimationState('animating')}
      onHoverEnd={() => setAnimationState('idle')}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top Rounded Section */}
      <div className="bg-gray-50 rounded-t-3xl w-full flex flex-col items-center pt-6 pb-4">
        <div className="w-16 h-16 text-orange-500">{svgIcon}</div>
        <motion.h3
          className="text-xl font-semibold mt-2 text-gray-950"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
      </div>

      {/* Description & Arrow/Image Reveal */}
      <div className="p-6 text-center flex-1 flex flex-col">
        <motion.div
          className="text-gray-600 mb-6 flex-1"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {typeof description === 'string' ? (
            <motion.p variants={textVariants}>{description}</motion.p>
          ) : (
            <motion.ul
              className="list-disc pl-5 space-y-1 text-left"
              variants={listVariants}
            >
              {description.map((text) => (
                <motion.li key={text} variants={textVariants}>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </motion.div>

        {/* Rounded Box Container */}
        <div className="relative w-full h-16 rounded-3xl border border-gray-300 overflow-hidden mt-auto">
          {/* Moving Arrow */}
          {animationState !== 'complete' && (
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-600"
              animate={{
                x: animationState === 'animating' ? 'calc(100% - 60px)' : 0,
              }}
              transition={{
                duration: 1.5,
                onComplete: () => animationState === 'animating' && setAnimationState('complete'),
              }}
            >
              <FiArrowRight />
            </motion.div>
          )}

          {/* Image Reveal */}
          {animationState === 'complete' && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={hoverImage}
                alt={`${title} illustration`}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;