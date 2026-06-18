'use client';
import { isSectionActive } from '@/util/sections';
import { useEffect, useState } from 'react';

export const SectionController = ({
   sectionId,
   children,
}: {
   sectionId: number;
   children: React.ReactNode;
}) => {
   const [active, setActive] = useState(() => isSectionActive(sectionId));

   useEffect(() => {
      const handleUpdate = () => setActive(isSectionActive(sectionId));

      // Listen to both storage and custom events
      window.addEventListener('storage', handleUpdate);
      window.addEventListener('sectionsConfigUpdated', handleUpdate);

      return () => {
         window.removeEventListener('storage', handleUpdate);
         window.removeEventListener('sectionsConfigUpdated', handleUpdate);
      };
   }, [sectionId]);

   return active ? children : null;
};
