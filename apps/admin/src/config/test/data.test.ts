import React from 'react';
import { describe, expect, it } from 'vitest';
import { FooterLinkData } from '@/config/data';

describe('Footer Link Data', () => {
   it('should have the correct structure and length', () => {
      expect(Array.isArray(FooterLinkData)).toBe(true);
      expect(FooterLinkData).toHaveLength(6);
   });

   it('should have valid properties for each footer link', () => {
      FooterLinkData.forEach((link) => {
         expect(link).toHaveProperty('id');
         expect(link).toHaveProperty('title');
         expect(link).toHaveProperty('href');
         expect(link).toHaveProperty('icon');

         expect(typeof link.id).toBe('number');
         expect(typeof link.title).toBe('string');
         expect(typeof link.href).toBe('string');
         expect(link.icon).toBeTruthy();
      });
   });

   it('should have valid href formats', () => {
      FooterLinkData.forEach((link) => {
         expect(link.href).toMatch(/^\/.*$/); // Should start with /
      });
   });

   it('should contain all expected routes', () => {
      const expectedRoutes = [
         '/',
         '/FAQs',
         '/privacy_policy',
         '/about',
         '/contacts',
         '/release',
      ];
      const actualRoutes = FooterLinkData.map((link) => link.href);
      expect(actualRoutes).toEqual(expectedRoutes);
   });
});
