'use client';
import NotFound from '@/app/(pages)/[...not_found]/not-found';
import { Spinner } from '@/components/atoms';
import SiteConfig from '@/config/site';
import useSinglePost from '@/hooks/useSinglePost';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const slugify = (title: string) =>
   title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

const EditLivePage = () => {
   const { id, slug } = useParams();

   const { data: post, isLoading, isError } = useSinglePost(id);

   if (isLoading) {
      return <Spinner />;
   }

   if (isError || !post || !post._id) {
      return NotFound();
   }
   const API_URL = process.env.NEXT_PUBLIC_API_URL;

   const url = `${API_URL}/posts/${post._id}/${slug}`;

   return <iframe src={url} width="100%" height="100%"></iframe>;
};

export default EditLivePage;
