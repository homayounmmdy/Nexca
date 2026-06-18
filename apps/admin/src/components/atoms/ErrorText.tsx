import React, { JSX } from 'react';

/**
 * A simple, reusable component for displaying error messages.
 *
 * Renders a paragraph element styled with consistent error text appearance:
 * centered, bold, and in red (`text-red-600`) with vertical margin for spacing.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The error message content to display (e.g., string or JSX).
 *
 * @example
 * <ErrorText>Invalid email address</ErrorText>
 *
 * @returns {JSX.Element} The styled error message paragraph.
 */

const ErrorText = ({
   children,
}: {
   children: React.ReactNode;
}): JSX.Element => {
   return <p className="my-3 text-center font-bold text-red-600">{children}</p>;
};

export default ErrorText;
