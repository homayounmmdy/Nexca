'use client';
import { NEXT_MAIN_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';
import NextMainSkeleton from './NextMainSkeleton';

const NextMain = () => {
   const { data, loading } = useGetSection(NEXT_MAIN_QUERY_KEY, -4, 1);

   if (loading) {
      return <NextMainSkeleton />;
   }

   // here is show the latest Item in MainPost and the rest 3 in this place
   const customizedData = data?.slice(0, -1).slice(-4);
   return (
      <div className="col-span-12 md:col-span-6">
         <div className="flex flex-col gap-3">
            {customizedData?.map((post: PostsCashType) => {
               const postLink = postLinkGenerator(post._id, post.title);
               return (
                  <Link
                     href={postLink}
                     title={post.title.slice(0, 120)}
                     className="group card card-side bg-base-100 p-2 shadow-xl"
                     key={post._id}
                  >
                     <figure className="mr-2 w-2/5">
                        <Image
                           src={
                              !post.imgurl
                                 ? '/static/Image/logo.jpg'
                                 : post.imgurl
                           }
                           title={post.title.slice(0, 120)}
                           alt={post.title.slice(0, 120)}
                           width={255.262}
                           height={143.575}
                           className="aspect-video rounded-lg object-cover p-0"
                        />
                     </figure>
                     <div className="card-body ml-2 w-3/5 p-0">
                        <h2 className="card-title line-clamp-1 duration-500 group-hover:text-indigo-700 md:line-clamp-2">
                           {post.title}
                        </h2>
                        <p className="line-clamp-2 flex-none sm:line-clamp-3 md:line-clamp-2 lg:line-clamp-3">
                           {post.description}
                        </p>
                     </div>
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default NextMain;
