import { describe, it, expect, beforeEach } from 'vitest';
import { useCategoryStore } from '../useCategoryStore';

// Reset the store before each test
beforeEach(() => {
   useCategoryStore.setState({ activeCategory: 'all' });
});

describe('useCategoryStore', () => {
   describe('initial state', () => {
      it('should have initial activeCategory as "all"', () => {
         const { activeCategory } = useCategoryStore.getState();
         expect(activeCategory).toBe('all');
      });
   });

   describe('setActiveCategory', () => {
      it('should update activeCategory', () => {
         const { setActiveCategory } = useCategoryStore.getState();

         setActiveCategory('electronics');

         const { activeCategory } = useCategoryStore.getState();
         expect(activeCategory).toBe('electronics');
      });

      it('should update activeCategory multiple times', () => {
         const { setActiveCategory } = useCategoryStore.getState();

         setActiveCategory('books');
         expect(useCategoryStore.getState().activeCategory).toBe('books');

         setActiveCategory('clothing');
         expect(useCategoryStore.getState().activeCategory).toBe('clothing');

         setActiveCategory('all');
         expect(useCategoryStore.getState().activeCategory).toBe('all');
      });

      it('should handle empty string', () => {
         const { setActiveCategory } = useCategoryStore.getState();

         setActiveCategory('');

         const { activeCategory } = useCategoryStore.getState();
         expect(activeCategory).toBe('');
      });

      it('should handle special characters', () => {
         const { setActiveCategory } = useCategoryStore.getState();

         setActiveCategory('category-with-dashes');

         const { activeCategory } = useCategoryStore.getState();
         expect(activeCategory).toBe('category-with-dashes');
      });
   });

   // Test with component-like usage
   describe('component usage simulation', () => {
      it('should work when used in a component context', () => {
         // Simulate component usage
         const { setActiveCategory, activeCategory: initialActive } =
            useCategoryStore.getState();
         expect(initialActive).toBe('all');

         // Update category
         setActiveCategory('sports');

         // Check updated state
         const { activeCategory: updatedActive } = useCategoryStore.getState();
         expect(updatedActive).toBe('sports');
      });
   });
});
