import { HeaderModeType } from '@/types/entities';
import Link from 'next/link';

// Base props
interface BaseProps {
   loading?: boolean;
}

// Desktop-specific props
interface DesktopProps extends BaseProps {
   type: 'desktop';
}

// Mobile-specific props
interface MobileProps extends BaseProps {
   type: 'mobile';
   active: number | null;
   id: number;
}

// Combined type
type Props = DesktopProps | MobileProps;

const MenuChildren = (
   props: Props & { children?: Array<{ name: string; href: string }> }
) => {
   const { children, loading = false } = props;
   if (!children) return null;

   const DesktopChildren = (
      <ul className="absolute top-12 right-0 hidden group-hover:flex bg-base-300 rounded-xl p-2.5 w-full gap-2.5 flex-wrap">
         {loading ? (
            <>
               <div className="skeleton h-8 w-20"></div>
               <div className="skeleton h-8 w-20"></div>
               <div className="skeleton h-8 w-20"></div>
               <div className="skeleton h-8 w-20"></div>
            </>
         ) : (
            children.map((nav) => (
               <li key={nav.name}>
                  <Link href={nav.href} title={nav.name}>
                     {nav.name}
                  </Link>
               </li>
            ))
         )}
      </ul>
   );

   const MobileChildren = (
      <ul
         className={`grid grid-cols-2 gap-4 mt-2 transition-all duration-300 ease-in-out overflow-hidden 
               ${props.type === 'mobile' && props.active === props.id ? 'max-h-screen' : 'max-h-0'}`}
      >
         {children.map((nav) => (
            <li
               key={nav.name}
               className="rounded-xl border-2 border-indigo-700 p-2"
            >
               <Link href={nav.href} title={nav.name}>
                  {nav.name}
               </Link>
            </li>
         ))}
      </ul>
   );
   return props.type === 'desktop' ? DesktopChildren : MobileChildren;
};

export default MenuChildren;
