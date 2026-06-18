'use client';
import { MASTER_KEY } from '@/config/Constants';
import { usePathname } from 'next/navigation';

export const GetParameterId = (sliceCharacter: number) => {
   const pathname = usePathname();
   return pathname.slice(sliceCharacter);
};

export const GetIdOfPost = () => {
   const pathname = usePathname();
   const parts = pathname.split('/');
   const postId = parts[parts.indexOf('posts') + 1];
   return postId;
};

export const checkMaster = (): boolean => {
   let master: boolean;
   const isMaster =
      typeof window !== 'undefined' ? localStorage.getItem(MASTER_KEY) : false;

   isMaster ? (master = true) : (master = false);

   return master;
};
