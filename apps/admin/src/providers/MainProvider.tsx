import ThemeProvider from '@/providers/ThemeProvider';
import React from 'react';
import OnlineStatusProvider from './OnlineStatusProvider';
import ReactQueryProvider from './ReactQueryProvider';

export default function MainProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ReactQueryProvider>
         <ThemeProvider>
            <OnlineStatusProvider>{children}</OnlineStatusProvider>
         </ThemeProvider>
      </ReactQueryProvider>
   );
}
