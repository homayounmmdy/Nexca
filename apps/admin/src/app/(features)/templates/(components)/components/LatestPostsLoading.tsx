// components/LatestPosts/LatestPostsLoading.tsx
'use client';
import { motion } from 'framer-motion';
import { BiNews } from 'react-icons/bi';

const LatestPostsLoading = () => {
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
      <motion.div
         initial="hidden"
         animate="visible"
         variants={containerVariants}
         className="bg-base-200 rounded-xl shadow-md p-6 animate-pulse"
      >
         {/* Header Skeleton */}
         <motion.div
            variants={itemVariants}
            className="flex items-center justify-between mb-8"
         >
            <div className="flex items-center">
               <BiNews className="mr-3 text-gray-400" />
               <div className="h-8 bg-gray-300 rounded-lg w-40"></div>
            </div>
         </motion.div>

         {/* Posts List Skeleton - No Images */}
         <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
               <motion.div
                  key={index}
                  variants={itemVariants}
                  className="pb-4 border-b border-gray-300 last:border-b-0 last:pb-0 bg-white p-3 rounded-lg"
               >
                  {/* Title Skeleton */}
                  <div className="h-5 bg-gray-300 rounded mb-3 w-4/5"></div>

                  {/* Metadata Skeleton */}
                  <div className="flex items-center justify-between text-sm">
                     <div className="flex items-center space-x-3">
                        {/* Author Skeleton */}
                        <div className="flex items-center bg-gray-200 p-2 rounded-xl">
                           <div className="w-16 h-3 bg-gray-300 rounded"></div>
                        </div>
                     </div>

                     {/* Date Skeleton */}
                     <div className="flex items-center">
                        <div className="w-20 h-3 bg-gray-300 rounded"></div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
};

export default LatestPostsLoading;
