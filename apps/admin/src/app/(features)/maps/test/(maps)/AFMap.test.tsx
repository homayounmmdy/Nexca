import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import { AF_MAP_DATA } from '@/config/maps';
import AFMap from '@/app/(features)/maps/(maps)/AFMap';

describe('Afghanistan Map', () => {
   const activeProvinceId = '14';

   it.each(AF_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<AFMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<AFMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
