import { Button } from '@/components/atoms';
import { DeleteBtn } from '@/components/molecules';
import RouteConfig from '@/config/RouteConfig';
import { ReleaseCashType } from '@/types/CashTypes';
import { checkMaster } from '@/util/Util';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

interface Props {
   item: ReleaseCashType;
   index: number;
}

function ReleaseSec({ item, index }: Props) {
   let masterEditor = checkMaster();
   return (
      <li>
         <div className="timeline-middle">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               fill="currentColor"
               className="h-5 w-5"
            >
               <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
               />
            </svg>
         </div>
         <div
            className={`${
               index % 2 === 0
                  ? 'timeline-start md:text-end'
                  : 'timeline-end md:text-start'
            } mb-10 `}
         >
            <Link
               href={item?.link || '#'}
               title={item.title}
               className="text-lg font-black"
            >
               {item.title}{' '}
            </Link>
            <p>{item.description}</p>

            <span
               className={`flex gap-3 my-2 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
               } `}
            >
               {masterEditor ? (
                  <>
                     <Link
                        href={`${RouteConfig.admin.release.base}/${item._id}`}
                        style={{ display: 'contents' }}
                     >
                        <Button color="btn-warning" type="button">
                           <FaEdit />
                        </Button>
                     </Link>
                     <DeleteBtn path="release" id={item._id} />
                  </>
               ) : null}
            </span>
         </div>
         <hr />
      </li>
   );
}

export default ReleaseSec;
