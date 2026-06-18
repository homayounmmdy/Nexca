import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import Link from 'next/link';
import { FaComment } from 'react-icons/fa';
import { FaCircleDot } from 'react-icons/fa6';

type LinearPostProps = PostsCashType & {
   commentCount?: number;
};

const LinearPosts = ({ post }: { post: LinearPostProps }) => {
   const postLink = postLinkGenerator(post._id, post.title);
   return (
      <li
         key={post._id}
         className="group flex cursor-pointer items-start gap-2 rounded-xl border-2 border-dotted border-gray-400 p-2 hover:border-solid hover:border-gray-900"
      >
         <div className="h-7 w-7 shrink-0">
            <FaCircleDot
               className="h-full w-full text-indigo-700"
               size={28}
               color="#4338CA"
            />
         </div>
         <Link
            className="line-clamp-2 font-semibold group-hover:text-indigo-600"
            href={postLink}
         >
            {post.commentCount && (
               <span className="mx-2 inline-flex items-center text-sm text-gray-500">
                  ({post.commentCount} <FaComment className="ml-2" />)
               </span>
            )}

            {post.title}
         </Link>
      </li>
   );
};

export default LinearPosts;
