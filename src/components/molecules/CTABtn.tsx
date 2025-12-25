import Link from 'next/link';
import { IoArrowUpCircleSharp } from 'react-icons/io5';
import { Button } from '../atoms';

const CTABtn = ({ children, href }: { children: string; href: string }) => {
   return (
      <Link href={href} title={children} aria-label={`${children} link`}>
         <Button
            removeDefaultStyle
            color="btn-null"
            className="cursor-pointer p-3 group relative isolation-auto z-10 mx-auto flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-indigo-500 px-3 py-1 text-lg shadow-xl backdrop-blur-md before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-indigo-500 before:transition-all before:duration-700 hover:text-gray-50 hover:before:left-0 hover:before:w-full hover:before:scale-150 hover:before:duration-700 lg:font-semibold"
         >
            <IoArrowUpCircleSharp
               size={40}
               className="rotate-45 justify-end rounded-full p-1 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none"
            />{' '}
            {children}
         </Button>
      </Link>
   );
};

export default CTABtn;
