import { render, screen } from '@testing-library/react';
import React from 'react';
import BulletPost from '@/app/(features)/templates/(components)/BulletPost';
import PostsCash from '@/cash/PostsCash';

describe('BulletPost Component', () => {
   it('should have link with correct attributes', () => {
      render(<BulletPost post={PostsCash[0]} />);

      const link = screen.getByTestId('link');

      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('title');
   });
   it('should have bullet icon', () => {
      render(<BulletPost post={PostsCash[0]} />);

      const link = screen.getByTestId('link-icon');

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('aria-label', 'Bullet icon');
   });
   it('should have correct value', () => {
      render(<BulletPost post={PostsCash[1]} />);

      expect(screen.getByText(PostsCash[1].title)).toBeInTheDocument();
   });
});
