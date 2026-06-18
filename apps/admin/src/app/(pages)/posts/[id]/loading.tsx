import React from 'react';

const SinglePostLoadingSkeleton: React.FC = () => {
   return (
      <>
         <div className="flex flex-col ">
            <div className="relative py-3 md:py-6 overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900">
               <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-40"></div>
               <div className="mx-auto w-full px-4 sm:p-0 sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl ">
                  <div className="flex flex-col justify-center items-center w-full ">
                     <div className="skeleton h-6 w-full mb-6"></div>
                     <div className="skeleton h-4 w-3/4 mb-4"></div>
                     <div className="skeleton h-4 w-3/4 mb-4"></div>
                     <div className="skeleton h-4 w-32 mb-4"></div>
                  </div>
               </div>
            </div>
            <div className="py-8">
               <div className="w-[94%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-3/4 ">
                     <div className="skeleton aspect-video rounded-3xl w-full"></div>
                     <div className="prose max-w-none">
                        <div className="py-4">
                           <div className="skeleton h-4 w-[80%] mb-4"></div>
                           <div className="skeleton h-4 w-full mb-4"></div>
                           <div className="skeleton h-4 w-full mb-4"></div>
                           <div className="skeleton h-4 w-full mb-4"></div>
                           <div className="skeleton h-4 w-full mb-4"></div>
                           <div className="skeleton h-4 w-full mb-4"></div>
                           <div className="skeleton h-4 w-full mb-4"></div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full md:w-1/4 ">
                     <div className="skeleton h-96  rounded-3xl w-full"></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SinglePostLoadingSkeleton;
