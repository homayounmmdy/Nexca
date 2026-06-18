import { create } from 'zustand';

interface CategoryState {
   activeCategory: string;
   setActiveCategory: (category: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
   activeCategory: 'all',
   setActiveCategory: (category: string) => set({ activeCategory: category }),
}));
