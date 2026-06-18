import React from 'react';
import { FooterLinkType } from '@/types/entities';
import { AiFillHome } from 'react-icons/ai';
import { LiaQuestionSolid } from 'react-icons/lia';
import { MdPrivacyTip } from 'react-icons/md';
import { PiPhoneCallFill } from 'react-icons/pi';
import { SiAboutdotme, SiRelay } from 'react-icons/si';

export const FooterLinkData: FooterLinkType[] = [
   {
      id: 1,
      title: 'Home',
      href: '/',
      icon: <AiFillHome />,
   },
   {
      id: 2,
      title: 'FAQs',
      href: '/FAQs',
      icon: <LiaQuestionSolid />,
   },
   {
      id: 3,
      title: 'privacy_policy',
      href: '/privacy_policy',
      icon: <MdPrivacyTip />,
   },
   {
      id: 4,
      title: 'About',
      href: '/about',
      icon: <SiAboutdotme />,
   },
   {
      id: 5,
      title: 'Contacts',
      href: '/contacts',
      icon: <PiPhoneCallFill />,
   },
   {
      id: 6,
      title: 'Release',
      href: '/release',
      icon: <SiRelay />,
   },
];
