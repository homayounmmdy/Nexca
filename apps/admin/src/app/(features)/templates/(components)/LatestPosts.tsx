'use client';
import { LATEST_POSTS_KEY } from '@/config/Constants';
import useGetLatestPosts from '@/hooks/useGetLatestPosts';
import { PostsCashType } from '@/types/CashTypes';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiNews } from 'react-icons/bi';
import LinearCard from './LinearCard';
import LatestPostsLoading from './components/LatestPostsLoading';

function LatestPosts() {
   const [recentSize] = useState(-5);
   const { posts, loading } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
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
   if (loading) {
      return <LatestPostsLoading />;
   }
   return (
      <>
         <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-base-200 rounded-xl shadow-md p-6"
         >
            <motion.div
               variants={itemVariants}
               className="flex items-center justify-between mb-8"
            >
               <h2 className="text-3xl font-bold  flex items-center">
                  <BiNews className="mr-3 text-blue-600" />
                  Latest Posts
               </h2>
            </motion.div>
            <div className="space-y-6">
               {posts?.map((item: PostsCashType) => (
                  <LinearCard key={item._id} data={item} />
               ))}
            </div>
         </motion.div>
      </>
   );
}

export default LatestPosts;
