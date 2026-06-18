'use client';
import { motion } from 'framer-motion';

const TopArtistsLoading = () => {
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
      <section id="artists" className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Skeleton */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <div className="h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl animate-pulse mb-4 max-w-sm mx-auto"></div>
               <div className="h-8 bg-gray-700 rounded-lg animate-pulse max-w-xs mx-auto"></div>
            </motion.div>

            {/* Artists Grid Skeleton */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
               {[...Array(8)].map((_, index) => (
                  <motion.div
                     key={index}
                     variants={itemVariants}
                     className="text-center group"
                  >
                     {/* Avatar Skeleton */}
                     <div className="relative block mb-6 mx-auto w-48 h-48 aspect-square">
                        <div className="w-48 h-48 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full shadow-2xl animate-pulse"></div>
                     </div>

                     {/* Name Skeleton */}
                     <div className="h-6 bg-gray-700 rounded-lg animate-pulse mb-3 mx-auto w-32"></div>

                     {/* Description Skeleton */}
                     <div className="space-y-2">
                        <div className="h-4 bg-gray-700 rounded animate-pulse w-full"></div>
                        <div className="h-4 bg-gray-700 rounded animate-pulse w-5/6 mx-auto"></div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default TopArtistsLoading;
