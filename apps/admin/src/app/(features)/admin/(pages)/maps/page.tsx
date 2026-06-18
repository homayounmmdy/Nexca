'use client';
import { CountriesMapData } from '@/app/(features)/maps/data/countries';
import { Button, ErrorText, Spinner } from '@/components/atoms';
import { SearchBar } from '@/components/molecules';
import { MAPS_API_URL } from '@/config/apiConstants';
import {
   ALL_MAPS_CONTENT_QUERY_KEY,
   COUNTRY_KEY,
   PROVINCE_KEY,
} from '@/config/Constants';
import { getProvinceData } from '@/config/getProvinceData';
import RouteConfig from '@/config/RouteConfig';
import useFetch from '@/hooks/useFetch';
import { MapsCashType } from '@/types/CashTypes';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImgTable from '../../components/ImgTable';

const Posts = () => {
   const data = useFetch(ALL_MAPS_CONTENT_QUERY_KEY, MAPS_API_URL);
   const router = useRouter();
   const searchParams = useSearchParams();

   const [posts, setPosts] = useState(data?.data || []);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);

   // Get initial search params from URL
   const initialSearchQuery = searchParams.get('query') || '';
   const initialCountry = searchParams.get(COUNTRY_KEY) || '';
   const initialProvince = searchParams.get(PROVINCE_KEY) || '';

   const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
   const [selectedService, setSelectedService] = useState(initialCountry);
   const [selectedSection, setSelectedSection] = useState(initialProvince);
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   useEffect(() => {
      setPosts(data?.data || []);
   }, [data]);

   // Update URL with all filter parameters
   useEffect(() => {
      const handler = setTimeout(() => {
         const params = new URLSearchParams();
         if (searchQuery) params.set('query', searchQuery);
         if (selectedService) params.set(COUNTRY_KEY, selectedService);
         if (selectedSection) params.set(PROVINCE_KEY, selectedSection);

         router.push(`?${params.toString()}`);
      }, 400);

      return () => clearTimeout(handler);
   }, [searchQuery, selectedService, selectedSection, router]);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;

   const filteredPosts = posts
      .sort(
         (a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .filter((post: MapsCashType) => {
         const matchesSearch = post.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
         const matchesCountry =
            !selectedService || post.country === selectedService;
         const matchesProvince =
            !selectedSection || post.province === selectedSection;

         return matchesSearch && matchesCountry && matchesProvince;
      });

   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   const handleSearch = (event: { target: { value: string } }) => {
      setSearchQuery(event.target.value);
      setCurrentPage(1);
   };

   const handleServiceChange = (event: { target: { value: string } }) => {
      setSelectedService(event.target.value);
      setSelectedSection(''); // Reset province when country changes
      setCurrentPage(1);
   };

   const handleSectionChange = (event: { target: { value: string } }) => {
      setSelectedSection(event.target.value);
      setCurrentPage(1);
   };

   const clearFilters = () => {
      setSelectedService('');
      setSelectedSection('');
      setSearchQuery('');
      setCurrentPage(1);
   };

   if (!data?.data) {
      return <Spinner />;
   }

   return (
      <div className="p-5">
         <div className="flex w-full justify-center">
            <Link
               href={`${process.env.NEXT_PUBLIC_API_URL}${RouteConfig.admin.maps.new}`}
            >
               <Button color="btn-primary" className="btn-outline mb-3">
                  New Content
               </Button>
            </Link>
         </div>
         <div className="space-y-4">
            <SearchBar
               searchQuery={searchQuery}
               onSearchChange={handleSearch}
               onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
            />

            {isFilterOpen && (
               <div className="rounded-md border border-indigo-600 p-4 shadow-xs">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                     <div>
                        <label className="mb-1 block text-sm font-medium">
                           Country
                        </label>
                        <select
                           value={selectedService}
                           onChange={handleServiceChange}
                           className="select select-primary mb-2 w-full"
                        >
                           <option value="">All Countries</option>
                           {CountriesMapData.map((country) => (
                              <option key={country.secid} value={country.secid}>
                                 {country.name}
                              </option>
                           ))}
                        </select>
                     </div>
                     <div>
                        <label className="mb-1 block text-sm font-medium">
                           Province
                        </label>
                        <select
                           value={selectedSection}
                           onChange={handleSectionChange}
                           className="select select-primary mb-2 w-full"
                           disabled={!selectedService}
                        >
                           <option value="">All Provinces</option>
                           {getProvinceData(selectedService).map((province) => (
                              <option
                                 key={province.secid}
                                 value={province.secid}
                              >
                                 {province.name}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                     <Button onClick={clearFilters} color="btn-primary">
                        Clear Filters
                     </Button>
                  </div>
               </div>
            )}

            {currentPosts.length > 0 ? (
               <ImgTable
                  path="maps"
                  currentPosts={currentPosts}
                  postsPerPage={postsPerPage}
                  totalPosts={filteredPosts.length}
                  currentPage={currentPage}
                  onPaginate={paginate}
               />
            ) : (
               <ErrorText>No Contet found.</ErrorText>
            )}
         </div>
      </div>
   );
};

export default Posts;
