import { Button } from '@/components/atoms';
import { DeleteBtn } from '@/components/molecules';
import RouteConfig from '@/config/RouteConfig';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';
import { CiEdit } from 'react-icons/ci';

interface Props {
   post: PostsCashType;
   baseURL: string;
}

const ItemsTable = ({ post, baseURL }: Props) => {
   const postLink = postLinkGenerator(post._id, post.title);
   return (
      <tr key={post._id}>
         <td>
            <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
               <div className="avatar">
                  <Link
                     href={postLink}
                     className="mask mask-squircle h-32 w-32"
                  >
                     <Image
                        src={
                           !post.imgurl ? '/static/Image/logo.jpg' : post.imgurl
                        }
                        width={300}
                        height={300}
                        alt={post.title}
                        className="bg-gray-600"
                     />
                  </Link>
               </div>
               <p className="font-normal md:font-bold">
                  {post.title.slice(0, 60)}
               </p>
            </div>
         </td>
         <td>
            <Link
               href={`${process.env.NEXT_PUBLIC_API_URL}${RouteConfig.admin.base}/${baseURL}/${post._id}`}
            >
               <Button color="btn-warning" className="mb-2 me-2">
                  <CiEdit size={25} />
               </Button>
            </Link>
         </td>
         <th>
            <DeleteBtn
               path={baseURL}
               id={post._id}
               masterEditor={post.masterEditor}
            />
         </th>
      </tr>
   );
};

export default ItemsTable;
