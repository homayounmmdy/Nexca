'use client';
import { Container, SiteNameLink } from '@/components/atoms';
import { GitHubBtn, HamburgerIcon, ThemeBtn } from '@/components/molecules';
import { DEV_MODE } from '@/config/Constants';
import HeaderMenuConfig from '@/config/HeaderMenuConfig';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
   const navBar = HeaderMenuConfig();
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   // Check if the environment is production
   const isDev = process.env.NEXT_PUBLIC_STATUS === DEV_MODE;
   // Animation variants for the header

   const headerVariants = isDev
      ? undefined
      : {
           hidden: { opacity: 0, y: -20 },
           visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        };

   return (
      <>
         <motion.header
            className="navbar fixed left-0 right-0 top-0 z-50 border-b-2 border-indigo-400 bg-base-100 shadow-xl transition-all hover:border-indigo-700"
            initial={isDev ? false : 'hidden'}
            animate={isDev ? false : 'visible'}
            variants={headerVariants}
         >
            <Container className="navbar">
               <div className="navbar-start lg:w-[20%] xl:w-[30%]">
                  <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
                  <div className="flex items-center gap-2">
                     <SiteNameLink />
                  </div>
               </div>
               <div className="navbar-center relative hidden lg:flex lg:w-[60%] xl:w-[50%] lg:justify-start">
                  <DesktopMenu nav={navBar} />
               </div>
               <div className="navbar-end gap-3 lg:w-[20%]">
                  <ThemeBtn />
                  <GitHubBtn aStyle="hidden lg:block" />
               </div>
            </Container>
         </motion.header>
         {isOpen && (
            <>
               <div
                  className="fixed left-0 right-0 w-full top-0 z-10 lg:hidden backdrop-blur h-full"
                  onClick={() => setIsOpen(false)}
               ></div>
               <MobileMenu nav={navBar} />
            </>
         )}
      </>
   );
};

export default Header;
