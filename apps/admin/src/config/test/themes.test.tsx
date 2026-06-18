import { ThemesConfig } from '../themes';

describe('Themes Config', () => {
   it('should be an array', () => {
      expect(Array.isArray(ThemesConfig)).toBe(true);
   });

   it('should contain 11 theme configuration objects', () => {
      expect(ThemesConfig).toHaveLength(11);
   });

   it('should not contain any extra properties', () => {
      ThemesConfig.forEach((theme) => {
         const keys = Object.keys(theme);
         expect(keys).toEqual(['name', 'activate']);
      });
   });

   describe('no duplicate theme names', () => {
      it('should have no duplicate theme names', () => {
         const themeNames = ThemesConfig.map((theme) => theme.name);
         const uniqueThemeNames = new Set(themeNames);

         expect(uniqueThemeNames.size).toBe(themeNames.length);
      });

      it('should contain each theme name only once', () => {
         const themeNameCounts = new Map();

         ThemesConfig.forEach((theme) => {
            const count = themeNameCounts.get(theme.name) || 0;
            themeNameCounts.set(theme.name, count + 1);
         });

         // Check that no theme name appears more than once
         themeNameCounts.forEach((count, themeName) => {
            expect(count).toBe(1);
         });
      });
   });
});
