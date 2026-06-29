import { FullHoverAnimationType } from '@/types/entities';
import Link from 'next/link';
import React from 'react';

const FullHoverAnimation: React.FC<FullHoverAnimationType> = ({
   link,
   text,
}: FullHoverAnimationType) => {
   return (
      <>
         <div className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-indigo-500 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
            {link ? (
               <Link href={link} className="relative">
                  {text}
               </Link>
            ) : (
               <span className="relative">{text}</span>
            )}
         </div>
      </>
   );
};

export default FullHoverAnimation;
