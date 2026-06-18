import React from 'react';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

const MapWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="MapSectionContainer">
         <Link
            className="backWorldLink"
            href="/maps"
            title="Link for back to world map"
         >
            <IoMdArrowBack color="#FFF" />
            <span className="hidden md:block">Back World page</span>
         </Link>
         <div className="MapSection">{children}</div>
      </div>
   );
};

export default MapWrapper;
