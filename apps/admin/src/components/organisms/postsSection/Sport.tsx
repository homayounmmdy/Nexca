'use client';
import { SectionsTitle } from '@/components/atoms';
import { MAIN_SPORT_QUERY_KEY } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const Sport = () => {
   const { data } = useGetSection(MAIN_SPORT_QUERY_KEY, -3, 6);

   const Main = data?.slice(-1);

   const nextMain = data?.slice(0, -1).slice(-3);

   return (
      <section className="py-12">
         <SectionsTitle>Sport</SectionsTitle>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Featured Post (Left) */}
            {Main?.map((item: PostsCashType) => {
               const postLink = postLinkGenerator(item._id, item.title);
               return (
                  <Link
                     className="lg:col-span-2 cursor-pointer relative group transition-all hover:scale-[102%] overflow-hidden rounded-xl shadow-2xl"
                     href={postLink}
                     title={item.title.slice(0, 60)}
                     key={item._id}
                  >
                     <div className="h-full">
                        <div className="relative h-full min-h-[500px]">
                           <Image
                              src={
                                 !item.imgurl
                                    ? '/static/Image/logo.jpg'
                                    : item.imgurl
                              }
                              alt={item.title.slice(0, 60)}
                              width={941.338}
                              height={500}
                              className="w-full h-full object-cover absolute inset-0"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/30 to-transparent" />
                           <div className="absolute bottom-0 left-0 p-8 text-white">
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                 {item.title.slice(0, 60)}
                              </h2>
                              <p className="text-lg mb-6 max-w-lg">
                                 {item.description.slice(0, 90)}
                              </p>
                              <div>
                                 <button className="flex items-center text-white font-medium group">
                                    Read Article
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </Link>
               );
            })}

            {/* Secondary Posts (Right) */}
            <div className="space-y-6">
               {nextMain?.map((item: PostsCashType) => {
                  const postLink = postLinkGenerator(item._id, item.title);
                  return (
                     <Link
                        href={postLink}
                        key={item._id}
                        title={item.title.slice(0, 60)}
                        className="relative group transition-all hover:scale-[102%] overflow-hidden rounded-xl shadow-lg h-[242px] block"
                     >
                        <div className="h-full">
                           <div className="relative h-full">
                              <Image
                                 width={450}
                                 height={242}
                                 src={
                                    !item.imgurl
                                       ? '/static/Image/logo.jpg'
                                       : item.imgurl
                                 }
                                 alt={item.title.slice(0, 60)}
                                 className="w-full h-full object-cover absolute inset-0"
                                 loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/30 to-transparent" />
                              <div className="absolute bottom-0 left-0 p-6 text-white">
                                 <h3 className="text-xl font-bold mb-2">
                                    {item.title.slice(0, 60)}
                                 </h3>
                                 <div>
                                    <button className="flex items-center text-white text-sm font-medium group">
                                       Read More
                                       <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Link>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Sport;
