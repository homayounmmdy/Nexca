import React from 'react';
import { render, screen } from '@testing-library/react';
import TextHero from '../TextHero';

describe('Text Hero Component', () => {
   it('should render with title', () => {
      render(<TextHero title="AI Hub" />);

      expect(screen.getByText('AI Hub')).toBeInTheDocument();
   });
   it('should render with description', () => {
      render(<TextHero title="AI Hub" description="Test description" />);

      expect(screen.getByText('Test description')).toBeInTheDocument();
   });

   it('should render with name', () => {
      render(<TextHero title="AI Hub" name="Nexca" />);

      expect(screen.getByText('Nexca')).toBeInTheDocument();
   });
});
