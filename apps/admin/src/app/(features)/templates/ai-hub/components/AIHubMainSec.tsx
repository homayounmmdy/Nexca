'use client';
import { AIHUB_MAIN_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import VerticalCard from '../../(components)/VerticalCard';

function AIHubMainSec() {
   const { data } = useGetSection(AIHUB_MAIN_QUERY_KEY, -1, 9);

   return (
      <SectionController sectionId={9}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {data?.map((item: PostsCashType) => (
               <VerticalCard data={item} key={item._id} />
            ))}
         </div>
      </SectionController>
   );
}

export default AIHubMainSec;
