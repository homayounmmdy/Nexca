import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Props for the PostItem component.
 */
interface PostItemType {
   /** Unique identifier for the post. */
   _id: string;
   /** Title of the post, displayed prominently. */
   title: string;
   /** Brief description of the post, truncated to 3 lines. */
   description: string;
   /** URL to the post's featured image. Falls back to a default logo if missing. */
   imgurl: string;
   /** ISO-formatted creation date string (optional). Used in the footer. */
   createdAt?: string;
   /** Custom link for the post (optional). If omitted, a link is auto-generated. */
   link?: string;
   /** Author name displayed in the footer (optional). Defaults to 'unknown'. */
   author?: string;
   /**
    * Controls visibility of the post footer.
    * - If `true`: footer is shown.
    * - If `false` or omitted: footer is hidden.
    * @default false
    */
   postFooter?: boolean;
}

/**
 * A reusable card component for displaying a single post.
 *
 * Features:
 * - Responsive image with lazy loading
 * - Auto-generated or custom post link
 * - Hover scaling effect on larger screens
 * - Optional footer displaying creation date and author
 *
 *
 * @param {Object} props - The component props.
 * @param {PostItemType} props.post - Post data to render.
 * @returns {JSX.Element} The rendered post card.
 *
 * @example
 * <PostItem post={{
 *   _id: '123',
 *   title: 'Sample Post',
 *   description: 'This is a sample post.',
 *   imgurl: '/image.jpg',
 *   postFooter: true,
 *   createdAt: '2023-10-05T12:00:00Z',
 *   author: 'Jane Doe'
 * }} />
 */

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
