import { SectionsConfig } from '../sections';

describe('Section Configuration', () => {
   it('each item should have the correct type structure', () => {
      SectionsConfig.forEach((item) => {
         expect(item).toHaveProperty('id');
         expect(item).toHaveProperty('activate');
      });
   });
   it('should have unique id', () => {
      const idSet = new Set(SectionsConfig.map((i) => i.id));
      expect(idSet.size).toBe(SectionsConfig.length);
   });
});
