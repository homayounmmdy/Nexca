import { Teletype } from '@/components/posts';
import { CHRONICLE_TELETYPE_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { SectionController } from '@/util/controller/sectionsController';

const ChronicleTeleType = () => {
   const { data } = useGetSection(CHRONICLE_TELETYPE_QUERY_KEY, -1, 18);
   return (
      <SectionController sectionId={18}>
         <Teletype bg="bg-red-700 text-white" data={data} />
      </SectionController>
   );
};

export default ChronicleTeleType;
