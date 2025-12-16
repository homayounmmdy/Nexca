import React from 'react';

interface Props {
   title: string;
   color?: 'indigo' | 'amber' | 'rose' | 'emerald';
   className?: string;
   children?: React.ReactNode;
}
const CalloutBox = ({
   title,
   color = 'indigo',
   className,
   children,
}: Props) => {
   return (
      <div
         className={`${className}  rounded-lg border-l-4 border-${color}-500 bg-base-200 p-4 md:p-6`}
      >
         <h2 className={`mb-4 text-2xl font-bold text-${color}-800`}>
            {title}
         </h2>
         {children}
      </div>
   );
};

export default CalloutBox;
