import { PostOrder } from '@/components/posts';
import { MOST_READ_TODAY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { motion } from 'framer-motion';
import { IoIosTrendingUp } from 'react-icons/io';

const MostReadToday = () => {
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: 'easeOut',
         },
      },
   };
   const { data } = useGetSection(MOST_READ_TODAY, -8, 21);
   return (
      <SectionController sectionId={21}>
         <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl font-serif font-bold  mb-8 flex items-center">
               <IoIosTrendingUp className="h-8 w-8 mr-3 text-red-500" />
               Most Read Today
            </h2>
            <div className="space-y-4">
               {data?.map((post: PostsCashType, index: number) => (
                  <PostOrder post={post} index={index} key={post._id} />
               ))}
            </div>
         </motion.div>
      </SectionController>
   );
};

export default MostReadToday;
