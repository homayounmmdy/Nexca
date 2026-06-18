'use client';
import React from 'react';
import Image from 'next/image';
import { FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import Link from 'next/link';

const ImageCard = ({ post }: { post: PostsCashType }) => {
   const postLink = postLinkGenerator(post._id, post.title);
   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };
   return (
      <motion.section variants={itemVariants}>
         <Link
            href={postLink}
            title={post.title}
            className="relative block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
         >
            <div className="relative ">
               <Image
                  src={post.imgurl}
                  alt={post.title}
                  width={800}
                  height={320}
                  fetchPriority="high"
                  loading="eager"
                  priority
                  className="w-full h-full aspect-video object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
               <div className="absolute top-4 left-4"></div>
               <div className="absolute bottom-4 left-4 right-4">
                  <h1 className="text-white text-xl line-clamp-2  sm:text-2xl font-bold leading-tight">
                     {post.title}
                  </h1>
               </div>
            </div>
         </Link>
      </motion.section>
   );
};

export default ImageCard;
