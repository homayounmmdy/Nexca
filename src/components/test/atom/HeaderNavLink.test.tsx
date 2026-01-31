import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HeaderNavLink from '../../atoms/HeaderNavLink';
import { usePathname } from 'next/navigation';

// Mock next/navigation
vi.mock('next/navigation', () => ({
   usePathname: vi.fn(),
}));

// Mock next/link
vi.mock('next/link', () => ({
   default: ({ children, href, title, className }: any) => (
      <a href={href} title={title} className={className}>
         {children}
      </a>
   ),
}));

describe('HeaderNavLink', () => {
   const defaultProps = {
      name: 'Home',
      href: '/home',
   };

   beforeEach(() => {
      vi.mocked(usePathname).mockReturnValue('/');
   });

   it('renders with default props', () => {
      render(<HeaderNavLink {...defaultProps} />);

      const link = screen.getByRole('link', { name: 'Home' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/home');
      expect(link).toHaveAttribute('title', 'Home');
      expect(link).toHaveTextContent('Home');
   });

   it('applies desktop classes by default', () => {
      render(<HeaderNavLink {...defaultProps} />);

      const link = screen.getByRole('link');
      expect(link).toHaveClass(
         'rounded-xl',
         'border-2',
         'border-base-100',
         'hover:bg-indigo-700',
         'hover:text-white',
         'transition-colors',
         'ease-in-out'
      );
   });

   it('applies mobile classes when type is mobile', () => {
      render(<HeaderNavLink {...defaultProps} type="mobile" />);

      const link = screen.getByRole('link');
      expect(link).toHaveClass(
         'block',
         'w-full',
         'border-2',
         'rounded-xl',
         'border-indigo-700',
         'text-center',
         'p-2'
      );
   });

   describe('active state styling', () => {
      it('applies active desktop classes when pathname matches href', () => {
         vi.mocked(usePathname).mockReturnValue('/home');

         render(<HeaderNavLink {...defaultProps} />);

         const link = screen.getByRole('link');
         expect(link).toHaveClass('bg-indigo-700', 'text-white');
      });

      it('does not apply active desktop classes when pathname does not match href', () => {
         vi.mocked(usePathname).mockReturnValue('/about');

         render(<HeaderNavLink {...defaultProps} />);

         const link = screen.getByRole('link');
         expect(link).not.toHaveClass('bg-indigo-700', 'text-white');
      });

      it('applies active mobile classes when pathname matches href', () => {
         vi.mocked(usePathname).mockReturnValue('/home');

         render(<HeaderNavLink {...defaultProps} type="mobile" />);

         const link = screen.getByRole('link');
         expect(link).toHaveClass('bg-indigo-700', 'text-white');
      });

      it('does not apply active mobile classes when pathname does not match href', () => {
         vi.mocked(usePathname).mockReturnValue('/about');

         render(<HeaderNavLink {...defaultProps} type="mobile" />);

         const link = screen.getByRole('link');
         expect(link).not.toHaveClass('bg-indigo-700', 'text-white');
      });
   });

   describe('class combinations', () => {
      it('has correct desktop classes when active', () => {
         vi.mocked(usePathname).mockReturnValue('/home');

         render(<HeaderNavLink {...defaultProps} />);

         const link = screen.getByRole('link');
         const expectedClasses = [
            'rounded-xl',
            'border-2',
            'border-base-100',
            'hover:bg-indigo-700',
            'hover:text-white',
            'transition-colors',
            'ease-in-out',
            'bg-indigo-700',
            'text-white',
         ];

         expectedClasses.forEach((className) => {
            expect(link).toHaveClass(className);
         });
      });

      it('has correct mobile classes when active', () => {
         vi.mocked(usePathname).mockReturnValue('/home');

         render(<HeaderNavLink {...defaultProps} type="mobile" />);

         const link = screen.getByRole('link');
         const expectedClasses = [
            'block',
            'w-full',
            'border-2',
            'rounded-xl',
            'border-indigo-700',
            'text-center',
            'p-2',
            'bg-indigo-700',
            'text-white',
         ];

         expectedClasses.forEach((className) => {
            expect(link).toHaveClass(className);
         });
      });
   });

   it('handles different href and name values', () => {
      const props = {
         name: 'About Us',
         href: '/about',
      };

      render(<HeaderNavLink {...props} />);

      const link = screen.getByRole('link', { name: 'About Us' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
      expect(link).toHaveAttribute('title', 'About Us');
   });

   it('matches snapshot for desktop type', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      const { container } = render(<HeaderNavLink {...defaultProps} />);
      expect(container.firstChild).toMatchSnapshot();
   });

   it('matches snapshot for mobile type', () => {
      vi.mocked(usePathname).mockReturnValue('/');

      const { container } = render(
         <HeaderNavLink {...defaultProps} type="mobile" />
      );
      expect(container.firstChild).toMatchSnapshot();
   });

   it('matches snapshot for active desktop state', () => {
      vi.mocked(usePathname).mockReturnValue('/home');

      const { container } = render(<HeaderNavLink {...defaultProps} />);
      expect(container.firstChild).toMatchSnapshot();
   });
});
