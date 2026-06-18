'use client';
import { PropsWithChildren } from 'react';
import React from 'react';

const PremiumBadge = ({ children }: PropsWithChildren) => {
   return (
      <div className="inline-flex items-center justify-center animate-fade-in-up">
         <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 animate-pulse"></div>
            <span className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-purple-300 font-semibold text-sm tracking-wide uppercase">
               ✨ {children}
            </span>
         </div>
      </div>
   );
};

export default PremiumBadge;
