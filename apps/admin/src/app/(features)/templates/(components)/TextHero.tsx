import React from 'react';
import { motion } from 'framer-motion';
interface Props {
   title: string;
   name?: string;
   description?: string;
}

function TextHero({ title, name, description }: Props) {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };
   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };
   return (
      <motion.section
         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         <motion.div variants={itemVariants} className="text-center ">
            <h1 className="text-4xl md:text-6xl font-bold  mb-4">
               {title}
               {name && (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                     {name}
                  </span>
               )}
            </h1>
            {description && (
               <p className="text-xl  max-w-3xl mx-auto">{description}</p>
            )}
         </motion.div>
      </motion.section>
   );
}

export default TextHero;
