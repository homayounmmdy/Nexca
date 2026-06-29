import React from 'react';
import { TextareaType } from '../../../types';
import { render, screen } from '@testing-library/react';
import { FaUser } from 'react-icons/fa';
import  Textarea  from '../Textarea';

describe('Textarea Component', () => {
   it('should render the basic textarea with default props', () => {
      const { textareaElement } = renderComponents();

      expect(textareaElement).toHaveAttribute('id', '1');
      expect(textareaElement).toHaveAttribute('name', 'sample name');
      expect(textareaElement).toHaveAttribute('rows', '2');
      expect(textareaElement).toBeInTheDocument();
      expect(textareaElement).toBeRequired();
      expect(textareaElement).toHaveClass(
         'textarea textarea-bordered custom-style textarea-primary'
      );
   });

   it('should render textarea with icon - applying classes correctly', () => {
      const { labelElement, textareaElement } = renderComponents({
         icon: <FaUser />,
      });

      // Label should have:
      // - style prop
      // - color prop
      // - fixed classes (flex, textarea-bordered, etc.)
      expect(labelElement).toBeInTheDocument();
      expect(labelElement).toHaveClass(
         'custom-style textarea-primary textarea textarea-bordered flex items-center gap-2'
      );

      // Textarea element inside label should only have:
      // - className prop
      // - no color or textarea-bordered classes
      expect(textareaElement).toHaveClass('custom-style');
      expect(textareaElement).not.toHaveClass('textarea-primary');
      expect(textareaElement).not.toHaveClass('textarea textarea-bordered');
   });

   it('should prioritize icon over label when both are provided', () => {
      const { labelElement } = renderComponents({
         icon: <FaUser />,
         label: 'Test Label',
      });

      // Should use icon template (label gets all classes)
      expect(labelElement).toHaveClass(
         'textarea textarea-bordered flex items-center gap-2'
      );
      expect(labelElement).not.toHaveTextContent('Test Label');
   });

   it('should render bare textarea correctly when no icon or label', () => {
      const { labelElement, textareaElement } = renderComponents({
         label: undefined,
         icon: undefined,
      });

      expect(labelElement).not.toBeInTheDocument();
      // Textarea should get all classes
      expect(textareaElement).toHaveClass(
         'textarea textarea-bordered custom-style textarea-primary'
      );
   });

   it('should pass all other textarea attributes', () => {
      const { textareaElement } = renderComponents({
         disabled: true,
         readOnly: true,
         className: 'additional-class',
         rows: 5,
      });

      expect(textareaElement).toBeDisabled();
      expect(textareaElement).toHaveAttribute('readOnly');
      expect(textareaElement).toHaveClass('additional-class');
      expect(textareaElement).toHaveAttribute('rows', '5');
   });

   const renderComponents = (props: Partial<TextareaType> = {}) => {
      const defaultProps: TextareaType = {
         id: '1',
         name: 'sample name',
         style: 'custom-style',
         value: 'john',
         color: 'textarea-primary',
         label: 'label',
         placeholder: 'Enter Text',
         rows: 2,
         required: true,
         className: 'custom-style',
         'aria-label': 'textarea label',
         onChange: vi.fn(),
      };
      render(<Textarea {...defaultProps} {...props} />);
      return {
         labelElement: screen.queryByTestId('label'),
         textareaElement: screen.getByPlaceholderText('Enter Text'),
      };
   };
});
