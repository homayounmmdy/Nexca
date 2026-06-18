'use client';
import { motion } from 'framer-motion';
import { FeaturesType } from '../types';

const FeatureCard = ({ data }: { data: FeaturesType }) => {
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
      <motion.div
         variants={item}
         className="group relative"
         whileHover={{
            scale: 1.05,
            rotateY: 5,
            z: 50,
         }}
         whileTap={{ scale: 0.95 }}
         transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
         }}
      >
         {/* Card */}
         <div className="relative h-80 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-base-200 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
            {/* Gradient Background */}
            <div
               className={`absolute inset-0 bg-gradient-to-br ${data.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative p-6 sm:p-3 lg:p-8 h-full flex flex-col">
               {/* Icon */}
               <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                     duration: 0.6,
                     delay: data.delay,
                     type: 'spring',
                     damping: 15,
                  }}
                  className="mb-6"
               >
                  <div className="w-16 h-16 rounded-2xl bg-base-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <data.Icon
                        className={`w-8 h-8 ${data.iconColor} group-hover:text-indigo-600 transition-colors duration-300`}
                     />
                  </div>
               </motion.div>

               {/* Title */}
               <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: data.delay + 0.1 }}
                  className="text-xl sm:text-2xl font-bold  mb-4 group-hover:text-indigo-700 transition-colors duration-300"
               >
                  {data.title}
               </motion.h3>

               {/* Description */}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: data.delay + 0.2 }}
                  className=" leading-relaxed flex-grow text-sm sm:text-base line-clamp-3"
               >
                  {data.description}
               </motion.p>

               {/* Hover Effect Indicator */}
               <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '30%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: data.delay + 0.3 }}
                  className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"
               />
            </div>

            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-500" />
         </div>
      </motion.div>
   );
};

export default FeatureCard;
