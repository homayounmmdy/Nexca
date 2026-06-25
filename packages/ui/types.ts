import React from 'react';

type AllowedColors =
  | "primary"
  | "secondary"
  | "neutral"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost"
  | "link"
  | null;

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
