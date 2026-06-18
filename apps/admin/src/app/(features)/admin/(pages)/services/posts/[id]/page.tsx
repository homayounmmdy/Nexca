'use client';
import ItemsTable from '@/app/(features)/admin/components/ItemsTable';
import { ErrorText, Spinner } from '@/components/atoms';
import RouteConfig from '@/config/RouteConfig';
import useFetch from '@/hooks/useFetch';
import { PostsCashType } from '@/types/CashTypes';
import { GetParameterId } from '@/util/Util';
import Link from 'next/link';

function PostsInService() {
   const id = GetParameterId(22);
   const { data, loading } = useFetch(
      'post based services',
      `/api/posts/services/${id}`
   );

   if (loading) {
      return <Spinner />;
   }
   const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];

   return (
      <>
         <div className="flex w-full justify-center">
            <Link
               className="btn btn-primary btn-outline m-3"
               href={RouteConfig.admin.services.base}
            >
               Back to Services
            </Link>
         </div>
         <table className="table">
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Edit</th>
                  <th>Delete</th>
               </tr>
            </thead>
            {sortedData?.length === 0 ? (
               <ErrorText>No Posts Found</ErrorText>
            ) : (
               <tbody>
                  {sortedData.map((post: PostsCashType) => (
                     <ItemsTable post={post} baseURL="posts" key={post._id} />
                  ))}
               </tbody>
            )}
         </table>
      </>
   );
}

export default PostsInService;
