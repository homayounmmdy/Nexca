import { AL_MAP_DATA } from '../../../../../config/maps';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import ALMap from '../../(maps)/ALMap';

describe('Albania Map', () => {
   it.each(AL_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<ALMap setActiveProvinceId={'11'} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<ALMap setActiveProvinceId={'11'} />);

      const id = screen.getByTestId('province-11');

      expect(id).toHaveClass('activeProvince');
   });
});
