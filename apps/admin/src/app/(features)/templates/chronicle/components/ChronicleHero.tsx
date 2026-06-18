'use client';
import { HeroPost } from '@/components/posts';
import { CHRONICLE_MAIN } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';

const ChronicleHero = () => {
   const { data } = useGetSection(CHRONICLE_MAIN, -1, 19);

   return (
      <SectionController sectionId={19}>
         {data?.map((post: PostsCashType) => (
            <HeroPost post={post} key={post._id} />
         ))}
      </SectionController>
   );
};

export default ChronicleHero;
