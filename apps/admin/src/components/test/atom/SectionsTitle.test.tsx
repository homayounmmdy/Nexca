import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionsTitle } from '@/components/atoms';

describe('SectionsTitle component', () => {
   it('render default SectionsTitle correctly', () => {
      render(<SectionsTitle>Test</SectionsTitle>);

      const children = screen.getByText('Test');
      const line = screen.getByTestId('line');

      expect(children).toHaveClass('bg-indigo-700');
      expect(line).toBeInTheDocument();
   });

   it('should render without line', () => {
      render(<SectionsTitle line={false}>Test</SectionsTitle>);

      const line = screen.queryByTestId('line');

      expect(line).not.toBeInTheDocument();
   });

   it('should render with custom background', () => {
      render(<SectionsTitle bg="bg-red-200">Test</SectionsTitle>);

      const children = screen.getByText('Test');

      expect(children).toHaveClass('bg-red-200');
      expect(children).not.toHaveClass('bg-indigo-700');
   });

   it('should render with className', () => {
      render(<SectionsTitle className="w-full">Test</SectionsTitle>);

      const children = screen.getByText('Test');

      expect(children).toHaveClass('w-full');
   });
});
