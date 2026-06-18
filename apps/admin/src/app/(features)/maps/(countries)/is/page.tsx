'use client';
import { useState } from 'react';
import IsMap from '../../(maps)/ISMap';
import MapContent from '../../components/MapContent';
import { IS_MAP_CONTENT } from '../../types/constants';

const IcelandPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>('1');
   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <IsMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={IS_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
               countryID={73}
            />
         </div>
      </div>
   );
};

export default IcelandPage;
