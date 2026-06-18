'use client';
import RouteConfig from '@/config/RouteConfig';
import useGetStats from '@/hooks/useGetStats';
import Link from 'next/link';
import { CgFeed } from 'react-icons/cg';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FiServer } from 'react-icons/fi';
import { LuMessagesSquare } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { RxSection } from 'react-icons/rx';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Stat from './Stat';

const Stats = () => {
   const data = useGetStats();

   const AllStats = [
      {
         href: RouteConfig.admin.posts.base,
         title: 'Available Posts',
         length: data.posts.length,
         icon: CgFeed,
      },
      {
         href: RouteConfig.admin.sections.base,
         title: 'Available Sections',
         length: data.sections.length,
         icon: RxSection,
      },
      {
         href: RouteConfig.admin.services.base,
         title: 'Available Services',
         length: data.services.length,
         icon: FiServer,
      },
      {
         href: RouteConfig.admin.maps.base,
         title: 'Contents for map',
         length: data.maps.length,
         icon: FaMapMarkedAlt,
      },
      {
         href: RouteConfig.admin.contacts,
         title: 'List of Messages',
         length: data.contacts.length,
         icon: LuMessagesSquare,
      },
      {
         href: RouteConfig.admin.emails,
         title: 'List of Emails',
         length: data.emails.length,
         icon: MdOutlineEmail,
      },
   ];
   return (
      <Swiper
         className="h-full"
         autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         }}
         loop={true}
         modules={[Autoplay, Scrollbar, A11y]}
         scrollbar={{ draggable: true }}
         spaceBetween={10}
         breakpoints={{
            0: {
               slidesPerView: 1,
            },
            420: {
               slidesPerView: 1.4,
            },
            576: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1300: {
               slidesPerView: 4,
            },
         }}
      >
         {AllStats.map((stat) => {
            const LinkIcon = stat.icon;
            return (
               <SwiperSlide className="py-5 h-full" key={stat.title}>
                  <Link href={stat.href} className="h-full">
                     <Stat
                        title={stat.title}
                        number={stat.length}
                        icon={<LinkIcon />}
                     />
                  </Link>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default Stats;
