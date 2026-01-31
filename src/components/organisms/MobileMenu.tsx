'use client';
import { GitHubBtn, MenuChildren } from '@/components/molecules';
import { HeaderMenuConfigType } from '@/types/entities';
import { useState } from 'react';
import { HeaderNavLink } from '../atoms';
import MapMenu from './MapMenu';
import ServicesMenu from './ServicesMenu';

const MobileMenu = ({ nav }: { nav: HeaderMenuConfigType[] }) => {
   const [activeId, setActiveId] = useState<number | null>(null);

   const toggleItem = (id: number) => {
      setActiveId(activeId === id ? null : id);
   };

   return (
      <nav className="fixed left-0 bg-base-200 top-[80px] z-50 mx-auto w-[90%] sm:w-[70%] md:w-[60%] h-full border-2 border-indigo-700 lg:hidden">
         <ul className="my-3 h-screen overflow-y-auto flex flex-col items-center gap-4 bg-inherit p-2  lg:hidden">
            {nav?.map((item) => {
               return (
                  <li
                     key={`mobile_menu_item_${item.id}`}
                     onClick={() => item.children && toggleItem(item.id)}
                     className="mx-1 w-3/4"
                  >
                     <HeaderNavLink
                        name={item.name}
                        href={item.link}
                        type="mobile"
                     />
                     {item.children && (
                        <MenuChildren
                           type="mobile"
                           id={item.id}
                           active={activeId}
                        >
                           {item.children}
                        </MenuChildren>
                     )}
                  </li>
               );
            })}

            <ServicesMenu type="mobile" />
            <MapMenu type="mobile" />
            <li
               className="flex items-center gap-3"
               key={`mobile_menu_item_starter`}
            >
               <GitHubBtn />
            </li>
         </ul>
      </nav>
   );
};

export default MobileMenu;
