'use client';
import { PostItem } from '@/components/posts';
import { MUSIC_NEWS } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { motion } from 'framer-motion';
import MusicNewsLoading from './loading/MusicNewsLoading';

const MusicNews = () => {
   const { data, loading } = useGetSection(MUSIC_NEWS, -3, 29);

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
      return <MusicNewsLoading />;
   }
   return (
      <SectionController sectionId={29}>
         <section className="py-20 bg-black/20">
            <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
               >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                     Music{' '}
                     <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        News
                     </span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto">
                     Stay updated with the latest happenings in the music world
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
            </motion.div>
         </section>
      </SectionController>
   );
};

export default MusicNews;
