'use client';
import { Container, ErrorText, Spinner } from '@/components/atoms';
import { PostItem } from '@/components/posts';
import { PostsCashType } from '@/types/CashTypes';
import { useInfiniteQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';

// Define the structure of the paginated response
interface PaginatedPosts {
   data: PostsCashType[];
   meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
   };
}

// fetch posts from the backend with pagination
const fetchPosts = async ({
   pageParam = 1,
}: {
   pageParam?: number;
}): Promise<PaginatedPosts> => {
   const res = await fetch(`/api/posts?page=${pageParam}&limit=12`);

   if (!res.ok) {
      throw new Error('Failed to fetch posts');
   }

   const data = await res.json();
   return data;
};

const Feed: React.FC = () => {
   // useInfiniteQuery to manage infinite scroll data
   const {
      data, // All fetched data
      fetchNextPage, // Fetch the next page
      hasNextPage, // If there are more pages to load
      isFetchingNextPage, // If the next page is being fetched
      error,
      isLoading,
      // @ts-ignore
   } = useInfiniteQuery<PaginatedPosts>({
      queryKey: ['posts'],
      // @ts-ignore
      queryFn: fetchPosts,
      getNextPageParam: (lastPage) => {
         // Determine the next page
         const nextPage = lastPage.meta.page + 1; // Calculate the next page number
         return nextPage <= lastPage.meta.totalPages ? nextPage : undefined; // Return nextPage if it exists, otherwise undefined
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
   });

   const observerRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      // No setup observer if there are no more pages or already fetching
      if (!hasNextPage || isFetchingNextPage) return;

      // Store the current ref value in a variable
      const currentObserverRef = observerRef.current;

      // Set up an IntersectionObserver to trigger fetchNextPage when the element becomes visible
      const observer = new IntersectionObserver(
         (entries) => {
            if (entries[0].isIntersecting) {
               fetchNextPage(); // Fetch the next page when the element is visible
            }
         },
         { threshold: 1.0 } // Trigger only when 100% of the element is visible
      );

      if (currentObserverRef) {
         observer.observe(currentObserverRef);
      }

      return () => {
         if (currentObserverRef) {
            observer.unobserve(currentObserverRef); // Clean up the observer using the stored ref value
         }
      };
   }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

   if (isLoading)
      return (
         <div className="flex h-screen items-center justify-center">
            <Spinner />
         </div>
      );

   if (error)
      return (
         <div className="flex h-screen items-center justify-center">
            <ErrorText>Error loading posts. Please try again later.</ErrorText>
         </div>
      );

   return (
      <Container className="mt-30 mb-5">
         {/*@ts-ignore*/}
         {data?.pages[0]?.data?.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
               <p className="text-lg font-medium ">No posts available!</p>
            </div>
         ) : (
            <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {data?.pages.map((page, i) => (
                  <React.Fragment key={i}>
                     {/*@ts-ignore*/}
                     {page.data?.map((post: PostsCashType) => (
                        <PostItem key={post._id} post={post} />
                     ))}
                  </React.Fragment>
               ))}
            </div>
         )}
         <div ref={observerRef} className="h-10"></div>
         {isFetchingNextPage && (
            <div className="mt-4 flex justify-center">
               <Spinner />
            </div>
         )}
      </Container>
   );
};

export default Feed;
