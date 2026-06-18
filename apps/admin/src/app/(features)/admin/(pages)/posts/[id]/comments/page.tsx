'use client';
import Comment from '@/app/(pages)/posts/[id]/components/Comment';
import { ErrorText, Spinner } from '@/components/atoms';
import { COMMENTS_API_URL } from '@/config/apiConstants';
import { COMMENTS_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { CommentsCashType } from '@/types/CashTypes';
import { GetIdOfPost } from '@/util/Util';

const PostCommentsPage = () => {
   const { data, loading } = useFetch(COMMENTS_KEY, COMMENTS_API_URL);
   const postId = GetIdOfPost();
   const comments = data?.filter((item: any) => item.postId == postId);

   if (loading) {
      return <Spinner />;
   }
   return (
      <div>
         {comments?.length > 0 ? (
            comments?.map((comment: CommentsCashType) => (
               <Comment comment={comment} key={comment._id} />
            ))
         ) : (
            <ErrorText>This post has no comments yet</ErrorText>
         )}
      </div>
   );
};

export default PostCommentsPage;
