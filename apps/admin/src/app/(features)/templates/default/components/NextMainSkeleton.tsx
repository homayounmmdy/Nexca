import React from 'react';

const NextMainSkeleton = () => {
   return (
      <div className="col-span-12 md:col-span-6">
         <div className="flex flex-col gap-3">
            <div className="card skeleton card-side h-40 w-full shadow-xl"></div>
            <div className="card skeleton card-side h-40 w-full shadow-xl"></div>
            <div className="card skeleton card-side h-40 w-full shadow-xl"></div>
         </div>
      </div>
   );
};

export default NextMainSkeleton;
