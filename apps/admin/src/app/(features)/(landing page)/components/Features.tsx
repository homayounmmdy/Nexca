'use client';
import { Container } from '@/components/atoms';
import { FullHoverAnimation } from '@/components/molecules';
import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { FeaturesData } from '../data/FeaturesData';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
   const shouldReduceMotion = useReducedMotion(); // Respect user's motion preferences

   // Animation variants for the container
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2, // Stagger child animations
         },
      },
   };

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

   // Animation variants for each feature item
   const itemVariants = {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 }, // No motion if reduced motion is enabled
      visible: { opacity: 1, y: 0 },
   };

   return (
      <Container className="mt-5">
         <div className="mx-auto flex  flex-col items-center justify-center lg:text-center">
            <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
               Enhanced
               <FullHoverAnimation text="Content Management" />
            </h2>
         </div>
         <motion.div
            className="mx-auto mt-8  w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation only once
            variants={containerVariants}
         >
            <motion.div
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: '-50px' }}
               className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8"
            >
               {FeaturesData.map((feature) => (
                  <FeatureCard data={feature} key={feature.title} />
               ))}
            </motion.div>
         </motion.div>
      </Container>
   );
};

export default Features;
