import React from 'react';
import { ButtonType } from '@/types/FormFiledType';

/**
 * A customizable button component that supports predefined color styles
 * and optional removal of default styling.
 *
 * The component renders a standard HTML `<button>` element with utility classes
 * for styling, commonly used in UI libraries such as Tailwind CSS and DaisyUI.
 * By default, it applies a base `btn` class along with a color variant class
 * (e.g., `btn-primary`, `btn-success`). The `removeDefaultStyle` prop allows
 * bypassing these defaults for fully custom styling.
 *
 * @component
 * @example
 * // Basic usage with default primary style
 * <Button>Click me</Button>
 *
 * @example
 * // Using a different color variant
 * <Button color="btn-success">Save</Button>
 *
 * @example
 * // Removing default styles for custom CSS
 * <Button removeDefaultStyle className="my-custom-btn">Custom</Button>
 *
 * @param {React.ReactNode} children - The content to render inside the button (e.g., text, icons).
 * @param {`btn-${AllowedColors}` | null} [color='btn-primary'] - The predefined button style class.
 *   Must be one of the supported variants: `'btn-primary'`, `'btn-secondary'`, `'btn-neutral'`,
 *   `'btn-accent'`, `'btn-info'`, `'btn-success'`, `'btn-warning'`, `'btn-error'`, `'btn-ghost'`,
 *   `'btn-link'`, or `null`. If `null` or `'btn-null'`, no color class is applied.
 * @param {string} [className] - Additional CSS classes to apply to the button.
 * @param {boolean} [removeDefaultStyle=false] - If `true`, skips the default `btn` and color classes,
 *   allowing complete control over styling via `className`.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} rest - All standard HTML button attributes
 *   (e.g., `onClick`, `disabled`, `type`, `id`, etc.) are passed through to the underlying element.
 *
 * @returns {JSX.Element} A styled or unstyled `<button>` element based on the provided props.
 */

const Button: React.FC<ButtonType> = ({
   children,
   color = 'btn-primary',
   className,
   removeDefaultStyle = false,
   ...rest
}) => {
   return (
      <button
         className={
            removeDefaultStyle
               ? ` ${className}`
               : `btn ${color === 'btn-null' ? '' : color} ${className}`
         }
         {...rest}
      >
         {children}
      </button>
   );
};

export default Button;
