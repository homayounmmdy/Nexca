'use client';
import React, { useState, useEffect } from 'react';
import { BiArrowToTop, BiBookOpen } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { IoSparkles } from 'react-icons/io5';

function Popup() {
   const [isVisible, setIsVisible] = useState(false);
   const [isAnimating, setIsAnimating] = useState(false);

   // Show popup when page is fully loaded
   useEffect(() => {
      const handleLoad = () => {
         setIsVisible(true);
         setIsAnimating(true);
      };

      // Check if page is already loaded
      if (document.readyState === 'complete') {
         handleLoad();
      } else {
         window.addEventListener('load', handleLoad);
         return () => window.removeEventListener('load', handleLoad);
      }
   }, []);

   const handleClose = () => {
      setIsAnimating(false);
      setTimeout(() => {
         setIsVisible(false);
      }, 300);
   };

   const handleLinkClick = () => {
      window.open('https://nexca-docs.vercel.app/', '_blank');
      handleClose();
   };

   if (!isVisible) return null;

   return (
      <>
         {/* Backdrop overlay */}
         <div
            className={`fixed inset-0 bg-base-300 backdrop-blur-sm z-40 transition-opacity duration-300 ${
               isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={handleClose}
         />

         {/* Popup container */}
         <div className="fixed inset-0 z-50 pointer-events-none">
            <div
               className={`absolute bottom-6 left-6 pointer-events-auto transform transition-all duration-500 ease-out ${
                  isAnimating
                     ? 'translate-x-0 translate-y-0 opacity-100 scale-100'
                     : '-translate-x-full translate-y-8 opacity-0 scale-95'
               }`}
            >
               {/* Main popup card */}
               <div className="relative max-w-sm w-80">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-xl animate-pulse"></div>

                  {/* Card background */}
                  <div className="relative bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                     {/* Animated gradient border */}
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl animate-gradient-x"></div>
                     <div className="absolute inset-px bg-slate-900/95 rounded-2xl"></div>

                     {/* Content */}
                     <div className="relative z-10 p-6">
                        {/* Header with close button */}
                        <div className="flex items-start justify-between mb-4">
                           <div className="flex items-center gap-3">
                              <div className="relative">
                                 {/* Icon background with animation */}
                                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur opacity-75 animate-pulse"></div>
                                 <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
                                    <BiBookOpen className="w-6 h-6 text-white" />
                                 </div>
                              </div>
                              <div>
                                 <div className="flex items-center gap-2 mb-1">
                                    <IoSparkles className="w-4 h-4 text-yellow-400 animate-spin-slow" />
                                    <span className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                                       Level Up
                                    </span>
                                 </div>
                                 <h3 className="text-lg font-bold text-white">
                                    Know about Nexca
                                 </h3>
                              </div>
                           </div>

                           {/* Close button */}
                           <button
                              onClick={handleClose}
                              className="group flex cursor-pointer items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                           >
                              <IoMdClose className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                           </button>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                           Explore comprehensive documentation guides to master
                           Nexca is powerful features and unlock your full
                           potential.
                        </p>

                        {/* CTA Button */}
                        <button
                           onClick={handleLinkClick}
                           className="group relative w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
                        >
                           {/* Button background with animation */}
                           <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>

                           {/* Animated border */}
                           <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                           <div className="absolute inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl"></div>

                           <span className="relative z-10 flex items-center gap-2 cursor-pointer">
                              Visit Nexca Docs
                              <BiArrowToTop className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                           </span>
                        </button>
                     </div>

                     {/* Floating particles */}
                     <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400/60 rounded-full animate-ping"></div>
                     <div className="absolute top-8 right-12 w-1 h-1 bg-blue-400/60 rounded-full animate-ping animation-delay-1000"></div>
                     <div className="absolute bottom-8 left-4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-ping animation-delay-2000"></div>
                  </div>
               </div>
            </div>
         </div>

         <style jsx>{`
            @keyframes gradient-x {
               0%,
               100% {
                  background-position: 0% 50%;
               }
               50% {
                  background-position: 100% 50%;
               }
            }

            @keyframes spin-slow {
               from {
                  transform: rotate(0deg);
               }
               to {
                  transform: rotate(360deg);
               }
            }

            .animate-gradient-x {
               background-size: 200% 200%;
               animation: gradient-x 3s ease infinite;
            }
            .animate-spin-slow {
               animation: spin-slow 3s linear infinite;
            }

            .animation-delay-300 {
               animation-delay: 300ms;
            }
            .animation-delay-600 {
               animation-delay: 600ms;
            }
            .animation-delay-900 {
               animation-delay: 900ms;
            }
            .animation-delay-1000 {
               animation-delay: 1000ms;
            }
            .animation-delay-2000 {
               animation-delay: 2000ms;
            }

            @media (max-width: 640px) {
               .fixed.inset-0 > div {
                  bottom: 1rem !important;
                  left: 1rem !important;
                  right: 1rem !important;
                  width: auto !important;
                  max-width: none !important;
               }
            }
         `}</style>
      </>
   );
}

export default Popup;
