'use client';
import { FEATURE_TRACK_NEWS } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { motion } from 'framer-motion';
import FeaturedTracksLoading from './loading/FeaturedTracksLoading';
import MusicCard from './MusicCard';

const FeaturedTracks = () => {
   const { data, loading } = useGetSection(FEATURE_TRACK_NEWS, -4, 23);

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
      return <FeaturedTracksLoading />;
   }

   return (
      <section id="music" className="py-20 bg-black/20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Featured{' '}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                     Tracks
                  </span>
               </h2>
               <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Handpicked songs that are trending right now
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
   );
};

export default FeaturedTracks;
