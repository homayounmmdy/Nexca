'use client';
import useCheckLogin from '@/app/(features)/admin/hooks/useCheckLogin';
import { Button } from '@/components/atoms';
import { AUTH_KEY } from '@/config/Constants';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutButton: React.FC = () => {
   const router = useRouter();

   useCheckLogin();

   const handleLogout = () => {
      localStorage.removeItem(AUTH_KEY);
      router.push('/');
   };

   return (
      <>
         <Button color="btn-error" onClick={handleLogout} className="w-full">
            Logout
         </Button>
      </>
   );
};

export default LogoutButton;
