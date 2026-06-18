import '@/app/tiptap.css';
import { Form } from '@/components';
import { SectionsTitle } from '@/components/atoms';
import NexcaMark from '@/components/molecules/NexcaMark';
import { MorePostsSec } from '@/components/organisms';
import MusicPlayer from '@/components/organisms/MusicPlayer';
import { COMMENTS_API_URL } from '@/config/apiConstants';
import { COMMENTS_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { CommentsCashType } from '@/types/CashTypes';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import Comment from './Comment';
import ReadPost from './ReadPost';
import RenderTags from './RenderTags';
import SharePost from './SharePost';

const NewsBody = ({ post }: { post: any }) => {
   const text = `${post?.title}. ${post?.description}`;
   const PostBody = DOMPurify.sanitize(post.body);

   const initialData = {
      postId: post._id,
      name: '',
      email: '',
      message: '',
   };
   const { data } = useFetch(COMMENTS_KEY, COMMENTS_API_URL);
   const comments = data?.filter((item: any) => item.postId == post._id);
   return (
      <>
         {post.postType === '1' && (
            <Image
               className="aspect-video w-full rounded-3xl py-3"
               src={!post.imgurl ? '/static/Image/logo.jpg' : post.imgurl}
               title={post.title}
               alt={post.title}
               width={662.172}
               height={372.469}
               loading="eager"
               fetchPriority="high"
               priority
            />
         )}
         {post.postType === '2' && (
            <MusicPlayer
               url={post.field}
               title={post.title}
               artist={post.author}
               coverImage={post.imgurl}
            />
         )}
         {post.postType === '1' && (
            <div className="flex items-center justify-between gap-3 px-3">
               <div className="flex items-center gap-2">
                  <ReadPost text={text} />
               </div>

               <NexcaMark master={post.masterEditor} />
            </div>
         )}
         <div
            className="prose mb-3 max-w-none text-lg leading-9"
            id="tiptap-style"
            dangerouslySetInnerHTML={{ __html: PostBody }}
         />
         <div className="flex flex-wrap items-center justify-between gap-3">
            {post.postType === '1' && post.author && (
               <p>
                  author : <span className="font-bold">{post.author}</span>
               </p>
            )}
            {post.source && (
               <p>
                  source : <span className="font-bold">{post.source}</span>
               </p>
            )}
         </div>
         <SharePost
            title={post.title}
            description={post.description}
            POSTURL={`/posts/${post._id}`}
         />
         {post.categories?.length > 0 && (
            <div className="my-3 flex items-center gap-3">
               <span className="font-bold">Categories:</span>
               <RenderTags post={post} />
            </div>
         )}
         <div className="mb-3">
            <Form
               buttonText="Comment"
               initialData={initialData}
               API={COMMENTS_API_URL}
            />
         </div>
         {comments?.length > 0 && (
            <div className="my-5 rounded-xl bg-indigo-600 p-5 pt-10">
               <SectionsTitle
                  bg="bg-green-400"
                  line={false}
                  className="w-full text-center p-5 font-bold text-xl !text-indigo-800"
               >
                  Comments
               </SectionsTitle>

               {comments?.map((comment: CommentsCashType) => (
                  <Comment comment={comment} key={comment._id} />
               ))}
            </div>
         )}
         <MorePostsSec />
      </>
   );
};

export default NewsBody;
