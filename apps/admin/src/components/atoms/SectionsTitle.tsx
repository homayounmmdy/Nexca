import React from 'react';

/**
 * A reusable section title component with an optional decorative line.
 *
 * Renders a styled title badge with a customizable background color, followed
 * by a horizontal line (enabled by default). Ideal for visually separating and
 * labeling content sections in a clean, consistent way.
 *
 * @param {Object} props - The component props.
 * @param {string} props.children - The title text to display.
 * @param {string} [props.bg='bg-indigo-700'] - Tailwind CSS background color class for the title badge.
 * @param {boolean} [props.line=true] - Whether to show the trailing horizontal line after the title.
 * @param {string} [props.className=''] - Additional Tailwind CSS classes to apply to the title badge.
 *
 * @example
 * <SectionsTitle bg="bg-emerald-600" line={false}>Features</SectionsTitle>
 *
 * @returns {JSX.Element} The styled section title component.
 */

interface SectionsTitleProps {
   children: string;
   bg?: string;
   line?: boolean;
   className?: string;
}
const SectionsTitle: React.FC<SectionsTitleProps> = ({
   children,
   bg = 'bg-indigo-700',
   line = true,
   className = '',
}: SectionsTitleProps) => {
   return (
      <div className="flex items-center gap-2 mb-2 md:mb-4">
         <p
            className={`${bg} ${className} p-3 rounded-lg text-white text-nowrap text-sm md:text-lg`}
         >
            {children}
         </p>
         {line === true && (
            <div data-testid="line" className="h-0.5 w-full bg-base-300"></div>
         )}
      </div>
   );
};

export default SectionsTitle;
