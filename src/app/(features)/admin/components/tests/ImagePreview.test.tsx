import ImagePreview from '../ImagePreview';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Image Preview Component', () => {
   const sampleData = {
      imgurl:
         'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      title: 'Image Preview',
   };
   it('should render input with correct values', () => {
      render(<ImagePreview {...sampleData} />);

      const input = screen.getByTestId('input-url');

      expect(input).toHaveAttribute('id', 'imgurl');
      expect(input).toHaveAttribute('name', 'imgurl');
      expect(input).toHaveAttribute('type', 'url');
      expect(input).toHaveAttribute('value', sampleData.imgurl);
      expect(input).toHaveAttribute('placeholder', 'Enter url of image here');
      expect(screen.getByTestId('input-icon')).toBeInTheDocument();
   });

   it('should render image with correct values', () => {
      render(<ImagePreview {...sampleData} />);

      const image = screen.getByTestId('image-preview');

      expect(image).toHaveAttribute('title', sampleData.title);
      expect(image).toHaveAttribute('alt', sampleData.title);
      expect(image).toHaveProperty(
         'src',
         'http://localhost:3000/_next/image?url=https%3A%2F%2Fimg.daisyui.com%2Fimages%2Fstock%2Fphoto-1606107557195-0e29a4b5b4aa.webp&w=1920&q=75'
      );
      expect(image).toHaveAttribute('width');
      expect(image).toHaveAttribute('height');
   });

   it('should render default image', () => {
      render(<ImagePreview title="test" />);

      const image = screen.getByTestId('image-preview');

      expect(image).toHaveAttribute(
         'src',
         '/_next/image?url=%2Fstatic%2FImage%2Flogo.jpg&w=1920&q=75'
      );
   });
});
