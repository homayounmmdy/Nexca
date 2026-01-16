import { GL_MAP_DATA } from '../../../../../config/maps';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import GLMap from '../../(maps)/GLMap';

describe('Greenland Map', () => {
   const activeProvinceId = '4';
   it.each(GL_MAP_DATA)('all province should valid items', ({ secid }) => {
      const provinceID = `province-${secid}`;

      render(<GLMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(provinceID);

      expect(id).toHaveClass('sm_state provinceSec');
      expect(id).toHaveAttribute('id', provinceID);
   });

   it('should have different style for active province', () => {
      render(<GLMap setActiveProvinceId={activeProvinceId} />);

      const id = screen.getByTestId(`province-${activeProvinceId}`);

      expect(id).toHaveClass('activeProvince');
   });
});
