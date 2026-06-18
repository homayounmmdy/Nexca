'use client';

import useGetStats from '@/hooks/useGetStats';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from 'use-count-up';

const StatItem = ({ label, count }: { label: string; count: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const { value } = useCountUp({
      isCounting: isInView,
      end: count,
      duration: 1.5,
   });

   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: 40 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.6 }}
         className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0"
      >
         <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
            {label}
         </dt>
         <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600">
            {value}
         </dd>
      </motion.div>
   );
};

const StatsSection = () => {
   const data = useGetStats();

   return (
      <section className="pt-12 sm:pt-20">
         <div className="mx-auto max-w-[--breakpoint-xl] px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="mx-auto max-w-4xl text-center"
            >
               <h2 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
                  See What we have
               </h2>
               <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
                  Here are list of the available posts, sections and services in
                  our website
               </p>
            </motion.div>
         </div>

         <div className="mt-10 pb-12 sm:pb-16">
            <div className="relative">
               <div className="absolute inset-0 h-1/2" />
               <div className="relative mx-auto max-w-[--breakpoint-xl] px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-4xl">
                     <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                        <StatItem label="Posts" count={data.posts.length} />
                        <StatItem
                           label="Sections"
                           count={data.sections.length}
                        />
                        <StatItem
                           label="Services"
                           count={data.services.length}
                        />
                     </dl>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default StatsSection;
