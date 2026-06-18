import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorText } from '@/components/atoms';

describe('ErrorText Component', () => {
   it('renders the children correctly', () => {
      const testMessage = 'This is an error message';
      render(<ErrorText>{testMessage}</ErrorText>);

      // Check if the text is rendered
      const errorTextElement = screen.getByText(testMessage);

      expect(errorTextElement).toBeInTheDocument();
      expect(errorTextElement).toHaveTextContent(/error/i);
   });

   it('should apply the red color to text', () => {
      const testMessage = 'This is an error message';
      render(<ErrorText>{testMessage}</ErrorText>);

      const errorTextElement = screen.getByText(testMessage);
      expect(errorTextElement).toHaveClass('text-red-600');
   });

   it('renders as a <p> element', () => {
      const testMessage = 'This is an error message';
      render(<ErrorText>{testMessage}</ErrorText>);

      // Check if the element is a <p> tag
      const errorTextElement = screen.getByText(testMessage);
      expect(errorTextElement.tagName).toBe('P');
   });
});
