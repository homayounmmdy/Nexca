import React from 'react';
import { Container } from '@/components/atoms';
import MapWrapper from './components/MapWrapper';
import WorldMap from './components/WorldMap';
import ListOfCountries from './components/ListOfCountries';

function MainMapPage() {
   return (
      <Container>
         <div className="grid grid-cols-12 gap-4" id="worldMapPage">
            <div className="col-span-12 md:col-span-8">
               <MapWrapper>
                  <WorldMap />
               </MapWrapper>
            </div>
            <div className="col-span-12 md:col-span-4">
               <ListOfCountries />
            </div>
         </div>
      </Container>
   );
}

export default MainMapPage;
