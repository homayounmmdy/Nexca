import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import { SE_MAP_DATA } from '@/config/maps';
import SEMap from '@/app/(features)/maps/(maps)/SEMap';

describe('Sweden Map', () => {
   const activeProvinceId = '1';
   it.each(SE_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<SEMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<SEMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
