'use client';
import { PostItem } from '@/components/posts';
import { POSTS_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';

const UnderMainBank = () => {
   const { data } = useGetSection(POSTS_QUERY_KEY, -9, 16);

   return (
      <SectionController sectionId={16}>
         {data?.map((post: PostsCashType) => (
            <PostItem key={post._id} post={post} />
         ))}
      </SectionController>
   );
};

export default UnderMainBank;
