'use client';
import { useState } from 'react';
import AlMap from '../../(maps)/ALMap';
import MapContent from '../../components/MapContent';
import { AL_MAP_CONTENT } from '../../types/constants';

const AlbaniaPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>(
      '11'
   );
   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <AlMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={AL_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
               countryID={2}
            />
         </div>
      </div>
   );
};

export default AlbaniaPage;
