import React from 'react';
const MainSecSkeleton: React.FC = () => {
   return (
      <div className="col-span-12 md:col-span-6">
         <div data-testid="gridItem" className="group">
            <div className="overflow-hidden rounded-md transition-all hover:scale-105">
               <div className="skeleton h-80 w-full"></div>
            </div>
            <div className="mt-4">
               <div className="skeleton mb-2 h-5 w-full"></div>
               <div className="skeleton mb-4 h-5 w-full"></div>
               <div className="skeleton mb-1 h-3 w-full"></div>
               <div className="skeleton mb-1 h-3 w-full"></div>
               <div className="skeleton mb-1 h-3 w-full"></div>
            </div>
         </div>
      </div>
   );
};

export default MainSecSkeleton;
