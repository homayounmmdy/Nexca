import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import ADMap from '@/app/(features)/maps/(maps)/ADMap';
import { AD_MAP_DATA } from '@/config/maps';

describe('Andorra Map', () => {
   const activeProvinceId = '7';
   it.each(AD_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<ADMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<ADMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
