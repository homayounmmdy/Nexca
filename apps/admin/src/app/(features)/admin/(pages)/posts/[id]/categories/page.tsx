'use client';
import { ErrorText, Spinner } from '@/components/atoms';
import { Button } from '@/components/atoms';
import { POST_API_URL } from '@/config/apiConstants';
import useSinglePost from '@/hooks/useSinglePost';
import { CategoryType } from '@/types/CashTypes';
import FormHandler from '@/util/handler/FormHandler';
import { checkMaster, GetIdOfPost } from '@/util/Util';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import RouteConfig from '@/config/RouteConfig';
import CategoriesForm from '@/app/(features)/admin/forms/CategoriesForm';
import CategoryList from '@/app/(features)/admin/components/CategoryList';

const PostCategories = () => {
   const postId = GetIdOfPost();
   const { data: post, isLoading } = useSinglePost(postId);
   let master = checkMaster();
   const router = useRouter();

   const startingTicketData = {
      categories: post?.categories ?? [],
      masterEditor: master ? true : false,
   };

   const [formData, setFormData] = useState(startingTicketData);
   const handler = new FormHandler(setFormData, POST_API_URL, router);
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
      handler.submit(
         e,
         formData,
         post._id,
         `${RouteConfig.admin.posts.base}/${post._id}/categories`
      );
   if (isLoading) {
      return <Spinner />;
   }

   return (
      <>
         <form method="post" onSubmit={handleSubmit}>
            <CategoriesForm handler={handler} />
            <div className="flex w-full justify-center">
               <Button
                  type="submit"
                  color="btn-primary"
                  aria-label={'Save'}
                  className="btn-active mt-3"
               >
                  Save the changes
               </Button>
            </div>
         </form>
         {formData.categories.length > 0 ? (
            <div className="mt-2 flex flex-col gap-2">
               <h4>Categories</h4>
               {formData.categories.map((category: CategoryType) => (
                  <CategoryList
                     key={category.id}
                     category={category}
                     onChange={handler.trakeChange}
                     onRemove={handler.removeCategory}
                  />
               ))}
            </div>
         ) : (
            <ErrorText>This post has no categories yet</ErrorText>
         )}
      </>
   );
};

export default PostCategories;
