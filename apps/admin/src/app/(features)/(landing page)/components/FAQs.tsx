'use client';
import { Container, PremiumBadge } from '@/components/atoms';
import { CollapseType } from '@/types/entities';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Collapse from './Collapse';

const FQAs: React.FC = () => {
   const [openId, setOpenId] = useState<number | null>(null);

   const handleToggle = (id: number) => {
      setOpenId((prevId) => (prevId === id ? null : id));
   };
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            duration: 0.6,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };

   const headerVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            ease: 'easeOut',
         },
      },
   };

   const backgroundVariants = {
      hidden: { scale: 0.95, opacity: 0 },
      visible: {
         scale: 1,
         opacity: 1,
         transition: {
            duration: 1,
            ease: 'easeOut',
         },
      },
   };

   return (
      <section
         className="overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white sm:py-16 py-4 relative"
         id="FAQs"
      >
         {/* Animated background elements */}
         <div className="absolute inset-0 overflow-hidden">
            <motion.div
               className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
               animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
               }}
               transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            />
            <motion.div
               className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
               animate={{
                  x: [0, -30, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.2, 1],
               }}
               transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            />
         </div>

         <Container>
            <motion.div
               className="relative overflow-hidden rounded-3xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl"
               variants={backgroundVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
            >
               {/* Gradient border effect */}
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 p-[1px]">
                  <div className="h-full w-full rounded-3xl bg-gradient-to-br from-indigo-900/80 via-indigo-800/80 to-purple-900/80 backdrop-blur-sm" />
               </div>

               <div className="relative z-10 p-3 md:px-8  sm:px-12 lg:px-16">
                  <motion.div
                     className="mb-3 md:mb-12 text-center"
                     variants={headerVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                  >
                     <div className="hidden md:block">
                        <PremiumBadge>Frequently asked questions</PremiumBadge>
                     </div>
                     <motion.h2
                        className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                     >
                        Got questions?{' '}
                        <motion.span
                           className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                           animate={{
                              backgroundPosition: ['0%', '100%', '0%'],
                           }}
                           transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                           }}
                        >
                           We are here to help!
                        </motion.span>
                     </motion.h2>

                     <motion.div
                        className="hidden md:block w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                     />
                  </motion.div>

                  <motion.div
                     className="max-w-4xl mx-auto"
                     variants={containerVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                  >
                     <div className="space-y-4">
                        {questions.map((question, index) => (
                           <motion.div
                              key={question.id}
                              variants={itemVariants}
                              custom={index}
                           >
                              <Collapse
                                 data={question}
                                 isOpen={openId === question.id}
                                 onToggle={() => handleToggle(question.id)}
                              />
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         </Container>
      </section>
   );
};

const questions: CollapseType[] = [
   {
      id: 1,
      label: 'What is Nexca?',
      body: 'Nexca is a modern, open-source CMS admin panel built with Next.js, TailwindCSS, and MongoDB. It helps content creators and developers manage posts, sections, and more all from a user-friendly interface.',
   },
   {
      id: 2,
      label: 'What can I do with Nexca?',
      body: 'With Nexca, you can create and manage posts, assign them to custom sections, preview them, send into world map, send to variates templates, manage newsletters.',
   },
   {
      id: 3,
      label: 'How do I set up Nexca locally?',
      body: '1. Clone the GitHub repository.\n2. Run npm install or yarn to install dependencies.\n3. Rename .env.sample to .env.local and fill in your environment variables.\n4. Run npm run dev to start the development server.\n5. Access the admin panel at http://localhost:3000/admin.',
   },
   {
      id: 4,
      label: 'How do I configure environment variables?',
      body: 'Rename the .env.sample file to .env.local. Fill in your MongoDB URI, admin credentials, and other necessary variables based on your hosting provider or local setup.',
   },
   {
      id: 5,
      label: 'What are the system requirements?',
      body: 'To run Nexca, you need:\n- Node.js v18 or higher\n- A MongoDB database (local or cloud) also sometimes you can work with cash and do not need to setup database and simulate that throughout cash\n- A browser for accessing the admin interface\n\nOptional but recommended: Git, VSCode, and a deployment platform like Vercel.',
   },
   {
      id: 6,
      label: 'Is Nexca mobile responsive?',
      body: 'Yes. Nexca is built with TailwindCSS and is fully responsive across devices, including tablets and smartphones.',
   },
   {
      id: 7,
      label: 'How do I deploy Nexca?',
      body: 'You can deploy Nexca to Vercel, Netlify, or any server that supports Node.js. Just connect your repository, set the environment variables, and build the project.',
   },
   {
      id: 8,
      label: 'Is Nexca free to use?',
      body: 'Yes. Nexca is open-source and completely free. You can contribute to its development or fork it to build your own custom CMS.',
   },
];

export default FQAs;
