import React from 'react';
import { render, screen } from '@testing-library/react';
import  BannerTitle  from '../BannerTitle';

describe('BannerTitle component', () => {
   it('should renders all the component correctly', () => {
      render(<BannerTitle />);

      // Check if the main text elements are present
      expect(screen.getByText('Your')).toBeInTheDocument();
      expect(screen.getByText('lovely')).toBeInTheDocument();
      expect(screen.getByText('Admin panel')).toBeInTheDocument();

      // Check if the icon is exist
      expect(screen.getByTestId('banner-title-icon')).toBeInTheDocument();
   });
});
