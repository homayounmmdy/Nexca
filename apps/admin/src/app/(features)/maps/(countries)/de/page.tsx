'use client';
import { useState } from 'react';
import DEMap from '../../(maps)/DEMap';
import MapContent from '../../components/MapContent';
import { DE_MAP_CONTENT } from '../../types/constants';

const GermanyPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>('3');
   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <DEMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={DE_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
               countryID={62}
            />
         </div>
      </div>
   );
};

export default GermanyPage;
