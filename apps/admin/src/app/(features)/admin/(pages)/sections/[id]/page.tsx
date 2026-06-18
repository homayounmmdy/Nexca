import { SECTIONS_API_URL } from '@/config/apiConstants';
import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import EditSectionForm from '../../../forms/EditSectionForm';

const EditAdminSections = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(SECTIONS_API_URL, params.id);

   return <EditSectionForm data={updateData} />;
};

export default EditAdminSections;
