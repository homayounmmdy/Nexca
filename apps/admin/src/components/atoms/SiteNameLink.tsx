'use client';
import React, {JSX} from 'react';
import SiteConfig from '../../config/site';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * SiteNameLink – A branded, animated link displaying the site name.
 *
 * This component renders the site's name (from `SiteConfig`) as a styled,
 * accessible, and interactive link that navigates to the homepage (`/`).
 * It includes subtle hover and tap animations using Framer Motion for enhanced UX.
 *
 * @component
 * @example
 * <SiteNameLink />
 *
 * @returns {JSX.Element} A motion-enhanced `<p>` element containing a Next.js `<Link>` to the homepage.
 */

const SiteNameLink: React.FC = (): JSX.Element => {
   return (
      <motion.p
         className="text-xl font-bold text-indigo-700 sm:text-lg md:text-2xl xl:text-3xl"
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
      >
         <Link
            href="/"
            title={SiteConfig.name}
            aria-label={`Return to ${SiteConfig.name} homepage`}
         >
            {SiteConfig.name}
         </Link>
      </motion.p>
   );
};

export default SiteNameLink;
