'use client';
import { RELEASE_API_URL } from '@/config/apiConstants';
import { TIMELINE_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import React from 'react';
import { ReleaseCashType } from '@/types/CashTypes';
import ReleaseSec from './components/ReleaseSec';

const ReleasePage: React.FC = () => {
   const { data } = useFetch(TIMELINE_KEY, RELEASE_API_URL);

   const sortedByTime = data?.sort(
      (
         a: { createdAt: string | number | Date },
         b: { createdAt: string | number | Date }
      ) => {
         return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
         );
      }
   );

   return (
      <>
         <ul className="timeline timeline-vertical timeline-snap-icon p-6 max-md:timeline-compact">
            {sortedByTime?.map((item: ReleaseCashType, index: number) => (
               <ReleaseSec key={index} item={item} index={index} />
            ))}
         </ul>
      </>
   );
};

export default ReleasePage;
