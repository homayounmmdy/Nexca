'use client';
import HeroImage from '@/../public/static/Image/Hero.webp';
import { Container } from '@/components/atoms';
import { CTABtn } from '@/components/molecules';
import RouteConfig from '@/config/RouteConfig';
import SiteConfig from '@/config/site';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
   // Simplified animation variants for content
   const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: { duration: 0.6, staggerChildren: 0.2 },
      },
   };
   const textVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 0.8,
         y: 0,
         transition: { duration: 0.6, staggerChildren: 0.2 },
      },
   };
   // Simplified decorative elements animation
   const decorativeVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: { duration: 1, ease: 'easeOut' },
      },
   };

   // Simplified image animation
   const imageVariants = {
      hidden: { opacity: 0, x: 50 },
      visible: {
         opacity: 1,
         x: 0,
         transition: { duration: 0.8, ease: 'easeOut' },
      },
   };

   return (
      <section className="relative pt-4">
         <Container>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 overflow-hidden">
               {/* Decorative Elements */}
               <div className="absolute inset-y-0 hidden w-full lg:right-0 lg:block lg:w-1/2">
                  <motion.span
                     variants={decorativeVariants}
                     initial="hidden"
                     animate="visible"
                     className="absolute -left-6 top-24 h-24 w-24 rounded-3xl bg-green-400 opacity-60 blur-lg md:left-4 lg:top-28"
                     style={{ willChange: 'opacity, transform' }}
                  />
                  <motion.span
                     variants={decorativeVariants}
                     initial="hidden"
                     animate="visible"
                     className="absolute bottom-12 right-4 h-24 w-24 rounded-3xl bg-blue-600 opacity-80 blur-lg"
                     style={{ willChange: 'opacity, transform' }}
                  />
               </div>
               <motion.span
                  variants={decorativeVariants}
                  initial="hidden"
                  animate="visible"
                  className="absolute -top-5 aspect-square w-4/12 rounded-full bg-linear-to-tr from-blue-600 to-green-400 opacity-40 blur-xl lg:left-0 lg:w-2/12"
                  style={{ willChange: 'opacity, transform' }}
               />

               {/* Content */}
               <motion.div
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8"
               >
                  <motion.h1
                     variants={contentVariants}
                     className="font-bold  leading-tight text-5xl md:text-6xl xl:text-7xl"
                  >
                     The content platform{' '}
                     <span
                        className="relative inline-block"
                        style={{
                           background:
                              'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
                           backgroundClip: 'text',
                           WebkitBackgroundClip: 'text',
                           WebkitTextFillColor: 'transparent',
                        }}
                     >
                        every team
                        <motion.div
                           initial={{ scaleX: 0 }}
                           animate={{ scaleX: 1 }}
                           transition={{
                              delay: 1.5,
                              duration: 0.8,
                              ease: 'easeOut',
                           }}
                           className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                           style={{ transformOrigin: 'left' }}
                        />
                     </span>{' '}
                     loves.
                  </motion.h1>
                  <motion.p
                     variants={textVariants}
                     className="mt-8 md:text-xl opacity-[0.8]"
                  >
                     {SiteConfig.slogan}
                  </motion.p>
                  <motion.div
                     variants={contentVariants}
                     className="mt-8 flex items-center justify-center gap-3"
                  >
                     <CTABtn href={RouteConfig.admin.base}>Admin Demo</CTABtn>
                  </motion.div>
               </motion.div>

               {/* Hero Image */}
               <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className="sm:relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none group"
                  style={{ willChange: 'opacity, transform' }}
               >
                  <motion.div
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 1.8, duration: 0.8 }}
                     className="absolute -top-8 -right-8 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-80 backdrop-blur-sm"
                     style={{
                        boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
                     }}
                  />
                  <Image
                     src={HeroImage}
                     alt="Websites hero image"
                     width={600}
                     height={533}
                     priority
                     className="max-h-96 rounded-3xl bg-slate-400 object-cover lg:absolute lg:h-full lg:max-h-none lg:w-full transition-transform duration-700 sm:group-hover:scale-105"
                  />
                  {/* Premium overlay gradient */}
                  <div
                     className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                     style={{
                        background:
                           'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                     }}
                  />
                  {/* Overlay gradient */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 1.8, duration: 0.8 }}
                     className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 opacity-90 backdrop-blur-sm"
                     style={{
                        boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.4)',
                     }}
                  />
               </motion.div>
            </div>
         </Container>
      </section>
   );
};

export default Hero;
