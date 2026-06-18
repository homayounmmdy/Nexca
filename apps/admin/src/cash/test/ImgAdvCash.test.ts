import { ImgAdvCashType as CashType } from '@/types/CashTypes';
import Cash from '../ImgAdvCash';

describe('Img Adv Cash', () => {
   it('should have the correct structure', () => {
      expect(Array.isArray(Cash)).toBe(true);
      expect(Cash.length).toBeGreaterThan(0);

      Cash.forEach((item: CashType) => {
         expect(item).toHaveProperty('_id');
         expect(item).toHaveProperty('advId');
         expect(item).toHaveProperty('advName');
         expect(item).toHaveProperty('imgURL');
         expect(item).toHaveProperty('body');
         expect(item).toHaveProperty('link');
         expect(item).toHaveProperty('createdAt');
         expect(item).toHaveProperty('updatedAt');
         expect(item).toHaveProperty('__v');
      });
   });

   it('should not have non-empty values', () => {
      Cash.forEach((item: CashType) => {
         expect(item.advName.trim()).not.toBe('');
         expect(item.link.trim()).not.toBe('');
         expect(item.body.trim()).not.toBe('');
      });
   });

   it('should have show valid data string for date', () => {
      Cash.forEach((item: CashType) => {
         expect(isNaN(Date.parse(item.createdAt))).toBeFalsy();
         expect(isNaN(Date.parse(item.updatedAt))).toBeFalsy();
      });
   });

   it('should have unique _id value', () => {
      const idSet = new Set(Cash.map((i) => i._id));
      expect(idSet.size).toBe(Cash.length);
   });
});
