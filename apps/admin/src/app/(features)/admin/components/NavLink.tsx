'use client';
import {
   adminPages,
   EditPostPages,
   HelpPages,
   SettingsPages,
} from '@/config/adminPage';
import RouteConfig from '@/config/RouteConfig';
import { adminPagesType } from '@/types/entities';
import { GetIdOfPost } from '@/util/Util';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import MasterBtn from './MasterBtn';

const NavLink: React.FC = () => {
   const pathname = usePathname();
   const isNewPostRoute = pathname === RouteConfig.admin.posts.new;
   const isPostRoute =
      pathname?.startsWith(RouteConfig.admin.posts.base) &&
      !isNewPostRoute &&
      (pathname.split('/').length === 4 || pathname.split('/').length === 5);
   const isHelpRoute = pathname?.startsWith(RouteConfig.admin.help.base);
   const isSettingRoute = pathname?.startsWith(RouteConfig.admin.settings.base);

   // State to hold the filtered pages
   const [filteredData, setFilteredData] = useState<adminPagesType[]>([]);

   // Load toggle states from local storage on component mount
   useEffect(() => {
      const storedPages = localStorage.getItem('adminPages');
      if (storedPages) {
         // If local storage data exists, use it
         const parsedPages = JSON.parse(storedPages);
         setFilteredData(parsedPages);
      } else {
         // If no local storage data, use the default adminPages
         setFilteredData(adminPages);
      }
   }, []);

   // Determine which data to use based on the route
   let data: adminPagesType[];
   if (isPostRoute) {
      data = EditPostPages;
   } else if (isSettingRoute) {
      data = SettingsPages;
   } else if (isHelpRoute) {
      data = HelpPages;
   } else {
      data = adminPages;
   }

   // Merge local storage data with static data
   const finalData = data.map((link) => {
      const storedLink = filteredData.find(
         (storedLink) => storedLink.name === link.name
      );
      return {
         ...link,
         activate: storedLink ? storedLink.activate : link.activate,
      };
   });

   const postId = GetIdOfPost();

   return (
      <>
         <div className="block h-full w-auto grow basis-full items-center overflow-auto">
            <ul className="mb-0 flex flex-col gap-2 pl-0">
               {isPostRoute && (
                  <Link
                     className="py-2.7 ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl p-1 px-4 text-sm transition-colors hover:bg-indigo-500 hover:text-white"
                     href={RouteConfig.admin.base}
                  >
                     <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-700 bg-center stroke-0 text-center xl:p-2.5">
                        <FaHome size={24} color="#FFF" />
                     </div>
                     <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                        admin
                     </span>
                  </Link>
               )}

               {finalData
                  ?.filter((link) => link.activate) // Only show active links
                  .map((link, index) => {
                     const LinkIcon = link.icon;
                     const href = isPostRoute
                        ? `${RouteConfig.admin.posts.base}/${postId}/${link.href}`
                        : link.href;
                     return (
                        <li className="mt-0.5 w-full" key={index}>
                           {pathname === href ? (
                              <Link
                                 className="py-2.7 shadow-soft-xl ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl bg-indigo-700 p-1 px-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
                                 href={href}
                              >
                                 <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white bg-linear-to-tl from-purple-700 to-pink-500 bg-center stroke-0 text-center xl:p-2.5">
                                    <LinkIcon size={24} color="#FFF" />
                                 </div>
                                 <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                                    {link.name}
                                 </span>
                              </Link>
                           ) : (
                              <Link
                                 className="py-2.7 ease-nav-brand my-0 flex items-center whitespace-nowrap rounded-xl p-1 px-4 text-sm transition-colors hover:bg-indigo-500 hover:text-white"
                                 href={href}
                              >
                                 <div className="shadow-soft-2xl ml-2 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-700 bg-center stroke-0 text-center xl:p-2.5">
                                    <LinkIcon size={24} color="#FFF" />
                                 </div>
                                 <span className="ease-soft pointer-events-none ml-1 opacity-100 duration-300">
                                    {link.name}
                                 </span>
                              </Link>
                           )}
                        </li>
                     );
                  })}
            </ul>
            <div className="my-4 max-w-full">
               <LogoutButton />
            </div>
            <MasterBtn>Become Master Editor</MasterBtn>
         </div>
      </>
   );
};

export default NavLink;
