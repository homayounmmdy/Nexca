'use client';
import { ErrorText, Spinner } from '@/components/atoms';
import { Button } from '@/components/atoms';
import { DeleteBtn } from '@/components/molecules';
import { RELEASE_API_URL } from '@/config/apiConstants';
import { ALL_RELEASE_QUERY_KEY } from '@/config/Constants';
import RouteConfig from '@/config/RouteConfig';
import useFetch from '@/hooks/useFetch';
import { ReleaseCashType } from '@/types/CashTypes';
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { checkMaster } from '@/util/Util';

const AdminReleasePage: React.FC = () => {
   const { data: sections, loading } = useFetch(
      ALL_RELEASE_QUERY_KEY,
      RELEASE_API_URL
   );
   if (loading) {
      return <Spinner />;
   }

   const sortedData = sections
      ? [...sections].sort((a, b) => a.createdAt - b.createdAt)
      : [];

   let masterEditor = checkMaster();
   return (
      <>
         <div className="overflow-x-auto">
            {masterEditor ? (
               <div className="flex w-full justify-center">
                  <Link href={RouteConfig.admin.release.new}>
                     <Button color="btn-primary" className="btn-outline m-3">
                        New release
                     </Button>
                  </Link>
               </div>
            ) : null}
            {sortedData?.length === 0 ? (
               <ErrorText>There are currently no text adv created.</ErrorText>
            ) : (
               <table className="table table-zebra my-2">
                  <thead>
                     <tr>
                        <th>Title</th>
                        <th className="hidden lg:block">Description</th>
                        <th>Date</th>
                        {masterEditor ? <th>Edit</th> : null}
                        {masterEditor ? <th>Delete</th> : null}
                     </tr>
                  </thead>
                  <tbody>
                     {sortedData?.map((item: ReleaseCashType) => (
                        <>
                           <tr key={item._id}>
                              <td>{item.title}</td>
                              <td className="hidden lg:block">
                                 {item.description}
                              </td>
                              <td>{item.date}</td>
                              {masterEditor ? (
                                 <>
                                    <td>
                                       <Link
                                          href={`${RouteConfig.admin.release.base}/${item._id}`}
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
                                       <DeleteBtn
                                          path="release"
                                          id={item._id}
                                       />
                                    </td>
                                 </>
                              ) : null}
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

export default AdminReleasePage;
