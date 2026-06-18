import { templatesData } from '../tempaltes';

describe('templates Data ', () => {
   it('should be an array', () => {
      expect(Array.isArray(templatesData)).toBe(true);
   });

   it('should be contain 5 template objects', () => {
      expect(templatesData).toHaveLength(5);
   });

   it('should have unique secid values', () => {
      const secids = templatesData.map((t) => t.secid);
      const uniqueSecids = new Set(secids);
      expect(uniqueSecids.size).toBe(secids.length);
   });

   it('should have the first template as default', () => {
      expect(templatesData[0].secid).toBe('1');
      expect(templatesData[0].name).toBe('default');
   });
});
