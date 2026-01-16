import { DE_MAP_DATA } from '../../../../../config/maps';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import DEMap from '../../(maps)/DEMap';

describe('Germany Map', () => {
   const activeProvinceId = '3';
   it.each(DE_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<DEMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<DEMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
