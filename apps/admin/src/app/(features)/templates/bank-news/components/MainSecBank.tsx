import React from 'react';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import useGetSection from '@/hooks/useGetSection';
import { POSTS_QUERY_KEY } from '@/config/Constants';
import ImageCard from '../../(components)/ImageCard';

const MainSecBank = () => {
   const { data } = useGetSection(POSTS_QUERY_KEY, -1, 15);

   return (
      <SectionController sectionId={15}>
         {data?.map((post: PostsCashType) => (
            <ImageCard key={post._id} post={post} />
         ))}
      </SectionController>
   );
};

export default MainSecBank;
