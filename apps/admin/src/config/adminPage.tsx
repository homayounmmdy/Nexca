import { CgFeed } from 'react-icons/cg';
import {
   FaAdversal,
   FaComment,
   FaHome,
   FaImage,
   FaMap,
   FaPager,
   FaPhoneAlt,
   FaRegEdit,
   FaSitemap,
   FaTags,
} from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa6';
import { IoIosColorPalette, IoMdSettings } from 'react-icons/io';
import { MdLiveTv, MdOutlineMail } from 'react-icons/md';
import { SiRelay } from 'react-icons/si';
import RouteConfig from './RouteConfig';

export const adminPages = [
   {
      name: 'Admin',
      href: RouteConfig.admin.base,
      icon: FaHome,
      activate: true,
   },
   {
      name: 'Posts',
      href: RouteConfig.admin.posts.base,
      icon: CgFeed,
      activate: true,
   },
   {
      name: 'New Post',
      href: RouteConfig.admin.posts.new,
      icon: FaRegEdit,
      activate: true,
   },
   {
      name: 'Text Adv',
      href: RouteConfig.admin.textadv.base,
      icon: FaAdversal,
      activate: true,
   },
   {
      name: 'Img Adv',
      href: RouteConfig.admin.adv.img.base,
      icon: FaImage,
      activate: false,
   },
   {
      name: 'Sections',
      href: RouteConfig.admin.sections.base,
      icon: FaSitemap,
      activate: true,
   },
   {
      name: 'Services',
      href: RouteConfig.admin.services.base,
      icon: FaPager,
      activate: true,
   },
   {
      name: 'Emails',
      href: RouteConfig.admin.emails,
      icon: MdOutlineMail,
      activate: true,
   },
   {
      name: 'Contacts',
      href: RouteConfig.admin.contacts,
      icon: FaPhoneAlt,
      activate: true,
   },
   {
      name: 'Release',
      href: RouteConfig.admin.release.base,
      icon: SiRelay,
      activate: false,
   },
   {
      name: 'Maps',
      href: RouteConfig.admin.maps.base,
      icon: FaMap,
      activate: false,
   },
   {
      name: 'Help',
      href: RouteConfig.admin.help.base,
      icon: FaQuestion,
      activate: true,
   },
];

export const EditPostPages = [
   { name: 'See Live', href: 'live', icon: MdLiveTv, activate: true },
   { name: 'Edit Post', href: '', icon: FaRegEdit, activate: true },
   { name: 'Comments', href: 'comments', icon: FaComment, activate: true },
   { name: 'Categories', href: 'categories', icon: FaTags, activate: true },
];

export const HelpPages = [
   {
      name: 'Admin',
      href: RouteConfig.admin.base,
      icon: FaHome,
      activate: true,
   },
   {
      name: 'Help',
      href: RouteConfig.admin.help.base,
      icon: FaQuestion,
      activate: true,
   },
   {
      name: 'Text Adv',
      href: RouteConfig.admin.help.textadv,
      icon: FaAdversal,
      activate: true,
   },
   {
      name: 'Sections',
      href: RouteConfig.admin.help.sections,
      icon: FaSitemap,
      activate: true,
   },
   {
      name: 'Services',
      href: RouteConfig.admin.help.services,
      icon: FaPager,
      activate: true,
   },
   {
      name: 'Contacts',
      href: RouteConfig.admin.help.contacts,
      icon: FaPhoneAlt,
      activate: true,
   },
];

export const SettingsPages = [
   {
      name: 'Admin Setting',
      href: RouteConfig.admin.settings.base,
      icon: IoMdSettings,
      activate: true,
   },
   {
      name: 'Themes',
      href: RouteConfig.admin.settings.themes,
      icon: IoIosColorPalette,
      activate: true,
   },
];
