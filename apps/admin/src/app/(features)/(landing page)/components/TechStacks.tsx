'use client';
import { Container, PremiumBadge } from '@/components/atoms';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { TechStackData } from '../data/TechStackData';
import FeatureCard from './FeatureCard';

const TechStacks: React.FC = () => {
   const containerRef = useRef<HTMLElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start'],
   });

   const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
   const opacity = useTransform(
      scrollYProgress,
      [0, 0.3, 0.7, 1],
      [0, 1, 1, 0]
   );

   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
         },
      },
   };

   const item = {
      hidden: {
         opacity: 0,
         y: 60,
         scale: 0.8,
         rotateX: -15,
      },
      show: {
         opacity: 1,
         y: 0,
         scale: 1,
         rotateX: 0,
         transition: {
            duration: 0.8,
            ease: [0.04, 0.62, 0.23, 0.98],
            type: 'spring',
            damping: 25,
            stiffness: 120,
         },
      },
   };

   return (
      <motion.section
         ref={containerRef}
         style={{ opacity }}
         className="relative py-12 sm:py-16 lg:py-24 overflow-hidden"
      >
         {/* Animated Background */}
         <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-base-300 "
         />

         {/* Floating Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
               <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
                  animate={{
                     x: [0, 100, 0],
                     y: [0, -100, 0],
                     scale: [1, 1.5, 1],
                  }}
                  transition={{
                     duration: 8 + i * 2,
                     repeat: Infinity,
                     ease: 'easeInOut',
                     delay: i * 0.5,
                  }}
                  style={{
                     left: `${10 + i * 15}%`,
                     top: `${20 + i * 10}%`,
                  }}
               />
            ))}
         </div>

         <Container className="relative">
            {/* Header Section */}
            <motion.div
               initial={{ opacity: 0, y: -40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
               className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight"
               >
                  Our Tech Arsenal
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="max-w-3xl mx-auto text-lg sm:text-xl  leading-relaxed"
               >
                  Discover the cutting-edge technologies powering our digital
                  excellence. Each tool is carefully selected to deliver
                  unparalleled performance and innovation.
               </motion.p>
            </motion.div>

            {/* Tech Stack Grid */}
            <motion.div
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: '-50px' }}
               className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8"
            >
               {TechStackData.map((data) => (
                  <FeatureCard key={data.title} data={data} />
               ))}
            </motion.div>
         </Container>
      </motion.section>
   );
};

export default TechStacks;
