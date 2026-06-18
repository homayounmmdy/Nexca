// components/MusicNews/MusicNewsLoading.tsx
'use client';
import { motion } from 'framer-motion';

const MusicNewsLoading = () => {
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
      },
   };

   return (
      <section className="py-20 bg-black/20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Skeleton */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               {/* Main Title Skeleton */}
               <div className="h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl animate-pulse mb-4 max-w-md mx-auto"></div>

               {/* Subtitle Skeleton */}
               <div className="h-6 bg-gray-700 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
            </motion.div>

            {/* News Cards Grid Skeleton */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid md:grid-cols-3 gap-8"
            >
               {[...Array(3)].map((_, index) => (
                  <motion.div
                     key={index}
                     variants={itemVariants}
                     className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg animate-pulse"
                  >
                     {/* Image Skeleton */}
                     <div className="w-full h-48 bg-gradient-to-br from-gray-600 to-gray-500"></div>

                     {/* Content Skeleton */}
                     <div className="p-6 space-y-4">
                        {/* Title Skeleton */}
                        <div className="h-6 bg-gray-600 rounded-lg w-4/5"></div>

                        {/* Description Skeleton */}
                        <div className="space-y-2">
                           <div className="h-4 bg-gray-600 rounded w-full"></div>
                           <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                           <div className="h-4 bg-gray-600 rounded w-4/6"></div>
                        </div>

                        {/* News Metadata Skeleton */}
                        <div className="flex justify-between items-center pt-2">
                           <div className="flex items-center space-x-2">
                              <div className="h-4 bg-gray-600 rounded w-20"></div>
                           </div>
                           <div className="h-4 bg-gray-600 rounded w-16"></div>
                        </div>

                        {/* Date & Category Skeleton */}
                        <div className="flex justify-between items-center text-sm">
                           <div className="h-3 bg-gray-600 rounded w-24"></div>
                           <div className="h-3 bg-gray-600 rounded w-20"></div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default MusicNewsLoading;
