'use client';
import { FormatTime } from '@/components/molecules';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegCalendar } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

function VerticalCard({ data }: { data: PostsCashType }) {
   const dataVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };
   const postLink = postLinkGenerator(data._id, data.title);
   return (
      <motion.div
         variants={dataVariants}
         className="bg-base-200 group rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      >
         <Link href={postLink} className="md:flex">
            <div className="md:w-1/2">
               <Image
                  src={data.imgurl}
                  alt={data.title}
                  width={608}
                  height={396}
                  loading="eager"
                  fetchPriority="high"
                  priority
                  className="w-full h-64 md:h-full object-cover"
               />
            </div>
            <div className="md:w-1/2 p-8">
               <Link
                  href={postLink}
                  title={data.title}
                  className="group-hover:text-blue-600 text-2xl line-clamp-2 lg:line-clamp-3 md:text-3xl font-bold  mb-4 leading-tight"
               >
                  {data.title}
               </Link>

               <p className=" line-clamp-3 lg:line-clamp-5 text-lg mb-6 leading-relaxed">
                  {data.description}
               </p>

               <div className="flex datas-center justify-between">
                  <div className="flex datas-center space-x-3 justify-center">
                     <div className="flex items-center">
                        <FiUser
                           data-testid="user-icon"
                           className="mr-1"
                           size={12}
                        />
                        <p className="font-medium " data-testid="author-sec">
                           {data.author ? data.author : 'unknown'}
                        </p>
                     </div>
                     <div className=" flex items-center">
                        <FaRegCalendar
                           data-testid="calender-icon"
                           className="mr-1"
                           size={12}
                        />
                        <p className="text-sm">
                           <FormatTime timestamp={data.createdAt} />
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </motion.div>
   );
}

export default VerticalCard;
