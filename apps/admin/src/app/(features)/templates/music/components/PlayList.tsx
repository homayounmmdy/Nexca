'use client';
import { PLAY_LIST } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { motion } from 'framer-motion';
import MusicCard from './MusicCard';
import PlayListLoading from './loading/PlayListLoading';

const PlayList = () => {
   const { data, loading } = useGetSection(PLAY_LIST, -4, 26);

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
      return <PlayListLoading />;
   }
   return (
      <SectionController sectionId={26}>
         <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
               >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                     Trending{' '}
                     <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Playlists
                     </span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto">
                     Curated playlists for every mood and moment
                  </p>
               </motion.div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
               >
                  {data?.map((data: PostsCashType) => (
                     <MusicCard data={data} key={data._id} />
                  ))}
               </motion.div>
            </div>
         </section>
      </SectionController>
   );
};

export default PlayList;
