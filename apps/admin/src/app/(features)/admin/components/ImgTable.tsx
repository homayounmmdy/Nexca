import { PostsCashType } from '@/types/CashTypes';
import ItemsTable from './ItemsTable';
import Pagination from './Pagination';

interface ImgTableProps {
   path: string;
   currentPosts: PostsCashType[];
   postsPerPage: number;
   totalPosts: number;
   currentPage: number;
   onPaginate: (pageNumber: number) => void;
}

const ImgTable = ({
   path,
   currentPosts,
   postsPerPage,
   totalPosts,
   currentPage,
   onPaginate,
}: ImgTableProps) => {
   return (
      <div className="shadow-3xl shadow-shadow-500 relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-4">
         <div className="overflow-x-auto">
            <table className="table">
               <thead>
                  <tr>
                     <th>Title</th>
                     <th>Edit</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {currentPosts.map((post) => (
                     <ItemsTable post={post} baseURL={path} key={post._id} />
                  ))}
               </tbody>
            </table>
            <Pagination
               postsPerPage={postsPerPage}
               totalPosts={totalPosts}
               paginate={onPaginate}
               currentPage={currentPage}
            />
         </div>
      </div>
   );
};

export default ImgTable;
