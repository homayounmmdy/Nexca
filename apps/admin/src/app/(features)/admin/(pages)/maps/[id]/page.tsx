import { MAPS_API_URL } from '@/config/apiConstants';
import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import EditMapsForm from '../../../forms/EditMapsForm';

const EditAdminPosts = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(MAPS_API_URL, params.id);

   return <EditMapsForm post={updateData} />;
};

export default EditAdminPosts;
