'use client';
import { MAPS_API_URL } from '@/config/apiConstants';
import { MapsCashType } from '@/types/CashTypes';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetMapContent = (
   queryKey: string,
   lengthItem: number,
   countryID: number,
   provinceID: number
) => {
   const {
      data: mainData,
      isLoading: loading,
      error,
   } = useQuery({
      queryKey: [queryKey],
      queryFn: () => axios.get(MAPS_API_URL).then((res) => res.data),
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
      refetchOnWindowFocus: false, // Avoid unnecessary refetches
      retry: false, // Disable retries on failure
   });

   const AllProvinceOFCountry = mainData?.data?.filter(
      (item: MapsCashType) => item.country === countryID.toString()
   );

   const filteredData = AllProvinceOFCountry?.filter(
      (element: MapsCashType) => element.province === provinceID.toString()
   );

   if (error) {
      throw error;
   }
   const data = filteredData?.slice(lengthItem);

   return { data, loading };
};

export default useGetMapContent;
