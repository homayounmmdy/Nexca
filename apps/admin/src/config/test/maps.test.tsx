import { describe } from 'vitest';
import {
   AD_MAP_DATA,
   AF_MAP_DATA,
   AL_MAP_DATA,
   DE_MAP_DATA,
   DZ_MAP_DATA,
   GL_MAP_DATA,
   IS_MAP_DATA,
   SE_MAP_DATA,
} from '../maps';

const validateMapDataArray = (dataArray: any[], countryCode: string) => {
   describe(`${countryCode}_MAP_DATA`, () => {
      it('should be an array', () => {
         expect(Array.isArray(dataArray)).toBe(true);
      });

      it('should not be empty', () => {
         expect(dataArray.length).toBeGreaterThan(0);
      });

      it('should contain with secid and name properties', () => {
         dataArray.forEach((item, index) => {
            expect(item, `Item at index ${index}`).toBeTypeOf('object');
            expect(item, `Item at index ${index}`).toHaveProperty('secid');
            expect(item, `Item at index ${index}`).toHaveProperty('name');
         });
      });

      it('should have unique secid values', () => {
         const secIds = dataArray.map((item) => item.secid);
         const uniqueSecids = new Set(secIds);

         expect(
            uniqueSecids.size,
            `Duplicate secids found in ${countryCode}`
         ).toBe(dataArray.length);
      });

      it('should have secid values in correct order', () => {
         for (let i = 0; i < dataArray.length - 1; i++) {
            const currentSecid = parseInt(dataArray[i].secid);
            const nextSecid = parseInt(dataArray[i + 1].secid);

            expect(currentSecid, `Order issue at index ${i}`).toBeLessThan(
               nextSecid
            );
         }
      });

      it('should have sequential secid values starting from 1 (or appropriate start)', () => {
         const firstSecid = parseInt(dataArray[0].secid);
         const lastSecid = parseInt(dataArray[dataArray.length - 1].secid);

         // Check that secids are sequential
         for (let i = 0; i < dataArray.length; i++) {
            const expectedSecid = (firstSecid + i).toString();
            expect(
               dataArray[i].secid,
               `Missing secid ${expectedSecid} at index ${i}`
            ).toBe(expectedSecid);
         }
      });
   });
};

describe('Map Data Array', () => {
   validateMapDataArray(AF_MAP_DATA, 'AF');
   validateMapDataArray(AL_MAP_DATA, 'AL');
   validateMapDataArray(DZ_MAP_DATA, 'DZ');
   validateMapDataArray(AD_MAP_DATA, 'AD');
   validateMapDataArray(SE_MAP_DATA, 'SE');
   validateMapDataArray(DE_MAP_DATA, 'DE');
   validateMapDataArray(GL_MAP_DATA, 'GL');
   validateMapDataArray(IS_MAP_DATA, 'IS');
});

describe('Specific country validations', () => {
   describe('AD_MAP_DATA (Andorra)', () => {
      it('should start with secid "2" (missing secid "1")', () => {
         expect(AD_MAP_DATA[0].secid).toBe('2');
      });

      it('should have 7 items (secid 2-8)', () => {
         expect(AD_MAP_DATA).toHaveLength(7);
         expect(AD_MAP_DATA[AD_MAP_DATA.length - 1].secid).toBe('8');
      });
   });
});
