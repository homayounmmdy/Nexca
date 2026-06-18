'use client';
import React from 'react';
import { FiBarChart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { SectionController } from '@/util/controller/sectionsController';
import useGetSection from '@/hooks/useGetSection';
import { POSTS_QUERY_KEY } from '@/config/Constants';
import { PostsCashType } from '@/types/CashTypes';
import BulletPost from '../../(components)/BulletPost';

const MarketSummary = () => {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };

   const { data } = useGetSection(POSTS_QUERY_KEY, -5, 17);
   return (
      <SectionController sectionId={17}>
         <motion.section
            className="bg-base-200 rounded-xl mb-4 p-6 shadow-sm"
            variants={itemVariants}
         >
            <h3 className="text-lg font-bold  mb-4 flex items-center">
               <FiBarChart className="w-5 h-5 mr-2 text-green-500" />
               Market Summary
            </h3>

            <div className="space-y-3">
               {data?.map((post: PostsCashType) => (
                  <BulletPost post={post} key={post._id} />
               ))}
            </div>
         </motion.section>
      </SectionController>
   );
};

export default MarketSummary;
