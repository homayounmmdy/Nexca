'use client';
import { LATEST_POSTS_KEY } from '@/config/Constants';
import useGetLatestPosts from '@/hooks/useGetLatestPosts';
import { PostsCashType } from '@/types/CashTypes';
import { useState } from 'react';
import LinearPosts from './LinearPosts';

const LatestLinearPost = () => {
   const [recentSize] = useState(-4);
   const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
   return (
      <ul className="mb-3 flex flex-col gap-4">
         {posts?.map((post: PostsCashType) => {
            return <LinearPosts post={post} key={post._id} />;
         })}
      </ul>
   );
};

export default LatestLinearPost;
