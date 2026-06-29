import { Input, Button } from '@/components/atoms';
import { FiSearch, FiFilter } from 'react-icons/fi';

interface SearchBarProps {
   searchQuery: string;
   onSearchChange: (event: { target: { value: string } }) => void;
   onFilterToggle: () => void;
}

const SearchBar = ({
   searchQuery,
   onSearchChange,
   onFilterToggle,
}: SearchBarProps) => {
   return (
      <div className="flex flex-col gap-4 md:flex-row">
         <div className="flex-1">
            <Input
               type="text"
               placeholder="Search posts"
               value={searchQuery}
               onChange={onSearchChange}
               icon={
                  <FiSearch
                     size={24}
                     className="h-4 w-4 opacity-70"
                     color="#4F46E5"
                  />
               }
               style="w-full"
               color="input-primary"
            />
         </div>
         <Button
            color="btn-primary"
            onClick={onFilterToggle}
            className="btn-outline"
         >
            <FiFilter className="h-4 w-4" />
            Filters
         </Button>
      </div>
   );
};

export default SearchBar;
