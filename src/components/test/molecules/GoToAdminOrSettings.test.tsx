import React from 'react';
import { usePathname } from 'next/navigation';
import GoToAdminOrSettings from '../../molecules/GoToAdminOrSettings';
import { render, screen } from '@testing-library/react';
import RouteConfig from '../../../config/RouteConfig';
import { IoMdSettings } from 'react-icons/io';
import { expect } from 'vitest';

// Mock the usePathname hook
vi.mock('next/navigation', () => ({
   usePathname: vi.fn(),
}));

describe('button for home and setting', () => {
   beforeEach(() => {
      // Reset the mock implementation before each test
      (usePathname as any).mockReturnValue('/admin');
   });

   afterEach(() => {
      vi.clearAllMocks(); // Clear mock calls after each test
   });

   it('should render the  setting link when user is in admin page', () => {
      render(<GoToAdminOrSettings />);
      const BtnLink = screen.getByRole('link');

      expect(BtnLink).toHaveAttribute('title', 'setting');
      expect(BtnLink).toHaveAttribute('href', RouteConfig.admin.settings.base);
      expect(BtnLink).toHaveAttribute('aria-label', 'Link to setting page');
   });

   it('should render the setting icon when user is in admin page', () => {
      render(<GoToAdminOrSettings />);

      expect(screen.getByTestId('settingIcon')).toBeInTheDocument();
      expect(screen.queryByTestId('homeIcon')).not.toBeInTheDocument();
   });

   it('should render the  home link when user is in setting page', () => {
      (usePathname as any).mockReturnValue('/admin/settings');
      render(<GoToAdminOrSettings />);
      const BtnLink = screen.getByRole('link');

      expect(BtnLink).toHaveAttribute('title', 'admin');
      expect(BtnLink).toHaveAttribute('href', RouteConfig.admin.base);
      expect(BtnLink).toHaveAttribute('aria-label', 'Link to admin page');
   });

   it('should render the home icon when user is in setting page', () => {
      (usePathname as any).mockReturnValue('/admin/settings');
      render(<GoToAdminOrSettings />);

      expect(screen.getByTestId('homeIcon')).toBeInTheDocument();
      expect(screen.queryByTestId('settingIcon')).not.toBeInTheDocument();
   });
});
