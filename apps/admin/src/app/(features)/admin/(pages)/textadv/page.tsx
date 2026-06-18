'use client';
import { ErrorText, Spinner } from '@/components/atoms';
import { Button } from '@/components/atoms';
import { DeleteBtn } from '@/components/molecules';
import { TEXTADV_API_URL } from '@/config/apiConstants';
import { ALL_TEXTADV_QUERY_KEY } from '@/config/Constants';
import RouteConfig from '@/config/RouteConfig';
import useFetch from '@/hooks/useFetch';
import { TextAdvCashType } from '@/types/CashTypes';
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';

const AdminTextAdvPage: React.FC = () => {
   const { data: sections, loading } = useFetch(
      ALL_TEXTADV_QUERY_KEY,
      TEXTADV_API_URL
   );
   if (loading) {
      return <Spinner />;
   }

   const sortedData = sections
      ? [...sections].sort((a, b) => a.textadvid - b.textadvid)
      : [];

   return (
      <>
         <div className="overflow-x-auto">
            <div className="flex w-full justify-center">
               <Link href={RouteConfig.admin.textadv.new}>
                  <Button color="btn-primary" className="btn-outline m-3">
                     New textadv
                  </Button>
               </Link>
            </div>
            {sortedData?.length === 0 ? (
               <ErrorText>There are currently no text adv created.</ErrorText>
            ) : (
               <table className="table table-zebra my-2">
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th className="hidden lg:block">Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {sortedData?.map((item: TextAdvCashType) => (
                        <>
                           <tr key={item._id}>
                              <td>{item.textadvid}</td>
                              <td>{item.advname}</td>
                              <td>{item.body}</td>
                              <td>
                                 <Link
                                    href={`${RouteConfig.admin.textadv.base}/${item._id}`}
                                 >
                                    <Button
                                       color="btn-warning"
                                       className="mb-2 me-2"
                                    >
                                       <CiEdit size={25} />
                                    </Button>
                                 </Link>
                              </td>
                              <td>
                                 <DeleteBtn path="textadv" id={item._id} />
                              </td>
                           </tr>
                        </>
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </>
   );
};

export default AdminTextAdvPage;
