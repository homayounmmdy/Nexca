'use client';

import { useEffect, useState } from 'react';

const PWAInstallThankYou = () => {
   const [showThankYou, setShowThankYou] = useState(false);

   useEffect(() => {
      let installPrompt = null;

      // Listen for the beforeinstallprompt event
      const handleBeforeInstallPrompt = (e: Event) => {
         // Prevent the mini-infobar from appearing on mobile
         e.preventDefault();
         // Stash the event so it can be triggered later
         installPrompt = e;
      };

      // Detect if already installed (standalone mode)
      const checkIfStandalone = () => {
         const isStandalone =
            window.matchMedia('(display-mode: standalone)').matches ||
            (window.navigator as any).standalone === true;

         // If already running as installed PWA, show thank you
         if (isStandalone) {
            setShowThankYou(true);

            // Optional: Send a local thank-you notification
            if (Notification.permission === 'granted') {
               new Notification('Thank You!', {
                  body: 'Thanks for installing our app! 🎉',
                  icon: '/static/icons/192x192.png',
               });
            }
         }
      };

      // Initial check
      checkIfStandalone();

      // Listen for install prompt (for future installs)
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      // Optional: Detect when app is launched as PWA later (e.g., after install)
      window.addEventListener('appinstalled', () => {
         setShowThankYou(true);

         // Request notification permission and thank user
         if (Notification.permission === 'default') {
            Notification.requestPermission().then((perm) => {
               if (perm === 'granted') {
                  new Notification('Thank You!', {
                     body: 'Thanks for installing our app! 🎉',
                     icon: '/static/icons/192x192.png',
                  });
               }
            });
         } else if (Notification.permission === 'granted') {
            new Notification('Thank You!', {
               body: 'Thanks for installing our app! 🎉',
               icon: '/static/icons/192x192.png',
            });
         }
      });

      return () => {
         window.removeEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt
         );
      };
   }, []);

   if (!showThankYou) return null;

   return (
      <div className="alert alert-success shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md">
         <div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
               />
            </svg>
            <span>Thanks for installing our PWA! 🎉</span>
         </div>
      </div>
   );
};

export default PWAInstallThankYou;
