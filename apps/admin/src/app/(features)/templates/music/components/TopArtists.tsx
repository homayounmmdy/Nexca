'use client';
import { TOP_ARTISTS } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { postLinkGenerator } from '@/util/ServerUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TopArtistsLoading from './loading/TopArtistsLoading';

const TopArtists = () => {
   const { data, loading } = useGetSection(TOP_ARTISTS, -4, 24);

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
   if (loading || !data) {
      return <TopArtistsLoading />;
   }
   return (
      <SectionController sectionId={24}>
         <section id="artists" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
               >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                     Top{' '}
                     <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Artists
                     </span>
                  </h2>
               </motion.div>

               <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
               >
                  {data?.map((artist: PostsCashType) => {
                     const postLink = postLinkGenerator(
                        artist._id,
                        artist.title
                     );
                     return (
                        <motion.div
                           key={artist._id}
                           variants={itemVariants}
                           className="text-center group"
                        >
                           <Link
                              href={postLink}
                              title={artist.title}
                              className="relative block mb-6 mx-auto w-48 h-48 aspect-square"
                           >
                              <Image
                                 src={artist.imgurl || '/static/Image/logo.jpg'}
                                 alt={artist.title}
                                 width={192}
                                 height={192}
                                 className="w-48 h-48 object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           </Link>
                           <Link
                              href={postLink}
                              title={artist.title}
                              className="hover:underline text-white text-xl font-bold mb-2"
                           >
                              {artist.author}
                           </Link>
                           <p className="text-white/60 mb-4 line-clamp-2">
                              {artist.description}
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

export default TopArtists;
