'use client';
import { useState } from 'react';
import AFMap from '../../(maps)/AFMap';
import MapContent from '../../components/MapContent';
import { AF_MAP_CONTENT } from '../../types/constants';

const AfghanistanMapPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>(
      '14'
   );

   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <AFMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={AF_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
            />
         </div>
      </div>
   );
};

export default AfghanistanMapPage;
