// utils/sections.ts
import { SectionsConfig } from '@/config/sections';
import { SECTIONS_CONFIG } from '@/config/Constants';

type Section = {
   id: number;
   activate: boolean;
};

export const getSectionsConfig = (): Section[] => {
   if (typeof window === 'undefined') {
      return SectionsConfig; // Server-side returns default config
   }

   try {
      const storedConfig = localStorage.getItem(SECTIONS_CONFIG);
      return storedConfig ? JSON.parse(storedConfig) : SectionsConfig;
   } catch {
      return SectionsConfig; // Fallback if localStorage fails
   }
};

export const updateSectionConfig = (id: number, activate: boolean): void => {
   if (typeof window === 'undefined') return;

   const currentConfig = getSectionsConfig();
   const updatedConfig = currentConfig.map((section) =>
      section.id === id ? { ...section, activate } : section
   );

   localStorage.setItem(SECTIONS_CONFIG, JSON.stringify(updatedConfig));
   window.dispatchEvent(new Event('sectionsConfigUpdated'));
};

export const isSectionActive = (id: number): boolean => {
   const config = getSectionsConfig();
   const section = config.find((s) => s.id === id);
   return section?.activate ?? false; // Default to false if section not found
};
