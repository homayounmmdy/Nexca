'use client';

import { ErrorText } from '@/components/atoms';
import { useEffect, useState } from 'react';

export default function OnlineStatusProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [isOnline, setIsOnline] = useState(true);

   useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      setIsOnline(navigator.onLine);

      return () => {
         window.removeEventListener('online', handleOnline);
         window.removeEventListener('offline', handleOffline);
      };
   }, []);

   return (
      <>
         {isOnline ? (
            children
         ) : (
            <ErrorText>
               You are currently offline. Offline features will be added soon.
            </ErrorText>
         )}
      </>
   );
}
