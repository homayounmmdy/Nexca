import React from 'react';

const ThemeIcon = ({ themeColor }: { themeColor: string }) => {
   return (
      <div
         data-testid="theme-icon"
         data-theme={themeColor}
         className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
      >
         <div
            data-testid="theme-icon-dot"
            className="bg-base-content size-1 rounded-full"
         ></div>{' '}
         <div
            data-testid="theme-icon-dot"
            className="bg-primary size-1 rounded-full"
         ></div>{' '}
         <div
            data-testid="theme-icon-dot"
            className="bg-secondary size-1 rounded-full"
         ></div>{' '}
         <div
            data-testid="theme-icon-dot"
            className="bg-accent size-1 rounded-full"
         ></div>
      </div>
   );
};

export default ThemeIcon;
