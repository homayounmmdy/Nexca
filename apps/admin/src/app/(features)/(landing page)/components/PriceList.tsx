'use client';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import { PriceData } from '../data/PriceData';
import PriceItem from './PriceItem';
import { Container } from '@/components/atoms';

const PriceList = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
         },
      },
   };

   const titleRef = React.useRef(null);
   const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

   return (
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
         {/* Animated background elements */}
         <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
               <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/10 rounded-full"
                  style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                     y: [-50, -200],
                     opacity: [0, 1, 0],
                     scale: [0, 1, 0],
                  }}
                  transition={{
                     duration: 4 + Math.random() * 3,
                     repeat: Infinity,
                     delay: Math.random() * 3,
                     ease: 'easeOut',
                  }}
               />
            ))}
         </div>

         {/* Gradient orbs */}
         <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-3xl"
            animate={{
               x: [0, 100, 0],
               y: [0, -50, 0],
               scale: [1, 1.2, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
         />
         <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl"
            animate={{
               x: [0, -100, 0],
               y: [0, 50, 0],
               scale: [1, 1.3, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
         />

         <div className="md:relative z-10 flex items-center justify-center  py-5 md:py-12">
            <Container>
               <div className="mx-auto mb-10 md:mb-16 max-w-4xl text-center">
                  <motion.div
                     ref={titleRef}
                     initial={{ opacity: 0, y: 50 }}
                     animate={titleInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                     <motion.h2
                        className="mb-4 md:mb-6 text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent"
                        animate={{
                           backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                           duration: 5,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                     >
                        Pay once, use forever
                     </motion.h2>

                     <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6 md:mb-8"
                        initial={{ width: 0 }}
                        animate={titleInView ? { width: 96 } : {}}
                        transition={{
                           delay: 0.5,
                           duration: 0.8,
                           ease: 'easeOut',
                        }}
                     />

                     <motion.p
                        className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-2"
                        initial={{ opacity: 0 }}
                        animate={titleInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                     >
                        Choose the perfect plan for your needs. Unlock premium
                        features with our one-time payment solution.
                     </motion.p>
                  </motion.div>
               </div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 md:gap-6 lg:gap-8"
               >
                  {PriceData.map((item) => (
                     <PriceItem key={item.id} item={item} />
                  ))}
               </motion.div>
            </Container>
         </div>
      </div>
   );
};

export default PriceList;
