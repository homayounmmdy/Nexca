'use client';
import React from 'react';
import RouteConfig from '../../config/RouteConfig';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { Button } from '../atoms';

/**
 * A navigation toggle component that conditionally renders a link to either the admin dashboard
 * or the settings page, based on the current route.
 *
 * - When the user is on the settings page (`/admin/settings`), it displays a "Home" icon linking back to the admin dashboard.
 * - Otherwise, it displays a "Settings" icon linking to the settings page.
 *
 * This component is designed for use in the admin section of the application and relies on
 * `next/navigation`'s `usePathname` hook to determine the current route.
 *
 * @component
 * @example
 * ```tsx
 * <GoToAdminOrSettings />
 * ```
 *
 * @returns {JSX.Element} A clickable button wrapped in a Next.js `Link` that toggles between admin and settings views.
 */
const GoToAdminOrSettings: React.FC = (): JSX.Element => {
   const pathname = usePathname();

   if (pathname === RouteConfig.admin.settings.base) {
      return (
         <Link
            href={RouteConfig.admin.base}
            title="admin"
            aria-label="Link to admin page"
         >
            <Button>
               <FaHome data-testid="homeIcon" />
            </Button>
         </Link>
      );
   } else {
      return (
         <Link
            href={RouteConfig.admin.settings.base}
            title="setting"
            aria-label="Link to setting page"
         >
            <Button>
               <IoMdSettings data-testid="settingIcon" />
            </Button>
         </Link>
      );
   }
};

export default GoToAdminOrSettings;
