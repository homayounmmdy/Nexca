'use client';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '../../../../../util/ServerUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MusicCard = ({ data }: { data: PostsCashType }) => {
   const postLink = postLinkGenerator(data._id, data.title);

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

   return (
      <motion.div
         variants={itemVariants}
         whileHover={cardHover}
         data-testid="music-card"
         className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
      >
         <Link
            href={postLink}
            title={data.title}
            data-testid="image-link"
            className="relative mb-4 overflow-hidden rounded-xl"
         >
            <Image
               src={data.imgurl || '/static/Image/logo.jpg'}
               alt={data.title}
               width={238}
               height={238}
               data-testid="image"
               className="w-full aspect-square object-cover"
            />
         </Link>

         <Link
            href={postLink}
            title={data.title}
            data-testid="title-link"
            className="text-white group-hover:underline font-semibold line-clamp-1 text-lg mb-1"
         >
            {data.title}
         </Link>
         {data.author && (
            <p data-testid="author-sec" className="text-white/60 mb-3">
               {data.author}
            </p>
         )}
         <p className="text-white/60 line-clamp-3 mb-3">{data.description}</p>
      </motion.div>
   );
};

export default MusicCard;
