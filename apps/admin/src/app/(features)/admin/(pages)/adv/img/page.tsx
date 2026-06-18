'use client';
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import useFetch from '@/hooks/useFetch';
import { ALL_IMG_ADV_QUERY_KEY } from '@/config/Constants';
import { IMG_ADV_API_URL } from '@/config/apiConstants';
import { Spinner, Button, ErrorText } from '@/components/atoms';
import { DeleteBtn } from '@/components/molecules';
import RouteConfig from '@/config/RouteConfig';
import { ImgAdvCashType } from '@/types/CashTypes';
import Image from 'next/image';

const AdminImgAdvPage: React.FC = () => {
   const { data: sections, loading } = useFetch(
      ALL_IMG_ADV_QUERY_KEY,
      IMG_ADV_API_URL
   );
   if (loading) {
      return <Spinner />;
   }

   const sortedData = sections
      ? [...sections].sort((a, b) => a.advId - b.advId)
      : [];

   return (
      <>
         <div className="overflow-x-auto">
            <div className="flex w-full justify-center">
               <Link href={RouteConfig.admin.adv.img.new}>
                  <Button color="btn-primary" className="btn-outline m-3">
                     New img adv
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
                        <th>Adv Image</th>
                        <th className="hidden lg:block">Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {sortedData?.map((item: ImgAdvCashType) => (
                        <>
                           <tr key={item._id}>
                              <td>{item.advId}</td>
                              <td>{item.advName}</td>
                              <td>
                                 <Image
                                    src={item.imgURL}
                                    alt={item.imgAlt || item.advName}
                                    width={56}
                                    height={56}
                                    className="rounded w-14 h-14"
                                 />
                              </td>
                              <td className="hidden lg:block">{item.body}</td>
                              <td>
                                 <Link
                                    href={`${RouteConfig.admin.adv.img.base}/${item._id}`}
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
                                 <DeleteBtn path="adv/img" id={item._id} />
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

export default AdminImgAdvPage;
