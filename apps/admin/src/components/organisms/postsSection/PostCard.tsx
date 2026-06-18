import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post }: { post: any }) => {
   const postLink = post.link
      ? post.link
      : postLinkGenerator(post._id, post.title);
   return (
      <>
         <article className="card h-full rounded-xl bg-base-100 shadow-xl transition-transform duration-500 ease-in-out md:hover:scale-105">
            <Link href={postLink}>
               <figure className="px-5 pt-5">
                  <Image
                     src={!post.imgurl ? '/static/Image/logo.jpg' : post.imgurl}
                     alt=""
                     width={662.172}
                     height={372.469}
                     loading="lazy"
                     className="aspect-video rounded-xl bg-gray-600 object-cover"
                  />
               </figure>
               <section className="card-body items-center p-5 text-center">
                  <h2 className="card-title">{post.title.slice(0, 100)}</h2>
                  <p>{post.description.slice(0, 60)}</p>
               </section>
            </Link>
         </article>
      </>
   );
};

export default PostCard;
