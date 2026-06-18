'use client';
import useCheckLogin from '@/app/(features)/admin/hooks/useCheckLogin';
import { BannerTitle } from '@/components/molecules';
import Stats from './components/Stats';
import AdminRecentPosts from './components/AdminRecentPosts';
import MasterBtn from './components/MasterBtn';
import { BsFiletypeDoc } from 'react-icons/bs';

const Admin = () => {
   useCheckLogin();
   return (
      <div>
         <title>
            The Ultimate Admin Panel Nexca Good for Agencies and Individuals
         </title>
         <Stats />
         <div className="mx-auto hidden lg:block max-w-7xl px-4 pb-8 pt-10 text-center sm:px-6 lg:px-8">
            <BannerTitle />
         </div>
         <AdminRecentPosts />
         <MasterBtn
            classNames="hidden xl:block"
            href="https://nexca-docs.vercel.app/"
         >
            <BsFiletypeDoc /> Understand Nexca Deeply in our docs
         </MasterBtn>
      </div>
   );
};

export default Admin;
