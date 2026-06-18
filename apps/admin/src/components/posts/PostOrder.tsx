'use client';
import { PostsCashType } from '@/types/CashTypes';
import { motion } from 'framer-motion';

interface Props {
   post: PostsCashType;
   index: number;
}
const PostOrder = ({ post, index }: Props) => {
   return (
      <motion.div
         className="flex items-start p-6 bg-base-200 hover:bg-base-300 transition-colors duration-200 cursor-pointer group"
         whileHover={{ x: 4 }}
         transition={{ duration: 0.2 }}
      >
         <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-base-100 to-base-300 flex items-center justify-center  font-bold text-lg mr-4">
            {index + 1}
         </div>
         <h3 className="font-serif line-clamp-2 font-semibold  mb-2 group-hover:text-indigo-700 transition-colors duration-200">
            {post.title}
         </h3>
      </motion.div>
   );
};

export default PostOrder;
