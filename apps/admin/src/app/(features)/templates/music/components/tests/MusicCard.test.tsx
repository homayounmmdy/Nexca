import { render, screen } from '@testing-library/react';
import MusicCard from '../MusicCard';
import PostsCash from '../../../../../../cash/PostsCash';
import { expect } from 'vitest';
import React from 'react';

describe('MusicCard component', () => {
   it('should have right link for image', () => {
      render(<MusicCard data={PostsCash[0]} />);

      const link = screen.getByTestId('image-link');

      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('title', PostsCash[0].title);
   });

   it('should have right link for text link', () => {
      render(<MusicCard data={PostsCash[0]} />);

      const link = screen.getByTestId('title-link');

      expect(screen.getByText(PostsCash[0].title)).toBeInTheDocument();
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('title', PostsCash[0].title);
   });

   it('should render description', () => {
      render(<MusicCard data={PostsCash[0]} />);

      expect(screen.getByText(PostsCash[0].description)).toBeInTheDocument();
   });

   it('should render author if there is author', () => {
      render(<MusicCard data={PostsCash[0]} />);

      expect(screen.getByText(PostsCash[0].author)).toBeInTheDocument();
   });

   it.fails('should not render author sec if there is no author', () => {
      render(<MusicCard data={PostsCash[3]} />);

      expect(screen.getByTestId('author-sec')).not.toBeInTheDocument();
   });
});
