import React from 'react';
import { FaMediumM, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export const ShareMedia = (
   encodedUrl: string,
   encodedTitle: string,
   encodedDescription: string
) => [
   {
      id: 1,
      name: 'Linkedin',
      icon: <FaLinkedinIn size={20} />,
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
   },
   {
      id: 2,
      name: 'Medium',
      icon: <FaMediumM size={20} />,
      link: `https://medium.com/new-story?url=${encodedUrl}`,
   },
   {
      id: 3,
      name: 'X',
      icon: <FaXTwitter size={20} />,
      link: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
   },
   {
      id: 4,
      name: 'Telegram',
      icon: <FaTelegramPlane size={20} />,
      link: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
   },
   {
      id: 5,
      name: 'Whatsapp',
      icon: <FaWhatsapp size={20} />,
      link: `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`,
   },
];
