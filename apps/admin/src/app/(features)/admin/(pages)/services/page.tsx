'use client';
import { Button, ErrorText, Spinner } from '@/components/atoms';
import { DeleteBtn } from '@/components/molecules';
import { POST_API_URL, SERVICES_API_URL } from '@/config/apiConstants';
import { ALL_POSTS_QUERY_KEY, SERVICES_QUERY_KEY } from '@/config/Constants';
import RouteConfig from '@/config/RouteConfig';
import useFetch from '@/hooks/useFetch';
import { PostsCashType } from '@/types/CashTypes';
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';

const Services: React.FC = () => {
   const { data, loading } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);
   const { data: posts, loading: loadingPost } = useFetch(
      ALL_POSTS_QUERY_KEY,
      POST_API_URL
   );
   if (loading && loadingPost) {
      return <Spinner />;
   }

   const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];
   const postCounts = posts?.reduce(
      (acc: any, post: PostsCashType) => {
         const serviceId = post.services;
         if (serviceId) {
            acc[serviceId] = (acc[serviceId] || 0) + 1;
         }
         return acc;
      },
      {} as Record<string, number>
   );

   const editor = true;
   return (
      <>
         <div className="overflow-x-auto">
            {editor ? (
               <div className="flex w-full justify-center">
                  <Link href={RouteConfig.admin.services.new}>
                     <Button
                        color="btn-primary"
                        className="btn-outline m-3"
                     >{`New services`}</Button>
                  </Link>
               </div>
            ) : null}
            {sortedData?.length === 0 ? (
               <ErrorText>There are currently no services created.</ErrorText>
            ) : (
               <table className="table table-zebra m-3">
                  <thead>
                     <tr>
                        <th>id</th>
                        <th>services</th>
                        <th>posts</th>
                        <th>edit</th>
                        {editor ? <th>delete</th> : null}
                     </tr>
                  </thead>
                  <tbody>
                     {sortedData?.map((item) => (
                        <tr key={item.id}>
                           <td>{item.secid}</td>
                           <td>{item.name}</td>
                           <td>
                              <Link
                                 href={`${process.env.NEXT_PUBLIC_API_URL}${RouteConfig.admin.services.posts}/${item.secid}`}
                              >
                                 {postCounts?.[item.secid] || 0}
                              </Link>
                           </td>
                           <td>
                              <Link
                                 href={`${process.env.NEXT_PUBLIC_API_URL}${RouteConfig.admin.services.base}/${item._id}`}
                              >
                                 <Button
                                    color="btn-warning"
                                    className="mb-2 me-2"
                                 >
                                    <CiEdit size={25} />
                                 </Button>
                              </Link>
                           </td>
                           {editor ? (
                              <td>
                                 <div className="group relative h-12 w-12">
                                    <DeleteBtn
                                       path="services"
                                       disable={
                                          postCounts?.[item.secid] > 0
                                             ? true
                                             : false
                                       }
                                       id={item._id}
                                    />
                                    {/* Tooltip */}
                                    <div className="invisible absolute bottom-full left-1/2 right-0 mb-2 w-32 -translate-x-1/2 transform rounded-md bg-black px-2 py-1 text-sm text-white group-hover:visible">
                                       {postCounts?.[item.secid] > 0
                                          ? 'This service contains posts. To delete it, please transfer all posts to another service.'
                                          : 'Delete Service'}
                                    </div>
                                 </div>
                              </td>
                           ) : null}
                        </tr>
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </>
   );
};

export default Services;
