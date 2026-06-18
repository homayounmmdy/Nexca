import React from 'react';

function Container({
   children,
   className = '',
}: {
   children: React.ReactNode;
   className?: string;
}) {
   return (
      <div
         className={`mx-auto w-full px-4 sm:p-0
            sm:max-w-xl
            md:max-w-2xl 
            lg:max-w-5xl 
            xl:max-w-7xl 
            ${className.trim()}`}
      >
         {children}
      </div>
   );
}

export default Container;
