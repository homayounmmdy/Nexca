'use client';
import { PostItem } from '@/components/posts';
import { LIVE_EVENT } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { motion } from 'framer-motion';
import LiveEventsLoading from './loading/LiveEventsLoading';

const LiveEvents = () => {
   const { data, loading } = useGetSection(LIVE_EVENT, -3, 28);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };
   if (loading || !data) {
      return <LiveEventsLoading />;
   }
   return (
      <SectionController sectionId={28}>
         <section id="events" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
               >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                     Live{' '}
                     <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Events
                     </span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto">
                     Experience music like never before at these upcoming live
                     events
                  </p>
               </motion.div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-8"
               >
                  {data?.map((post: PostsCashType) => (
                     <PostItem post={post} key={post._id} />
                  ))}
               </motion.div>
            </div>
         </section>
      </SectionController>
   );
};

export default LiveEvents;
