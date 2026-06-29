import { SetStateAction } from 'react';
import Button from '../atoms/Button';
import ThemeIcon from '../atoms/ThemeIcon';

const ThemeFiled = ({
   Theme,
   state,
   setState,
}: {
   Theme: string;
   state: string;
   setState: (value: SetStateAction<string>) => void;
}) => {
   const toggleTheme = (newTheme: string) => {
      setState(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
   };
   return (
      <Button
         color="btn-ghost"
         className="gap-3 px-2 flex theme-controller w-full  btn-sm btn-block "
         onClick={() => toggleTheme(Theme)}
      >
         <ThemeIcon themeColor={Theme} />
         <div className="w-32 truncate text-justify">{Theme}</div>{' '}
         {state === Theme ? (
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="h-3 w-3 shrink-0"
            >
               <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
            </svg>
         ) : (
            <div className="h-3 w-3 shrink-0"></div>
         )}
      </Button>
   );
};

export default ThemeFiled;
