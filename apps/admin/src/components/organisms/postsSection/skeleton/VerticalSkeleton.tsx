import { SectionsTitle } from '@/components/atoms';

const VerticalSkeleton = () => {
   return (
      <div className=" mx-auto py-6">
         <SectionsTitle>Vertical Posts</SectionsTitle>
         <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
            <div className="skeleton w-full h-[450px] rounded-md"></div>
            <div className="skeleton w-full h-[450px] rounded-md"></div>
            <div className="skeleton w-full h-[450px] rounded-md"></div>
            <div className="skeleton w-full h-[450px] rounded-md"></div>
         </div>
      </div>
   );
};

export default VerticalSkeleton;
