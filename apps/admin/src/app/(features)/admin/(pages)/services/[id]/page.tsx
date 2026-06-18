import { SERVICES_API_URL } from '@/config/apiConstants';
import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import EditServicesForm from '../../../forms/EditServicesForm';

const EditAdminServices = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(SERVICES_API_URL, params.id);

   return <EditServicesForm data={updateData} />;
};

export default EditAdminServices;
