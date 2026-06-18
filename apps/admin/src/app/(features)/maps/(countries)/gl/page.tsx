'use client';
import { useState } from 'react';
import GlMap from '../../(maps)/GLMap';
import MapContent from '../../components/MapContent';
import { GL_MAP_CONTENT } from '../../types/constants';

const GreenlandPage = () => {
   const [activeProvinceId, setActiveProvinceId] = useState<string | null>('4');
   return (
      <div className="grid grid-cols-12 gap-4">
         <div className="col-span-12 md:col-span-5">
            <GlMap setActiveProvinceId={setActiveProvinceId} />
         </div>
         <div className="col-span-12 md:col-span-7">
            <MapContent
               key={GL_MAP_CONTENT}
               provinceID={Number(activeProvinceId)}
               countryID={200}
            />
         </div>
      </div>
   );
};

export default GreenlandPage;
