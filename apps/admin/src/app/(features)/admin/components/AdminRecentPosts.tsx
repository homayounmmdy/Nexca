'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import PostCard from '@/components/organisms/postsSection/PostCard';
import { LATEST_POSTS_KEY } from '@/config/Constants';
import useGetLatestPosts from '@/hooks/useGetLatestPosts';
import { PostsCashType } from '@/types/CashTypes';
import React, { useState } from 'react';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AdminRecentPosts: React.FC = () => {
   const [recentSize] = useState(-8);
   const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
   return (
      <>
         <Swiper
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={24}
            breakpoints={{
               0: {
                  slidesPerView: 1,
               },
               768: {
                  slidesPerView: 2.3,
               },
               992: {
                  slidesPerView: 2.8,
               },
               1200: {
                  slidesPerView: 4,
               },
            }}
            navigation
         >
            {posts?.map((post: PostsCashType) => (
               <SwiperSlide
                  className="pt-5 lg:py-5 h-[320px]! md:h-[340px]!"
                  key={post._id}
               >
                  <PostCard post={post} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default AdminRecentPosts;
