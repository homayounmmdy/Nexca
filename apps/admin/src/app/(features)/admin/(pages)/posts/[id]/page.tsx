import { POST_API_URL } from '@/config/apiConstants';
import { SinglePagepParamsType } from '@/types/entities';
import { FetchDataForEditPage } from '@/util/ServerUtil';
import EditPostForm from '../../../forms/EditPostForm';

const EditAdminPosts = async ({
   params,
}: {
   params: SinglePagepParamsType;
}) => {
   const updateData = await FetchDataForEditPage(POST_API_URL, params.id);

   return <EditPostForm post={updateData} />;
};

export default EditAdminPosts;
