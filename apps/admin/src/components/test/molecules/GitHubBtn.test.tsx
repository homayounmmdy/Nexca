import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { GitHubBtn } from '@/components/molecules';
import SiteConfig from '@/config/site';

describe('GitHubBtn', () => {
   it('should render the correct link with default props', () => {
      render(<GitHubBtn />);
      const btnLink = screen.getByTestId('github-btn-link');

      expect(btnLink).toHaveAttribute('href', SiteConfig.github);
      expect(btnLink).toHaveAttribute('rel', 'nofollow noopener noreferrer');
      expect(btnLink).toHaveAttribute(
         'aria-label',
         'Visit GitHub profile or repository'
      );
      expect(btnLink).toHaveAttribute('target', '_blank');
      expect(btnLink).toHaveAttribute('title', 'GitHub');
   });

   it('should render the button with correct content and type', () => {
      render(<GitHubBtn />);

      const button = screen.getByRole('button');
      const btnText = screen.getByTestId('github-btn-text');
      const githubIcon = screen.getByLabelText(/GitHub/i);
      const starIcon = screen.getByTestId('github-star-icon');

      expect(button).toHaveAttribute('type', 'button');
      expect(btnText).toBeInTheDocument();
      expect(btnText).toHaveTextContent('GitHub');
      expect(githubIcon).toBeInTheDocument();
      expect(starIcon).toBeInTheDocument();
   });

   it('should use custom link when provided', () => {
      const customUrl = 'https://github.com/example/repo';
      render(<GitHubBtn link={customUrl} />);
      const btnLink = screen.getByTestId('github-btn-link');

      expect(btnLink).toHaveAttribute('href', customUrl);
   });

   it('should apply custom className to the link when aStyle is provided', () => {
      const customClass = 'custom-class';
      render(<GitHubBtn aStyle={customClass} />);
      const btnLink = screen.getByTestId('github-btn-link');

      expect(btnLink).toHaveClass(customClass);
   });

   it('should combine default and custom props correctly', () => {
      const customClass = 'custom-class';
      const customLink = 'https://github.com/test/repo';
      render(<GitHubBtn link={customLink} aStyle={customClass} />);
      const btnLink = screen.getByTestId('github-btn-link');

      expect(btnLink).toHaveAttribute('href', customLink);
      expect(btnLink).toHaveClass(customClass);
      expect(btnLink).toHaveAttribute('rel', 'nofollow noopener noreferrer');
      expect(btnLink).toHaveAttribute(
         'aria-label',
         'Visit GitHub profile or repository'
      );
      expect(btnLink).toHaveAttribute('target', '_blank');
      expect(btnLink).toHaveAttribute('title', 'GitHub');
   });
});
