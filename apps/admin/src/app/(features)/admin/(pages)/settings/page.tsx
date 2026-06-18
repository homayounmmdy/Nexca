'use client';
import { Button } from '@/components/atoms';
import { adminPages } from '@/config/adminPage';
import { useState, useEffect } from 'react';

const Settings = () => {
   const [pages, setPages] = useState(adminPages);

   useEffect(() => {
      const storedPages = localStorage.getItem('adminPages');
      if (storedPages) {
         setPages(JSON.parse(storedPages));
      }
   }, []);

   const handleToggle = (index: number) => {
      const updatedPages = [...pages];
      updatedPages[index].activate = !updatedPages[index].activate;
      setPages(updatedPages);
      localStorage.setItem('adminPages', JSON.stringify(updatedPages));
   };

   return (
      <div className="p-4">
         <h1 className="mb-4 text-2xl font-bold">Admin Pages Settings</h1>
         <ul>
            {pages.map((page, index) => (
               <li
                  key={page.name}
                  className="flex items-center justify-between border-b p-2"
               >
                  <span>{page.name}</span>
                  <Button
                     onClick={() => handleToggle(index)}
                     color={page.activate ? 'btn-success' : 'btn-error'}
                  >
                     {page.activate ? 'Active' : 'Inactive'}
                  </Button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Settings;
