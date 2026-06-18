'use client';
import { ErrorText } from '@/components/atoms';
import useFetch from '@/hooks/useFetch';
import { PostsCashType } from '@/types/CashTypes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import VerticalCard from '../../(components)/VerticalCard';
import { useCategoryStore } from '../useCategoryStore';

const LatestVerticalPosts = () => {
   const activeCategory = useCategoryStore((state) => state.activeCategory);
   const data = useFetch('all templates 2', '/api/posts/templates/2');
   const [posts, setPosts] = useState(data?.data || []);

   useEffect(() => {
      setPosts(data?.data || []);
   }, [data]);

   // Filter news based on active category
   const filteredNews = posts.filter((item: PostsCashType) => {
      if (activeCategory === 'all') return true;
      return item.section === activeCategory;
   });

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
      <div className="lg:col-span-2">
         <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
         >
            <motion.div
               variants={itemVariants}
               className="flex items-center justify-between mb-8"
            >
               <h2 className="text-3xl font-bold  flex items-center">
                  <FiTrendingUp className="mr-3 text-blue-600" />
                  Latest Posts
               </h2>
            </motion.div>

            <div className="space-y-6">
               {filteredNews.map((item: PostsCashType) => (
                  <VerticalCard data={item} key={item._id} />
               ))}
            </div>
            {filteredNews.length == 0 && (
               <motion.div
                  variants={itemVariants}
                  className="bg-base-200 rounded-xl p-8 text-center"
               >
                  <ErrorText>No post found</ErrorText>
               </motion.div>
            )}
         </motion.div>
      </div>
   );
};

export default LatestVerticalPosts;
