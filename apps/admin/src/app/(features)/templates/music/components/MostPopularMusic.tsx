'use client';
import { MOST_POPULAR_MUSIC } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { motion } from 'framer-motion';
import ImageCard from '../../(components)/ImageCard';
import MostPopularMusicLoading from './loading/MostPopularMusicLoading';

const MostPopularMusic = () => {
   const { data, loading } = useGetSection(MOST_POPULAR_MUSIC, -6, 25);

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
      return <MostPopularMusicLoading />;
   }
   return (
      <SectionController sectionId={25}>
         <section id="genres" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
               >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                     Explore{' '}
                     <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        MostPopular
                     </span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto">
                     Discover MostPopular musics
                  </p>
               </motion.div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
               >
                  {data?.map((post: PostsCashType) => (
                     <ImageCard post={post} key={post._id} />
                  ))}
               </motion.div>
            </div>
         </section>
      </SectionController>
   );
};

export default MostPopularMusic;
