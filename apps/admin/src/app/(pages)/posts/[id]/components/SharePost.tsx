import { ShareMedia } from '@/config/ShareMedia';
import { SharePostType, SocialMediaType } from '@/types/entities';
import Link from 'next/link';

const SharePost = ({ POSTURL, title, description }: SharePostType) => {
   const API_URL = process.env.NEXT_PUBLIC_API_URL;

   const encodedUrl = encodeURIComponent(`${API_URL}${POSTURL}`);
   const encodedTitle = encodeURIComponent(title);
   const encodedDescription = encodeURIComponent(description);

   const socialMedia = ShareMedia(encodedUrl, encodedTitle, encodedDescription);

   return (
      <>
         <div className="my-3 flex items-center gap-1">
            <span className="pr-2 font-bold">Share :</span>
            <ul className="flex items-center gap-2">
               {socialMedia.map((media: SocialMediaType) => (
                  <li className="flex items-center gap-2" key={media.id}>
                     <Link
                        className="rounded-full border border-indigo-600 p-2 text-indigo-600 transition-all ease-in-out hover:bg-indigo-600 hover:text-white"
                        target="_blank"
                        rel="nofollow"
                        href={media.link}
                        title={`Share on ${media.name}`}
                        aria-label={`Share on ${media.name}`}
                     >
                        {media.icon}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default SharePost;
