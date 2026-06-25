import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import  Container  from './Container';
import { describe, expect, it } from 'vitest';

describe('Container Component', () => {
   interface RenderContainerResult extends RenderResult {
      containerElement: HTMLElement;
   }

   const renderContainer = (props: {
      className?: string;
      children: React.ReactNode;
   }): RenderContainerResult => {
      const utils = render(<Container {...props} />);
      const containerElement = utils.container.firstChild as HTMLElement;
      return {
         ...utils,
         containerElement,
      };
   };

   it('renders children correctly', () => {
      const testText = 'Test Child Content';
      renderContainer({ children: <div>{testText}</div> });
      expect(screen.getByText(testText)).toBeInTheDocument();
   });

   it('applies default classes correctly', () => {
      const { containerElement } = renderContainer({
         children: <div>Test</div>,
      });

      // Basic class checks
      expect(containerElement).toHaveClass('mx-auto');
      expect(containerElement).toHaveClass('w-full');
      expect(containerElement).toHaveClass('px-4');

      // Responsive classes
      expect(containerElement.className).toMatch(/sm:max-w-xl/);
      expect(containerElement.className).toMatch(/md:max-w-2xl/);
      expect(containerElement.className).toMatch(/lg:max-w-5xl/);
      expect(containerElement.className).toMatch(/xl:max-w-7xl/);
   });

   it('merges custom className with default classes', () => {
      const customClass = 'custom-class';
      const { containerElement } = renderContainer({
         className: customClass,
         children: <div>Test</div>,
      });
      expect(containerElement).toHaveClass('mx-auto');
      expect(containerElement).toHaveClass(customClass);
   });

   it('includes only expected default classes when no className is passed', () => {
      const { containerElement } = renderContainer({
         children: <div>Test</div>,
      });

      const expectedBaseClasses = [
         'mx-auto',
         'w-full',
         'sm:max-w-xl',
         'md:max-w-2xl',
         'lg:max-w-5xl',
         'xl:max-w-7xl',
      ];

      for (const cls of expectedBaseClasses) {
         expect(containerElement.className).toContain(cls);
      }
   });
});
