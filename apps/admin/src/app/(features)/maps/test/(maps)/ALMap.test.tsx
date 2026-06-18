import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import { AL_MAP_DATA } from '@/config/maps';
import ALMap from '@/app/(features)/maps/(maps)/ALMap';

describe('Albania Map', () => {
   const activeProvinceId = '11';

   it.each(AL_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<ALMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<ALMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
