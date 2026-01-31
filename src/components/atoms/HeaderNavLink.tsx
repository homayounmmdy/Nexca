'use client';
import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderModeType } from '@/types/entities';

interface Props {
   name: string;
   href: string;
   type?: HeaderModeType;
}

const HeaderNavLink = ({ name, href, type = 'desktop' }: Props) => {
   const pathname = usePathname();
   const DesktopClasses = classNames({
      'rounded-xl border-2 border-base-100 hover:bg-indigo-700 hover:text-white transition-colors ease-in-out': true,
      'bg-indigo-700 text-white': pathname == href,
   });

   const MobileClasses = classNames({
      'block w-full border-2 rounded-xl border-indigo-700 text-center p-2': true,
      'bg-indigo-700 text-white': pathname === href,
   });
   return (
      <Link
         href={href}
         title={name}
         className={type === 'desktop' ? DesktopClasses : MobileClasses}
      >
         {name}
      </Link>
   );
};

export default HeaderNavLink;
