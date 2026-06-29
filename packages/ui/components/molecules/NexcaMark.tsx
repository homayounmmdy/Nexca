import React from 'react';
import { PiSealCheckFill } from 'react-icons/pi';

interface Props {
   master: boolean;
}

/**
 * Displays a verified badge (seal icon) indicating content authored by "Nexca".
 *
 * This component conditionally renders a clickable seal icon only when the `master` prop is `true`.
 * The icon is wrapped in a Next.js `<Link>` and includes accessibility attributes.
 * Intended for use as an authorship or authenticity indicator on posts or content blocks.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.master - If `true`, renders the verified seal; otherwise, renders nothing.
 *
 * @example
 * ```tsx
 * <NexcaMark master={true} />
 * ```
 *
 * @returns {React.JSX.Element | null} A linked verified seal icon if `master` is true; otherwise, `null`.
 */

const NexcaMark: React.FC<Props> = ({ master }: Props): React.JSX.Element | null => {
   if (!master) return null;
   return (
      <span
         role="img"
         aria-label="Verified content by Nexca"
         title="This content was written by Nexca"
      >
         <PiSealCheckFill data-testid="Icon" size={32} color="#6366F1" />
      </span>
   );
};

export default NexcaMark;
