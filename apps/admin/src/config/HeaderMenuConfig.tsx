import RouteConfig from '@/config/RouteConfig';
import { HeaderMenuConfigType } from '@/types/entities';

const HeaderMenuConfig = (): HeaderMenuConfigType[] => [
   {
      id: 1,
      name: 'Home',
      link: '/',
   },
   {
      id: 2,
      name: ' Admin',
      link: RouteConfig.admin.base,
      children: [
         {
            id: 1,
            name: 'Posts',
            href: '/admin/posts',
         },
         {
            id: 2,
            name: 'Create News Post',
            href: '/admin/posts/new',
         },
         {
            id: 3,
            name: 'Sections',
            href: '/admin/sections',
         },
         {
            id: 4,
            name: 'Services',
            href: '/admin/services',
         },
         {
            id: 5,
            name: 'Contacts',
            href: '/admin/contacts',
         },
         {
            id: 6,
            name: 'Help',
            href: '/admin/help',
         },
      ],
   },
   {
      id: 3,
      name: 'Templates',
      link: '/templates',
      children: [
         {
            id: 1,
            name: 'default',
            href: '/templates/default',
         },
         {
            id: 2,
            name: 'AI Hub',
            href: '/templates/ai-hub',
         },
         {
            id: 3,
            name: 'Bank News',
            href: '/templates/bank-news',
         },
         {
            id: 4,
            name: 'Chronicle',
            href: '/templates/chronicle',
         },
         {
            id: 5,
            name: 'Music',
            href: '/templates/music',
         },
      ],
   },
   {
      id: 4,
      name: 'Feed',
      link: '/feed',
   },
   // The number 5 is services
   // The number 6 is maps
];

export default HeaderMenuConfig;
