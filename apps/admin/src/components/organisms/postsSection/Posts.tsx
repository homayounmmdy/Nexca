'use client';
import { SectionsTitle } from '@/components/atoms';
import { POSTS_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import ErrorBoundaryProvider from '@/util/ErrorBoundaryProvider';
import React from 'react';
import PostCard from './PostCard';
import PostsSecSkeleton from './skeleton/PostsSecSkeleton';

const Posts: React.FC = () => {
   const { data, loading } = useGetSection(POSTS_QUERY_KEY, -6, 2);

   if (loading) {
      return <PostsSecSkeleton />;
   }

   return (
      <>
         <article className="mx-auto pb-6">
            <SectionsTitle>Posts</SectionsTitle>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
               {data?.map((post: PostsCashType) => (
                  <PostCard key={post._id} post={post} />
               ))}
            </div>
         </article>
      </>
   );
};

const WrappedPosts = () => (
   <ErrorBoundaryProvider>
      <Posts />
   </ErrorBoundaryProvider>
);

WrappedPosts.displayName = 'WrappedPosts';

export default WrappedPosts;
