'use client';
import { SERVICES_API_URL } from '@/config/apiConstants';
import { SERVICES_QUERY_KEY } from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { ServicesCashType } from '@/types/CashTypes';
import { HeaderModeType } from '@/types/entities';
import DropdownMenu from './DropdownMenu';

const ServicesMenu = ({ type = 'desktop' }: { type?: HeaderModeType }) => {
   const { data, loading } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);

   const serviceChildren = data?.map((nav: ServicesCashType) => ({
      name: nav.name,
      href: `/services/${nav.secid}`,
   }));

   // this number is come from list of item in HeaderMenuConfig the last item was 4 and this is 5
   const serviceId = 5;

   return (
      <DropdownMenu
         type={type}
         id={serviceId}
         menuName="services"
         menuHref="/services/1"
         childrenItems={serviceChildren}
         loading={loading}
      />
   );
};

export default ServicesMenu;
