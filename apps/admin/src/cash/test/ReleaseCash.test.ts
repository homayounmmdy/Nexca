import { ReleaseCashType } from '@/types/CashTypes';
import Cash from '../ReleaseCash';

describe('Release Cash', () => {
   it('should have the correct structure', () => {
      expect(Array.isArray(Cash)).toBe(true);
      expect(Cash.length).toBeGreaterThan(0);
      Cash.forEach((item: ReleaseCashType) => {
         expect(item).toHaveProperty('_id');
         expect(item).toHaveProperty('date');
         expect(item).toHaveProperty('createdAt');
         expect(item).toHaveProperty('updatedAt');
         expect(item).toHaveProperty('__v');
      });
   });
   it('should not have non-empty values', () => {
      Cash.forEach((item: ReleaseCashType) => {
         expect(item.title.trim()).not.toBe('');
      });
   });
   it('should have show valid data string for date', () => {
      Cash.forEach((item: ReleaseCashType) => {
         expect(isNaN(Date.parse(item.createdAt))).toBeFalsy();
         expect(isNaN(Date.parse(item.updatedAt))).toBeFalsy();
      });
   });
   it('should have unique _id value', () => {
      const idSet = new Set(Cash.map((i) => i._id));
      expect(idSet.size).toBe(Cash.length);
   });
});
