'use client';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosGlobe } from 'react-icons/io';

const HeroPost = ({ post }: { post: PostsCashType }) => {
   const postLink = postLinkGenerator(post._id, post.title);

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
   return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
         <motion.div variants={itemVariants}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
               <IoIosGlobe className="h-3 w-3 mr-1" />
               Lead Story
            </div>
            <Link
               href={postLink}
               title={post.title}
               className="text-4xl line-clamp-2 sm:text-5xl hover:text-indigo-700 lg:text-6xl font-serif font-bold  leading-tight mb-6"
            >
               {post.title}
            </Link>
            <p className="text-xl line-clamp-3 mb-8 leading-relaxed font-light">
               {post.description}
            </p>
         </motion.div>

         <motion.div className="relative" variants={itemVariants}>
            <Link
               href={postLink}
               title={post.title}
               className="relative cursor-pointer overflow-hidden shadow-2xl"
            >
               <Image
                  src={post.imgurl || '/static/Image/logo.jpg'}
                  alt={post.title}
                  width={616}
                  height={500}
                  fetchPriority="high"
                  loading="eager"
                  priority
                  className="w-full h-96 lg:h-[500px] object-cover"
               />
               {post.author && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                     <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
                        {post.author}
                     </span>
                  </div>
               )}
            </Link>
         </motion.div>
      </div>
   );
};

export default HeroPost;
