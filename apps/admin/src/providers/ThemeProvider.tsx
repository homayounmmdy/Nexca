'use client';
import { LIGHTTHEME } from '@/config/Constants';
import { useEffect } from 'react';

export default function ThemeProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || LIGHTTHEME;
      document.documentElement.setAttribute('data-theme', savedTheme);
   }, []);

   return children;
}
