'use client';
import { Spinner } from '@/components/atoms';
import useSinglePost from '@/hooks/useSinglePost';
import { slugify } from '@/util/ServerUtil';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import NotFound from '../../[...not_found]/not-found';
import SinglePostLoadingSkeleton from './loading';

const PostRedirectPage = () => {
   const router = useRouter();
   const params = useParams();

   const id = params.id as string;

   const { data: post, isLoading, isError } = useSinglePost(id);

   useEffect(() => {
      if (post && post.title) {
         const correctSlug = slugify(post.title);
         const correctUrl = `/posts/${id}/${correctSlug}`;
         router.replace(correctUrl);
      }
   }, [post, id, router]);

   if (isLoading) {
      return <SinglePostLoadingSkeleton />;
   }

   if (isError || !post) {
      return NotFound();
   }

   return (
      <div className="flex justify-center items-center min-h-screen ">
         <div className="text-center">
            <Spinner />
            <p className="font-medium">Redirecting to the correct URL...</p>
         </div>
      </div>
   );
};

export default PostRedirectPage;
