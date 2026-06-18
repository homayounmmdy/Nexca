'use client';
import { Input } from '@/components/atoms';
import { CollapseType } from '@/types/entities';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';

interface Props {
   data: CollapseType;
   isOpen: boolean;
   onToggle: () => void;
}

const Collapse: React.FC<Props> = ({ data, isOpen, onToggle }: Props) => {
   const contentVariants = {
      closed: {
         opacity: 0,
         height: 0,
         transition: {
            duration: 0.3,
            ease: 'easeInOut',
         },
      },
      open: {
         opacity: 1,
         height: 'auto',
         transition: {
            duration: 0.4,
            ease: 'easeOut',
         },
      },
   };

   const iconVariants = {
      closed: { rotate: 0 },
      open: { rotate: 180 },
   };

   const cardVariants = {
      hover: {
         scale: 1.02,
         boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)',
         transition: {
            duration: 0.3,
            ease: 'easeOut',
         },
      },
      tap: {
         scale: 0.98,
      },
   };

   const borderVariants = {
      closed: {
         background:
            'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
      },
      open: {
         background:
            'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))',
      },
   };

   return (
      <motion.div
         className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
         variants={cardVariants}
         whileHover="hover"
         whileTap="tap"
         layout
      >
         {/* Animated border gradient */}
         <motion.div
            className="absolute inset-0 rounded-xl p-[1px]"
            variants={borderVariants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
         >
            <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-900/60 via-indigo-800/60 to-purple-900/60 backdrop-blur-sm" />
         </motion.div>

         {/* Hover glow effect */}
         <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
               background: [
                  'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                  'linear-gradient(225deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1))',
                  'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
               ],
            }}
            transition={{
               duration: 3,
               repeat: Infinity,
               ease: 'easeInOut',
            }}
         />

         <div className="relative z-10">
            {/* Hidden radio input for accessibility */}
            <Input
               id={`nexca-question-${data.id}`}
               type="radio"
               name="my-accordion-4"
               className="sr-only"
               checked={isOpen}
               onChange={onToggle}
            />

            {/* Clickable header */}
            <motion.div
               className="flex items-center justify-between w-full p-6 cursor-pointer select-none"
               onClick={onToggle}
               whileHover={{ x: 4 }}
               transition={{ type: 'spring', stiffness: 400 }}
            >
               <motion.h3
                  className="text-lg sm:text-xl font-bold text-white pr-4 leading-tight"
                  layout
               >
                  {data.label}
               </motion.h3>

               <motion.div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/30"
                  variants={iconVariants}
                  animate={isOpen ? 'open' : 'closed'}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  whileHover={{
                     scale: 1.1,
                     backgroundColor: 'rgba(99, 102, 241, 0.3)',
                  }}
               >
                  <IoChevronDownCircleOutline className="w-5 h-5 text-indigo-300" />
               </motion.div>
            </motion.div>

            {/* Animated content */}
            <AnimatePresence>
               {isOpen && (
                  <motion.div
                     variants={contentVariants}
                     initial="closed"
                     animate="open"
                     exit="closed"
                     className="overflow-hidden"
                  >
                     <motion.div
                        className="px-6 pb-6"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                     >
                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent mb-4" />

                        <motion.div
                           className="text-indigo-100/90 leading-relaxed whitespace-pre-line text-sm sm:text-base"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.2, duration: 0.4 }}
                        >
                           {data.body}
                        </motion.div>
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
         </div>

         {/* Subtle shine effect on hover */}
         <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out pointer-events-none"
            style={{ width: '50%' }}
         />
      </motion.div>
   );
};

export default Collapse;
