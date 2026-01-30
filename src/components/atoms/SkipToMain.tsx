import React from 'react';
import Link from 'next/link';

/**
 * A "Skip to main content" accessibility link.
 *
 * This component renders a visually hidden link that becomes visible on focus,
 * allowing keyboard users to bypass repetitive navigation and jump directly
 * to the main content of the page (typically marked with `id="main"`).
 *
 * It is positioned off-screen by default (`translate-y-full`) and slides into
 * view when focused, ensuring it meets WCAG accessibility standards.
 *
 * @example
 * <SkipToMain />
 *
 * @returns {JSX.Element} The accessible skip link.
 */

export default function SkipToMain(): JSX.Element {
   return (
      <Link
         className="absolute left-0 top-0 z-[60] -translate-y-full bg-indigo-700 text-white px-4 py-2 text-white focus:translate-y-0 focus:outline-none"
         href="#main"
         aria-label="Skip to main content"
         title="Skip to main content"
      >
         Skip to main content
      </Link>
   );
}
