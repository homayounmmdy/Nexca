'use client';
import React, { JSX, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from 'use-count-up';

interface Props {
   title: string;
   number: number;
   icon: JSX.Element;
}

const Stat: React.FC<Props> = ({ title, number, icon }: Props) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const { value } = useCountUp({
      isCounting: isInView,
      end: number,
      duration: 1.5,
   });

   return (
      <div ref={ref} className="btn h-full w-full px-2 py-7 shadow-lg">
         <span>{icon}</span>
         {title}
         <div className="badge badge-primary text-white">+{value}</div>
      </div>
   );
};

export default Stat;
