'use client';
import useCheckLogin from '@/app/(features)/admin/hooks/useCheckLogin';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';

export default function AdminLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   useCheckLogin();
   return (
      <>
         <Toaster position="top-center" />
         <div className="grid grid-cols-12 lg:gap-3 xl:gap-5 p-5">
            <aside className="col-span-12 rounded-xl border-2 border-indigo-400 shadow-xl lg:col-span-3">
               <Sidebar />
            </aside>
            <main className="col-span-12 mt-5 rounded-xl border-2 border-indigo-400 bg-base-300 shadow-xl lg:col-span-9 lg:mt-0">
               <div className="h-full w-full p-4">{children}</div>
            </main>
         </div>
      </>
   );
}
