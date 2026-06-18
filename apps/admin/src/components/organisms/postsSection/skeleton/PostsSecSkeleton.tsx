import React from 'react';
import { SectionsTitle } from '../../../atoms';

const PostsSecSkeleton: React.FC = () => {
   return (
      <>
         <div className=" mx-auto pb-6">
            <SectionsTitle>Posts</SectionsTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
               <div className="flex w-full flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
               </div>
               <div className="flex w-full flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
               </div>
               <div className="flex w-full flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
               </div>
               <div className="flex w-full flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
               </div>
               <div className="flex w-full flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
               </div>
               <div className="flex w-full flex-col gap-4">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PostsSecSkeleton;
