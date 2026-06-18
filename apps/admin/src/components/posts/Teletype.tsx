'use client';
import { Container } from '@/components/atoms';
import { postLinkGenerator } from '@/util/ServerUtil';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

interface Props {
   data: any;
   bg?: string;
}
export default function Teletype({
   data,
   bg = 'backdrop-blur-md bg-white/30',
}: Props) {
   const [displayedText, setDisplayedText] = useState('');
   const [postIndex, setPostIndex] = useState(0);
   const [charIndex, setCharIndex] = useState(0);

   const posts = useMemo(() => {
      return data || [];
   }, [data]);

   const currentPost = posts[postIndex];
   const postLink = currentPost
      ? postLinkGenerator(currentPost._id, currentPost.title)
      : '#';

   useEffect(() => {
      if (posts.length === 0) return;

      if (charIndex <= posts[postIndex].title.slice(0, 85).length) {
         const timeout = setTimeout(() => {
            setDisplayedText(
               posts[postIndex].title.slice(0, 85).slice(0, charIndex)
            );
            setCharIndex((prev) => prev + 1);
         }, 50); // typing speed
         return () => clearTimeout(timeout);
      } else {
         // After a full title is typed, pause before moving to the next
         const pause = setTimeout(() => {
            setCharIndex(0);
            setPostIndex((prev) => (prev + 1) % posts.length);
         }, 2000); // pause between titles
         return () => clearTimeout(pause);
      }
   }, [charIndex, postIndex, posts]);

   return (
      <div
         className={`sticky top-[85px] mt-[-42px] z-10 w-full hidden lg:block  ${bg} shadow-md`}
      >
         <Container className="px-3 sm:px-4">
            <Link href={postLink} className="block">
               <div className="flex items-center justify-between h-12">
                  <div className="flex-1">
                     <h1 className="text-lg md:text-xl truncate font-medium tracking-tight transition-all  duration-300 ease-in-out hover:text-indigo-600 ">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                     </h1>
                  </div>
                  <div className="hidden md:block">
                     <div className="flex items-center">
                        <span className="text-gray-600  text-xs font-medium bg-gray-100  px-2 py-1 rounded-full">
                           {new Date().toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                           })}
                        </span>
                     </div>
                  </div>
               </div>
            </Link>
         </Container>
      </div>
   );
}
