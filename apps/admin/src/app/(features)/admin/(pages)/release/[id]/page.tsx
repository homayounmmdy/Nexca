import { RELEASE_API_URL } from '@/config/apiConstants';
import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import EditReleaseForm from '../../../forms/EditReleaseForm';

const EditAdminRelease = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(RELEASE_API_URL, params.id);

   return <EditReleaseForm data={updateData} />;
};

export default EditAdminRelease;
