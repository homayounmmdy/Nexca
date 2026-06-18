'use client';
import { ErrorText, Spinner } from '@/components/atoms';
import { SearchBar } from '@/components/molecules';
import {
   POST_API_URL,
   SECTIONS_API_URL,
   SERVICES_API_URL,
} from '@/config/apiConstants';
import {
   ALL_POSTS_QUERY_KEY,
   SECTIONS_QUERY_KEY,
   SERVICES_QUERY_KEY,
} from '@/config/Constants';
import useFetch from '@/hooks/useFetch';
import { PostsCashType } from '@/types/CashTypes';
import { checkMaster } from '@/util/Util';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FilterPanel from './components/FilterPanel';
import PostsTable from './components/PostsTable';

const Posts = () => {
   const data = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);
   const router = useRouter();
   const searchParams = useSearchParams();

   const [posts, setPosts] = useState(data?.data || []);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);

   // Get initial search params from URL
   const initialSearchQuery = searchParams.get('query') || '';
   const initialService = searchParams.get('service') || '';
   const initialSection = searchParams.get('section') || '';

   const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
   const [selectedService, setSelectedService] = useState(initialService);
   const [selectedSection, setSelectedSection] = useState(initialSection);
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   // Extract unique services and sections from posts
   const { data: services, loading: serviceLoading } = useFetch(
      SERVICES_QUERY_KEY,
      SERVICES_API_URL
   );

   const { data: sections, loading: sectionLoading } = useFetch(
      SECTIONS_QUERY_KEY,
      SECTIONS_API_URL
   );

   useEffect(() => {
      setPosts(data?.data || []);
   }, [data]);

   // Update URL with all filter parameters
   useEffect(() => {
      const handler = setTimeout(() => {
         const params = new URLSearchParams();
         if (searchQuery) params.set('query', searchQuery);
         if (selectedService) params.set('service', selectedService);
         if (selectedSection) params.set('section', selectedSection);

         router.push(`?${params.toString()}`);
      }, 400);

      return () => clearTimeout(handler);
   }, [searchQuery, selectedService, selectedSection, router]);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const isMaster = checkMaster();

   const filteredPosts = posts
      .sort(
         (a: { createdAt: string }, b: { createdAt: string }) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
      .filter((post: PostsCashType) => {
         const matchesSearch = post.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
         const matchesService =
            !selectedService || post.services === selectedService;
         const matchesSection =
            !selectedSection || post.section === selectedSection;
         const matchesMasterEditor = isMaster || !post.masterEditor;

         return (
            matchesSearch &&
            matchesService &&
            matchesSection &&
            matchesMasterEditor
         );
      });

   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   const handleSearch = (event: { target: { value: string } }) => {
      setSearchQuery(event.target.value);
      setCurrentPage(1);
   };

   const handleServiceChange = (event: { target: { value: string } }) => {
      setSelectedService(event.target.value);
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
         <div className="space-y-4">
            <SearchBar
               searchQuery={searchQuery}
               onSearchChange={handleSearch}
               onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
            />

            {isFilterOpen && (
               <FilterPanel
                  selectedService={selectedService}
                  selectedSection={selectedSection}
                  services={services}
                  sections={sections}
                  onServiceChange={handleServiceChange}
                  onSectionChange={handleSectionChange}
                  onClearFilters={clearFilters}
               />
            )}

            {currentPosts.length > 0 ? (
               <PostsTable
                  currentPosts={currentPosts}
                  postsPerPage={postsPerPage}
                  totalPosts={filteredPosts.length}
                  currentPage={currentPage}
                  onPaginate={paginate}
               />
            ) : (
               <ErrorText>No posts found.</ErrorText>
            )}
         </div>
      </div>
   );
};

export default Posts;
