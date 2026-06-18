import { FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiTypescript, SiVercel } from 'react-icons/si';
import { FeaturesType } from '../types';

export const TechStackData: FeaturesType[] = [
   {
      Icon: RiNextjsFill,
      title: 'Next.js',
      description:
         'Full-stack React framework with App Router, server components, and advanced routing capabilities for modern web applications.',
      gradient: 'from-slate-900 via-slate-800 to-black',
      iconColor: 'text-black',
      delay: 0,
   },
   {
      Icon: FaReact,
      title: 'React 18',
      description:
         'Cutting-edge component library with concurrent features, server components, and advanced hooks for seamless user experiences.',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      iconColor: 'text-cyan-300',
      delay: 0.1,
   },
   {
      Icon: SiMongodb,
      title: 'MongoDB Atlas',
      description:
         'Cloud-native NoSQL database with advanced indexing, real-time analytics, and enterprise-grade security for scalable data management.',
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      iconColor: 'text-green-400',
      delay: 0.2,
   },
   {
      Icon: RiTailwindCssFill,
      title: 'Tailwind CSS',
      description:
         'Utility-first CSS framework with custom design systems, responsive breakpoints, and advanced theming capabilities.',
      gradient: 'from-teal-400 via-cyan-500 to-blue-500',
      iconColor: 'text-cyan-400',
      delay: 0.3,
   },
   {
      Icon: SiTypescript,
      title: 'TypeScript',
      description:
         'Enterprise-grade type system providing compile-time safety, advanced IntelliSense, and robust development workflows.',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      iconColor: 'text-blue-400',
      delay: 0.4,
   },
   {
      Icon: SiVercel,
      title: 'Vercel Platform',
      description:
         'Edge-optimized deployment platform with global CDN, serverless functions, and automatic performance optimization.',
      gradient: 'from-gray-900 via-gray-800 to-black',
      iconColor: 'text-black',
      delay: 0.5,
   },
];
