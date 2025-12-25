import { AllowedColors } from './AllowedOptions';
import { JSX } from 'react';

/**
 * Props for the custom Button component.
 */
export type ButtonType = {
   /**
    * Predefined button color style.
    *
    * Valid values: `'btn-primary'`, `'btn-secondary'`, ..., `'btn-link'`, or `null`.
    * If `null` or omitted, defaults to `'btn-primary'`.
    */
   color?: `btn-${AllowedColors}` | null;

   /**
    * Content to render inside the button (text, icons, etc.).
    */
   children: React.ReactNode;

   /**
    * If `true`, skips the default `btn` and color utility classes.
    * Useful when applying fully custom styles via `className`.
    * @default false
    */
   removeDefaultStyle?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type InputType = {
   color?: `input-${AllowedColors}`;
   defaultChecked?: boolean;
   label?: string;
   style?: string;
   checked?: boolean;
   icon?: JSX.Element;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaType = {
   color: `textarea-${AllowedColors}` | null;
   label?: string;
   style?: string;
   icon?: JSX.Element;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
