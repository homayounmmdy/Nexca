'use client';
import { DARKTHEME } from '@/config/Constants';
import RouteConfig from '@/config/RouteConfig';
import { ThemesConfig } from '@/config/themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeIcon } from '../atoms';
import ThemeFiled from './ThemeFiled';

type ThemeSetting = {
   name: string;
   activate: boolean;
};

const ThemeBtn = () => {
   const [theme, setTheme] = useState<string>(DARKTHEME);
   const [activeThemes, setActiveThemes] =
      useState<ThemeSetting[]>(ThemesConfig);

   useEffect(() => {
      // Load theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
         setTheme(savedTheme);
         document.documentElement.setAttribute('data-theme', savedTheme);
      }

      // Load theme settings
      const savedSettings = localStorage.getItem('themeSettings');
      if (savedSettings) {
         setActiveThemes(JSON.parse(savedSettings));
      } else {
         // Use default config if no settings saved
         setActiveThemes(ThemesConfig);
      }
   }, []);

   return (
      <div className="dropdown">
         <div tabIndex={0} role="button" className="btn m-1">
            <ThemeIcon themeColor={theme} />
            <svg
               width="12px"
               height="12px"
               className="inline-block h-2 w-2 fill-current opacity-60"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 2048 2048"
            >
               <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
         </div>
         <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 right-0 rounded-box z-1 w-52 p-2 shadow-2xl"
         >
            {activeThemes
               .filter((item) => item.activate)
               .map((item, index) => (
                  <li key={index}>
                     <ThemeFiled
                        state={theme}
                        setState={setTheme}
                        Theme={item.name}
                     />
                  </li>
               ))}
            <li>
               <Link
                  href={RouteConfig.admin.settings.themes}
                  title="Add more theme!"
               >
                  <div className="grow text-center text-sm font-bold hover:text-indigo-700 py-2">
                     Add more theme!
                  </div>
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default ThemeBtn;
