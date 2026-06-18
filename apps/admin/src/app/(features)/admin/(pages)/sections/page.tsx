'use client';
import { Button, ErrorText, Spinner } from '@/components/atoms';
import { SECTIONS_API_URL } from '@/config/apiConstants';
import { SECTIONS_CONFIG, SECTIONS_QUERY_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { checkMaster } from '@/util/Util';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import RouteConfig from '@/config/RouteConfig';
import { CiEdit } from 'react-icons/ci';
import { DeleteBtn } from '@/components/molecules';
import { SectionsConfig } from '@/config/sections';

const AdminSectionPage: React.FC = () => {
   const { data, loading } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);
   const [section, setSection] = useState(SectionsConfig);

   useEffect(() => {
      // Load configuration from localStorage if it exists
      const storedConfig = localStorage.getItem(SECTIONS_CONFIG);
      if (storedConfig) {
         setSection(JSON.parse(storedConfig));
      }
   }, []);

   const handleToggle = (id: number) => {
      const updatedConfig = section.map((section) =>
         section.id === id
            ? { ...section, activate: !section.activate }
            : section
      );
      setSection(updatedConfig);
      localStorage.setItem(SECTIONS_CONFIG, JSON.stringify(updatedConfig));
   };

   if (loading) {
      return <Spinner />;
   }

   let MasterEditor = checkMaster();
   const path = 'sections';
   const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];
   return (
      <div className="overflow-x-auto">
         {MasterEditor ? (
            <div className="flex w-full justify-center">
               <Link
                  href={`${process.env.NEXT_PUBLIC_API_URL}${RouteConfig.admin.base}/${path}/new`}
               >
                  <Button
                     color="btn-primary"
                     className="btn-outline m-3"
                  >{`New ${path}`}</Button>
               </Link>
            </div>
         ) : null}
         {sortedData?.length === 0 ? (
            <ErrorText>There are currently no services created.</ErrorText>
         ) : (
            <table className="table table-zebra my-2">
               <thead>
                  <tr>
                     <th>Name of Section</th>
                     <th>Template ID</th>
                     <th>activate</th>
                     <th>edit</th>
                     {MasterEditor ? <th>delete</th> : null}
                  </tr>
               </thead>
               <tbody>
                  {sortedData?.map((item) => {
                     const sectionConfig = section.find(
                        (s) => s.id === item.secid
                     );
                     const isActive = sectionConfig
                        ? sectionConfig.activate
                        : false;

                     return (
                        <tr key={item._id}>
                           <td>{item.name}</td>
                           <td>{item.templates}</td>
                           <td>
                              <Button
                                 onClick={() => handleToggle(item.secid)}
                                 color={isActive ? 'btn-success' : 'btn-error'}
                              >
                                 {isActive ? 'Active' : 'Inactive'}
                              </Button>
                           </td>
                           <td>
                              <Link
                                 href={`${process.env.NEXT_PUBLIC_API_URL}${RouteConfig.admin.base}/${path}/${item._id}`}
                              >
                                 <Button
                                    color="btn-warning"
                                    className="mb-2 me-2"
                                 >
                                    <CiEdit size={25} />
                                 </Button>
                              </Link>
                           </td>
                           {MasterEditor ? (
                              <td>
                                 <DeleteBtn path={path} id={item._id} />
                              </td>
                           ) : null}
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         )}
      </div>
   );
};

export default AdminSectionPage;
