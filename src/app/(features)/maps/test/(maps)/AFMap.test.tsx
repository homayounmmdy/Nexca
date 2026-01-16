import { AF_MAP_DATA } from '../../../../../config/maps';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import AFMap from '../../(maps)/AFMap';

describe('Afghanistan Map', () => {
   it.each(AF_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<AFMap setActiveProvinceId={'14'} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<AFMap setActiveProvinceId={'14'} />);

      const id = screen.getByTestId('province-14');

      expect(id).toHaveClass('activeProvince');
   });
});
