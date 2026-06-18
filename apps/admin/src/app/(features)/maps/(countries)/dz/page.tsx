'use client';
import { useState } from 'react';
import DzMap from '../../(maps)/DZMap';
import MapContent from '../../components/MapContent';
import { DZ_MAP_CONTENT } from '../../types/constants';

const AfghanistanMapPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>('4');

   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <DzMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={DZ_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
               countryID={3}
            />
         </div>
      </div>
   );
};

export default AfghanistanMapPage;
