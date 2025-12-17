import React from 'react';
import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CalloutBox from '../CalloutBox';

describe('Callout Box component', () => {
   it('should renders with default title', () => {
      const title = 'Title example';

      render(<CalloutBox title={title} />);

      expect(screen.getByText(title)).toBeInTheDocument();
   });
   it('should render children correctly', () => {
      const title = 'Test Title';
      const childText = 'This is a child element';

      render(
         <CalloutBox title={title}>
            <p>{childText}</p>
         </CalloutBox>
      );

      expect(screen.getByText(childText)).toBeInTheDocument();
   });
   it('should render color default as indigo', () => {
      const title = 'Title example';

      render(<CalloutBox title={title} />);
      const calloutBox = screen.getByTestId('callout-box');
      const titleElement = screen.getByText(title);

      expect(calloutBox.className).toContain('border-l-4 border-indigo-500');
      expect(titleElement.className).toContain('text-indigo-800');
   });

   describe('color variants', () => {
      const colorCases = [
         {
            color: 'indigo',
            expectedTextClass: 'text-indigo-800',
            expectedBorderClass: 'border-indigo-500',
         },
         {
            color: 'amber',
            expectedTextClass: 'text-amber-800',
            expectedBorderClass: 'border-amber-500',
         },
         {
            color: 'rose',
            expectedTextClass: 'text-rose-800',
            expectedBorderClass: 'border-rose-500',
         },
         {
            color: 'emerald',
            expectedTextClass: 'text-emerald-800',
            expectedBorderClass: 'border-emerald-500',
         },
      ];

      it.each(colorCases)(
         'renders with $color color correctly',
         ({ color, expectedTextClass, expectedBorderClass }) => {
            const title = `${color} Title`;

            render(<CalloutBox title={title} color={color as any} />);

            const calloutBox = screen.getByTestId('callout-box');
            const titleElement = screen.getByText(title);

            expect(titleElement).toHaveClass(expectedTextClass);
            expect(calloutBox).toHaveClass(expectedBorderClass);
         }
      );
   });
});
