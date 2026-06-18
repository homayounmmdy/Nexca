import React from 'react';
import { PostsCashType } from '@/types/CashTypes';
import { motion } from 'framer-motion';
import { FaRegCalendar } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import FormatTime from '../../../../components/molecules/FormatTime';

function LinearCard({ data }: { data: PostsCashType }) {
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
      <motion.div
         variants={itemVariants}
         whileHover={{ x: 5 }}
         className="pb-4 group border-b border-base-300 last:border-b-0 last:pb-0 hover:bg-base-300 p-3 rounded-lg transition-colors cursor-pointer"
      >
         <h4 className="font-semibold  mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {data.title}
         </h4>
         <div className="flex items-center justify-between text-sm ">
            <div className="flex items-center space-x-3">
               <span className="flex items-center bg-base-300 p-2 rounded-xl">
                  <FiUser data-testid="user-icon" className="mr-1" size={12} />
                  <span data-testid="author-sec">
                     {data.author ? data.author : 'unknown'}
                  </span>
               </span>
            </div>
            <span className="flex items-center">
               <FaRegCalendar
                  data-testid="calender-icon"
                  className="mr-1"
                  size={12}
               />
               <span data-testid="formatted-time">
                  <FormatTime timestamp={data.createdAt} />
               </span>
            </span>
         </div>
      </motion.div>
   );
}

export default LinearCard;
