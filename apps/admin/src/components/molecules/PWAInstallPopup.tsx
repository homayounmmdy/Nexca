'use client';
import { useEffect, useState } from 'react';
import { Button } from '../atoms';

// Define BeforeInstallPromptEvent type (since it's not in TypeScript by default)
interface BeforeInstallPromptEvent extends Event {
   prompt: () => Promise<void>;
   userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPopup = () => {
   const [deferredPrompt, setDeferredPrompt] =
      useState<BeforeInstallPromptEvent | null>(null);
   const [showInstallPopup, setShowInstallPopup] = useState(false);

   useEffect(() => {
      const handleBeforeInstallPrompt = (event: Event) => {
         event.preventDefault();
         setDeferredPrompt(event as BeforeInstallPromptEvent);
         setShowInstallPopup(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      return () => {
         window.removeEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt
         );
      };
   }, []);

   const handleInstallClick = async () => {
      if (deferredPrompt) {
         await deferredPrompt.prompt();
         const choiceResult = await deferredPrompt.userChoice;
         if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the PWA install.');
         } else {
            console.log('User dismissed the PWA install.');
         }
         setDeferredPrompt(null);
         setShowInstallPopup(false);
      }
   };

   const handleCloseClick = () => {
      setShowInstallPopup(false);
   };

   if (!showInstallPopup) {
      return null;
   }

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs">
         <div className="relative mx-4 max-w-md overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Header with gradient background */}
            <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 text-white">
               <div className="mb-1 flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-xs">
                     <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                     </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Install Our App</h3>
               </div>
               <p className="text-white/90">
                  Get the full experience with our app
               </p>
            </div>

            {/* Content */}
            <div className="p-6">
               <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                     <svg
                        className="mr-2 mt-1 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 13l4 4L19 7"
                        />
                     </svg>
                     <span className="text-gray-700">
                        Works offline when you&apos;re not connected
                     </span>
                  </li>
                  <li className="flex items-start">
                     <svg
                        className="mr-2 mt-1 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 13l4 4L19 7"
                        />
                     </svg>
                     <span className="text-gray-700">
                        Faster loading times and smoother experience
                     </span>
                  </li>
                  <li className="flex items-start">
                     <svg
                        className="mr-2 mt-1 h-5 w-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 13l4 4L19 7"
                        />
                     </svg>
                     <span className="text-gray-700">
                        Home screen icon for quick access
                     </span>
                  </li>
               </ul>

               <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-3 sm:space-y-0">
                  <Button
                     color="btn-primary"
                     className="gap-2"
                     onClick={handleInstallClick}
                  >
                     <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                     </svg>
                     Install Now
                  </Button>
                  <Button
                     color="btn-ghost"
                     className="text-gray-600"
                     onClick={handleCloseClick}
                  >
                     Maybe Later
                  </Button>
               </div>
            </div>

            {/* Close button */}
            <button
               onClick={handleCloseClick}
               className="absolute right-4 top-4 rounded-full bg-white/20 p-1 text-white transition-colors hover:bg-white/30"
               aria-label="Close"
            >
               <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d="M6 18L18 6M6 6l12 12"
                  />
               </svg>
            </button>
         </div>
      </div>
   );
};

export default PWAInstallPopup;
