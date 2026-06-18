'use client';
import { SectionsTitle } from '@/components/atoms';
import { MORE_POSTS_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import ErrorBoundaryProvider from '@/util/ErrorBoundaryProvider';
import React from 'react';
import PostCard from './PostCard';
import PostsSkeleton from './skeleton/PostsSkeleton';

const MorePosts: React.FC = () => {
   const { data, loading } = useGetSection(MORE_POSTS_QUERY_KEY, -3, 8);

   if (loading) {
      return <PostsSkeleton />;
   }

   return (
      <>
         <div className="mx-auto rounded-xl bg-indigo-600 p-5">
            <SectionsTitle
               bg="bg-[#FFBB00]"
               line={false}
               className="w-full text-center p-5 font-bold text-xl !text-indigo-800"
            >
               More Posts
            </SectionsTitle>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
               {data?.map((post: PostsCashType) => (
                  <PostCard key={post._id} post={post} />
               ))}
            </div>
         </div>
      </>
   );
};

const WrappedMorePosts = () => (
   <ErrorBoundaryProvider>
      <MorePosts />
   </ErrorBoundaryProvider>
);

WrappedMorePosts.displayName = 'WrappedMorePosts';

export default WrappedMorePosts;
