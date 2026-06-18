import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import { IMG_ADV_API_URL } from '@/config/apiConstants';
import EditAdvImgForm from '@/app/(features)/admin/forms/EditAdvImgForm';

const EditAdminTextAdv = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(IMG_ADV_API_URL, params.id);

   return <EditAdvImgForm data={updateData} />;
};

export default EditAdminTextAdv;
