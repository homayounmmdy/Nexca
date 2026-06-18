import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import { DZ_MAP_DATA } from '@/config/maps';
import DZMap from '@/app/(features)/maps/(maps)/DZMap';

describe('Andorra Map', () => {
   const activeProvinceId = '4';
   it.each(DZ_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<DZMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<DZMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
