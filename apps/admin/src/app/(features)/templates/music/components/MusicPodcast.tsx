'use client';
import { PODCAST_MUSIC } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { postLinkGenerator } from '@/util/ServerUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MusicPodcastLoading from './loading/MusicPodcastLoading';

const MusicPodcast = () => {
   const { data, loading } = useGetSection(PODCAST_MUSIC, -3, 27);

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
         },
      },
   };

   const cardHover = {
      scale: 1.03,
      transition: { duration: 0.3 },
   };
   if (loading || !data) {
      return <MusicPodcastLoading />;
   }
   return (
      <SectionController sectionId={27}>
         <section id="podcasts" className="py-20 bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        Podcasts
                     </span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-2xl mx-auto">
                     Deep dive into the world of music with our exclusive
                     podcast series
                  </p>
               </motion.div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-8"
               >
                  {data?.map((podcast: PostsCashType) => {
                     const postLink = postLinkGenerator(
                        podcast._id,
                        podcast.title
                     );

                     return (
                        <motion.div
                           key={podcast._id}
                           variants={itemVariants}
                           whileHover={cardHover}
                           className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                        >
                           <Link
                              href={postLink}
                              title={podcast.title}
                              className="flex items-center space-x-4 mb-6"
                           >
                              <Image
                                 src={
                                    podcast.imgurl || '/static/Image/logo.jpg'
                                 }
                                 alt={podcast.title}
                                 width={80}
                                 height={80}
                                 className="w-20 h-20 object-cover rounded-xl"
                              />
                              <div className="flex-1">
                                 <Link
                                    href={postLink}
                                    title={podcast.title}
                                    className="text-white hover:underline line-clamp-2 font-bold text-xl mb-1"
                                 >
                                    {podcast.title}
                                 </Link>
                                 <p className="text-white/60">
                                    by {podcast.author}
                                 </p>
                              </div>
                           </Link>
                           <p className="text-white/60 line-clamp-3">
                              {podcast.description}
                           </p>
                        </motion.div>
                     );
                  })}
               </motion.div>
            </div>
         </section>
      </SectionController>
   );
};

export default MusicPodcast;
