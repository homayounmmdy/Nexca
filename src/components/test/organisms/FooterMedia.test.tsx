import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterMedia from '../../organisms/FooterMedia';

describe('FooterMedia', () => {
   it('renders the component with all social media links', () => {
      render(<FooterMedia />);

      // Check if all social media links are rendered with correct hrefs
      const socialLinks = [
         {
            href: 'https://github.com/homayounmmdy',
            ariaLabel: 'Link of Github',
         },
         {
            href: 'https://dev.to/homayounmmdy',
            ariaLabel: 'Link of Dev community',
         },
         {
            href: 'https://www.linkedin.com/in/homayounmmdy',
            ariaLabel: 'Link of Linkedin',
         },
      ];

      socialLinks.forEach(({ href, ariaLabel }) => {
         const link = screen.getByLabelText(ariaLabel);
         expect(link).toBeInTheDocument();
         expect(link).toHaveAttribute('href', href);
      });
   });

   it('renders the correct icons for each social media link', () => {
      render(<FooterMedia />);

      // Check if all icons are rendered within their links
      const ariaLabels = [
         'Link of Github',
         'Link of Dev community',
         'Link of Linkedin',
      ];

      ariaLabels.forEach((ariaLabel) => {
         const link = screen.getByLabelText(ariaLabel);
         const icon = link.querySelector('svg');
         expect(icon).toBeInTheDocument();
      });
   });
});
