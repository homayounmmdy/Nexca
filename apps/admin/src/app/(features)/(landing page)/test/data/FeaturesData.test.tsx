import React from 'react';
import { FeaturesData } from '../../data/FeaturesData';

describe('Panel Features Data', () => {
   it('should be an array with the correct length', () => {
      expect(Array.isArray(FeaturesData)).toBe(true);
      expect(FeaturesData.length).toBe(3); // updated length to 3 features
   });

   it('should have valid properties for each feature', () => {
      FeaturesData.forEach((feature) => {
         // Check required properties
         expect(feature).toHaveProperty('title');
         expect(feature).toHaveProperty('Icon');
         expect(feature).toHaveProperty('description');
         expect(feature).toHaveProperty('gradient');
         expect(feature).toHaveProperty('iconColor');
         expect(feature).toHaveProperty('delay');

         expect(typeof feature.title).toBe('string');
         expect(typeof feature.description).toBe('string');

         // Icon is a React component (function or object)
         expect(
            typeof feature.Icon === 'function' ||
               typeof feature.Icon === 'object'
         ).toBe(true);

         expect(typeof feature.gradient).toBe('string');
         expect(typeof feature.iconColor).toBe('string');
         expect(typeof feature.delay).toBe('number');
      });
   });

   it('should contain the expected feature titles', () => {
      const expectedTitles = ['Full CRUD', 'FeedBack', 'Services'];

      const actualTitles = FeaturesData.map((feature) => feature.title);
      expect(actualTitles).toEqual(expectedTitles);
   });
});
