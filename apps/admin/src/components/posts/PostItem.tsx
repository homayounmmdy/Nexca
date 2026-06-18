import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Props for the PostItem component.
 */
export interface PostItemType {
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
   /**
    * Disables all interactive links in the post card.
    * - If `true`: replaces `<Link>` elements with non-interactive `<div>` wrappers.
    *   No navigation occurs, and link-specific styling (e.g., hover effects on text) is omitted.
    * - If `false` or omitted: renders clickable links with normal behavior.
    * @default false
    */
   disableLinks?: boolean;
   /**
    * Disables the hover scale animation on the card.
    * - If `true`: the card will not scale on hover (removes `md:hover:scale-105`).
    * - If `false` or omitted: hover scaling is enabled.
    * @default false
    */
   disableHoverEffect?: boolean;
}

/**
 * A reusable card component for displaying a single post.
 *
 * Features:
 * - Responsive image with lazy loading
 * - Auto-generated or custom post link
 * - Optional hover scaling effect on larger screens (disabled via `disableHoverEffect`)
 * - Optional link interactivity (disabled via `disableLinks`)
 * - Link-specific hover styles (e.g., title color change) only applied when links are enabled
 * - Optional footer with date and author
 *
 * @param props - The component props.
 * @param props.post - Post data to render.
 * @returns The rendered post card as a JSX element.
 *
 * @example
 * ```tsx
 * <PostItem
 *   post={{
 *     _id: '123',
 *     title: 'Sample Post',
 *     description: 'This is a sample post.',
 *     imgurl: '/image.jpg',
 *     postFooter: true,
 *     createdAt: '2023-10-05T12:00:00Z',
 *     author: 'Jane Doe',
 *     disableLinks: false,
 *     disableHoverEffect: false,
 *   }}
 * />
 * ```
 */
const PostItem = ({ post }: { post: PostItemType }) => {
   const postLink = post.link || postLinkGenerator(post._id, post.title);

   /**
    * Conditionally renders a Next.js `<Link>` or a plain `<div>`.
    */
   const LinkWrapper = ({
      children,
      className = '',
      linkClassName = '',
   }: {
      children: React.ReactNode;
      className?: string;
      linkClassName?: string;
   }) => {
      if (post.disableLinks) {
         return <div className={className}>{children}</div>;
      }
      return (
         <Link
            href={postLink}
            title={post.title}
            className={`${className} ${linkClassName}`.trim()}
         >
            {children}
         </Link>
      );
   };

   // Build dynamic card classes
   const cardClasses = [
      'group',
      'card',
      'h-full',
      'rounded-xl',
      'bg-base-300',
      'shadow-xl',
      ...(post.disableHoverEffect
         ? []
         : [
              'ease-in-out',
              'duration-500',
              'transition-transform',
              'md:hover:scale-105',
           ]),
   ].join(' ');

   return (
      <div className={cardClasses}>
         <figure>
            <LinkWrapper className="block">
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
            </LinkWrapper>
         </figure>
         <div className="card-body">
            <LinkWrapper
               className="card-title line-clamp-2"
               linkClassName="group-hover:text-indigo-700"
            >
               {post.title}
            </LinkWrapper>
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
                  <span>{post.author || 'unknown'}</span>
               </div>
            )}
         </div>
      </div>
   );
};

export default PostItem;
