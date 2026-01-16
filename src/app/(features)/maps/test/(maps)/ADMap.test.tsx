import { AD_MAP_DATA } from '../../../../../config/maps';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import ADMap from '../../(maps)/ADMap';

describe('Andorra Map', () => {
   it.each(AD_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<ADMap setActiveProvinceId={'7'} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<ADMap setActiveProvinceId={'7'} />);

      const id = screen.getByTestId('province-7');

      expect(id).toHaveClass('activeProvince');
   });
});
