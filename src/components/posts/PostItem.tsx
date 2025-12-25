import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';

interface PostItemType {
   _id: string;
   title: string;
   description: string;
   imgurl: string;
   createdAt?: string;
   link?: string;
   author?: string;
   postFooter?: boolean;
}

const PostItem = ({ post }: { post: PostItemType }) => {
   const postLink = post.link
      ? post.link
      : postLinkGenerator(post._id, post.title);
   return (
      <div className="group card h-full rounded-xl bg-base-300 shadow-xl transition-transform duration-500 ease-in-out md:hover:scale-105">
         <figure>
            <Link href={postLink} className="block">
               <div className="relative">
                  <Image
                     src={post.imgurl || '/static/Image/logo.jpg'}
                     alt={post.title}
                     width={662.172}
                     height={372.469}
                     className="aspect-video rounded-xl bg-gray-600 object-cover"
                     loading="lazy"
                  />
               </div>
            </Link>
         </figure>
         <div className="card-body">
            <Link
               href={postLink}
               title={post.title}
               className="card-title group-hover:text-indigo-700 line-clamp-2"
            >
               {post.title}
            </Link>
            <p className="line-clamp-3">{post.description}</p>
            {post.postFooter && (
               <div className="card-actions justify-between">
                  <span>
                     {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString('en-US', {
                             month: 'short',
                             day: 'numeric',
                          })
                        : '2 hours ago'}
                  </span>
                  <span>{post.author ? post.author : 'unknown'}</span>
               </div>
            )}
         </div>
      </div>
   );
};

export default PostItem;
