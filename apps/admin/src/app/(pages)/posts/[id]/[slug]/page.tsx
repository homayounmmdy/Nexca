'use client';
import RecentPosts from '@/app/(pages)/posts/[id]/components/RecentPosts';
import '@/app/tiptap.css';
import { Container } from '@/components/atoms';
import { MainHead } from '@/components/molecules';
import useSinglePost from '@/hooks/useSinglePost';
import { SectionController } from '@/util/controller/sectionsController';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import NotFound from '../../../[...not_found]/not-found';
import NewsBody from '../components/NewsBody';
import PostMeta from '../components/PostMeta';
import SinglePostLoadingSkeleton from '../loading';

const slugify = (title: string) =>
   title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

const Post: React.FC = () => {
   const router = useRouter();
   const { id, slug } = useParams(); // Get `id` and `slug` from the URL

   const { data: post, isLoading, isError } = useSinglePost(id);

   useEffect(() => {
      if (post && post.title) {
         const correctSlug = slugify(post.title);
         if (slug !== correctSlug) {
            router.replace(`/posts/${post._id}/${correctSlug}`);
         }
      }
   }, [post, slug, router]);

   if (isLoading) {
      return <SinglePostLoadingSkeleton />;
   }

   if (isError || !post || !post._id) {
      return NotFound();
   }

   return (
      <>
         <PostMeta post={post} slug={slug} />
         <div className="flex flex-col">
            <MainHead
               title={post.title}
               description={post.description}
               createdAt={post.createdAt}
            />

            <div className="py-8">
               <Container className=" flex flex-col gap-8  md:flex-row">
                  <div className="w-full md:w-3/4">
                     <NewsBody post={post} />
                  </div>
                  <div className="w-full py-3 md:w-1/4">
                     <SectionController sectionId={8}>
                        <RecentPosts />
                     </SectionController>
                  </div>
               </Container>
            </div>
         </div>
      </>
   );
};

export default Post;
