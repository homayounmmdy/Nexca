'use client';
import { Teletype } from '@/components/posts';
import { DEFAULT_TELETYPE_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { SectionController } from '@/util/controller/sectionsController';

const DefaultTeleType = () => {
   const { data } = useGetSection(DEFAULT_TELETYPE_QUERY_KEY, -1, 7);
   return (
      <SectionController sectionId={7}>
         <Teletype data={data} />
      </SectionController>
   );
};

export default DefaultTeleType;
