import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';

const FooterMedia: React.FC = () => {
   return (
      <div className="flex gap-3 sm:justify-center">
         {FooterMediaData.map((item) => {
            const LinkIcon = item.icon;
            return (
               <Link
                  title={item.title}
                  href={item.href}
                  key={item.title}
                  aria-label={`Link of ${item.title}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-full bg-base-200 shadow-xl hover:shadow-2xl"
               >
                  <LinkIcon size={20} className="group-hover:text-indigo-500" />
               </Link>
            );
         })}
      </div>
   );
};

export default FooterMedia;

const FooterMediaData = [
   {
      title: 'Github',
      href: 'https://github.com/homayounmmdy',
      icon: LuGithub,
   },
   {
      title: 'Dev community',
      href: 'https://dev.to/homayounmmdy',
      icon: FaDev,
   },
   {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/homayounmmdy',
      icon: FaLinkedinIn,
   },
];
