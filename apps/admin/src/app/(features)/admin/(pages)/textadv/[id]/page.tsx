import { TEXTADV_API_URL } from '@/config/apiConstants';
import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import EditTextAdvForm from '../../../forms/EditTextAdvForm';

const EditAdminTextAdv = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(TEXTADV_API_URL, params.id);

   return <EditTextAdvForm data={updateData} />;
};

export default EditAdminTextAdv;
