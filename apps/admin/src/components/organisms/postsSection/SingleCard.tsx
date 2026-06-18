'use client';
import { Button, SectionsTitle } from '@/components/atoms';
import { SINGLE_POST_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import ErrorBoundaryProvider from '@/util/ErrorBoundaryProvider';
import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SingleCardSkeleton from './skeleton/SingleCardSkeleton';
const SingleCard: React.FC = () => {
   const { data, loading } = useGetSection(SINGLE_POST_QUERY_KEY, -1, 3);

   if (loading) {
      return <SingleCardSkeleton />;
   }

   return (
      <article>
         <SectionsTitle>Single Posts</SectionsTitle>
         {data?.map((post: PostsCashType) => {
            const postLink = postLinkGenerator(post._id, post.title);
            return (
               <Link
                  href={postLink}
                  key={post._id}
                  className="card my-5 bg-base-100 shadow-xl lg:card-side"
               >
                  <figure>
                     <Image
                        src={
                           !post.imgurl ? '/static/Image/logo.jpg' : post.imgurl
                        }
                        alt={post.title.slice(0, 70)}
                        width={928}
                        height={548}
                     />
                  </figure>
                  <div className="card-body">
                     <h3 className="card-title">{post.title.slice(0, 70)}</h3>
                     <p>{post.description.slice(0, 150)}</p>
                     <Link
                        href={postLink}
                        title={post.title.slice(0, 70)}
                        className="card-actions justify-end"
                     >
                        <Button color="btn-primary">Read Now</Button>
                     </Link>
                  </div>
               </Link>
            );
         })}
      </article>
   );
};

const WrappedSingleCard = () => (
   <ErrorBoundaryProvider>
      <SingleCard />
   </ErrorBoundaryProvider>
);

WrappedSingleCard.displayName = 'WrappedSingleCard';

export default WrappedSingleCard;
