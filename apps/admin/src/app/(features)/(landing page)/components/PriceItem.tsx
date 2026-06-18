'use client';
import { motion, useInView } from 'framer-motion';
import React from 'react';
import { IoCheckmarkCircleSharp, IoSparkles } from 'react-icons/io5';
import { MdCancel } from 'react-icons/md';
import { PriceDataType } from '../types';

const PriceItem = ({ item }: { item: PriceDataType }) => {
   const cardRef = React.useRef(null);
   const cardInView = useInView(cardRef, { once: true, amount: 0.3 });

   return (
      <motion.div
         ref={cardRef}
         initial={{ opacity: 0, y: 60, rotateY: 15 }}
         animate={
            cardInView
               ? {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: {
                       duration: 0.8,
                       delay: item.id * 0.2,
                       ease: [0.25, 0.46, 0.45, 0.94],
                    },
                 }
               : {}
         }
         whileHover={{
            y: -20,
            scale: 1.02,
            transition: { duration: 0.3, ease: 'easeOut' },
         }}
         className="group relative h-full"
      >
         {/* Floating elements for special card */}
         {item.special && (
            <>
               <motion.div
                  className="absolute -top-2 -right-2 z-20"
                  animate={{
                     rotate: 360,
                     scale: [1, 1.1, 1],
                  }}
                  transition={{
                     rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                     scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     },
                  }}
               >
                  <IoSparkles className="text-yellow-400 text-2xl filter drop-shadow-lg" />
               </motion.div>

               <motion.div
                  className="absolute -top-1 -left-1 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                  animate={{
                     boxShadow: [
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                        '0 0 40px rgba(147, 51, 234, 0.8)',
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                     ],
                  }}
                  transition={{
                     duration: 2,
                     repeat: Infinity,
                     ease: 'easeInOut',
                  }}
               >
                  MOST POPULAR
               </motion.div>
            </>
         )}

         <div
            className={`
          relative h-full flex flex-col items-start space-y-8 rounded-3xl p-4 lg:p-8 xl:p-10
          backdrop-blur-xl border transition-all duration-500 overflow-hidden
          ${
             item.special
                ? 'bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 border-indigo-400/50 shadow-2xl shadow-indigo-500/25'
                : 'bg-white/10 border-white/20 hover:border-white/30 shadow-xl hover:shadow-2xl'
          }
          group-hover:shadow-3xl group-hover:shadow-black/20
        `}
         >
            {/* Animated background gradient */}
            <motion.div
               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{
                  background: item.special
                     ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1), rgba(236, 72, 153, 0.1))'
                     : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(148, 163, 184, 0.05))',
               }}
            />

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
               {[...Array(6)].map((_, i) => (
                  <motion.div
                     key={i}
                     className="absolute w-1 h-1 bg-white/30 rounded-full"
                     style={{
                        left: ` ${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                     }}
                     animate={{
                        y: [-20, -100],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                     }}
                     transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'easeOut',
                     }}
                  />
               ))}
            </div>

            <div className="relative z-10 w-full">
               {/* Title with gradient text */}
               <motion.h3
                  className={`text-2xl font-bold mb-2 ${
                     item.special
                        ? 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
                        : 'text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
               >
                  {item.titr}
               </motion.h3>

               {/* Animated price */}
               <motion.div
                  className="my-8 flex items-baseline justify-center"
                  initial={{ scale: 0 }}
                  animate={cardInView ? { scale: 1 } : {}}
                  transition={{
                     delay: item.id * 0.2 + 0.3,
                     duration: 0.5,
                     ease: 'backOut',
                  }}
               >
                  <motion.span
                     className={`text-6xl font-black ${
                        item.special
                           ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                           : 'text-white'
                     }`}
                     animate={{
                        textShadow: item.special
                           ? [
                                '0 0 20px rgba(147, 51, 234, 0.5)',
                                '0 0 40px rgba(147, 51, 234, 0.8)',
                                '0 0 20px rgba(147, 51, 234, 0.5)',
                             ]
                           : 'none',
                     }}
                     transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                     }}
                  >
                     $0
                  </motion.span>
                  <span className="ml-2 text-gray-300 text-lg">/month</span>
               </motion.div>

               {/* Description */}
               <motion.p
                  className="text-gray-300 text-center mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : {}}
                  transition={{ delay: item.id * 0.2 + 0.4, duration: 0.5 }}
               >
                  {item.description}
               </motion.p>

               {/* CTA Button */}
               <motion.button
                  className={`
              w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300
              relative overflow-hidden group/btn
              ${
                 item.special
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
              }
            `}
                  whileHover={{
                     scale: 1.02,
                     boxShadow: item.special
                        ? '0 20px 40px rgba(147, 51, 234, 0.4)'
                        : '0 20px 40px rgba(0, 0, 0, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={cardInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: item.id * 0.2 + 0.5, duration: 0.5 }}
               >
                  <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                     animate={{ x: [-100, 300] }}
                     transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 3,
                     }}
                  />
                  <span className="relative z-10">Get Started</span>
               </motion.button>

               {/* Features list */}
               <motion.ul
                  className="space-y-4 mt-8 flex-1"
                  initial={{ opacity: 0 }}
                  animate={cardInView ? { opacity: 1 } : {}}
                  transition={{ delay: item.id * 0.2 + 0.6, duration: 0.5 }}
               >
                  {item.features.map((feature, featureIndex) => (
                     <motion.li
                        key={feature.id}
                        className="flex items-center space-x-3 group/feature"
                        initial={{ opacity: 0, x: -20 }}
                        animate={cardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                           delay: item.id * 0.2 + 0.7 + featureIndex * 0.1,
                           duration: 0.4,
                        }}
                        whileHover={{ x: 5 }}
                     >
                        <motion.div
                           whileHover={{
                              scale: 1.2,
                              rotate: feature.mark ? 360 : 0,
                           }}
                           transition={{ duration: 0.3 }}
                        >
                           {feature.mark ? (
                              <IoCheckmarkCircleSharp
                                 className="text-green-400 filter drop-shadow-lg"
                                 size={24}
                              />
                           ) : (
                              <MdCancel
                                 className="text-red-400/70 filter drop-shadow-lg"
                                 size={24}
                              />
                           )}
                        </motion.div>
                        <span
                           className={`text-sm transition-colors duration-200 group-hover/feature:text-indigo-400 ${
                              feature.mark
                                 ? 'text-gray-300'
                                 : 'text-gray-400 line-through'
                           }`}
                        >
                           {feature.name}
                        </span>
                     </motion.li>
                  ))}
               </motion.ul>
            </div>
         </div>
      </motion.div>
   );
};

export default PriceItem;
