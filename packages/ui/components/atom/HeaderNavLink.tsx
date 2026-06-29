'use client';
import {JSX} from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderModeType } from '@/types/entities';

interface Props {
   name: string;
   href: string;
   type?: HeaderModeType;
}
/**
 * A responsive navigation link component used in the site header.
 * Adapts its styling based on the current route and display mode (desktop or mobile).
 * Highlights the active link by comparing the `href` prop with the current pathname.
 *
 * @component
 * @example
 * <HeaderNavLink name="Home" href="/" type="desktop" />
 * <HeaderNavLink name="About" href="/about" type="mobile" />
 *
 * @param {Object} props - The component props.
 * @param {string} props.name - The display text of the navigation link.
 * @param {string} props.href - The URL path the link points to. Used to determine active state.
 * @param {import('@/types/entities').HeaderModeType} [props.type='desktop'] - The display mode: 'desktop' or 'mobile'. Affects styling and layout.
 *
 * @returns {JSX.Element} A styled Next.js Link component that indicates the active route.
 */
const HeaderNavLink = ({
   name,
   href,
   type = 'desktop',
}: Props): JSX.Element => {
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
