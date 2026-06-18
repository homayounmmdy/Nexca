import { PriceData } from '../../data/PriceData';

describe('Price Item Data', () => {
   it('should have the correct structure and length', () => {
      expect(Array.isArray(PriceData)).toBe(true);
      expect(PriceData).toHaveLength(3);
   });

   it('should have valid properties for each price item', () => {
      PriceData.forEach((item) => {
         expect(item).toHaveProperty('id');
         expect(item).toHaveProperty('special');
         expect(item).toHaveProperty('titr');
         expect(item).toHaveProperty('description');
         expect(item).toHaveProperty('features');

         expect(typeof item.id).toBe('number');
         expect(typeof item.special).toBe('boolean');
         expect(typeof item.titr).toBe('string');
         expect(typeof item.description).toBe('string');
         expect(Array.isArray(item.features)).toBe(true);
      });
   });

   it('should have valid features structure for each price item', () => {
      PriceData.forEach((item) => {
         item.features.forEach((feature) => {
            expect(feature).toHaveProperty('id');
            expect(feature).toHaveProperty('name');
            expect(feature).toHaveProperty('mark');

            expect(typeof feature.id).toBe('number');
            expect(typeof feature.name).toBe('string');
            expect(typeof feature.mark).toBe('boolean');
         });
      });
   });

   it('should have the correct pricing tiers', () => {
      const expectedTiers = ['Starter', 'Professional', 'Enterprise'];
      const actualTiers = PriceData.map((item) => item.titr);
      expect(actualTiers).toEqual(expectedTiers);
   });

   it('should have Professional as the only special tier', () => {
      const professionalItem = PriceData.find(
         (item) => item.titr === 'Professional'
      );
      const nonProfessionalItems = PriceData.filter(
         (item) => item.titr !== 'Professional'
      );

      expect(professionalItem?.special).toBe(true);
      nonProfessionalItems.forEach((item) => {
         expect(item.special).toBe(false);
      });
   });
});
