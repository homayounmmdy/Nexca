import {
   CountriesMapData,
   CountriesMapDataType,
} from '@/app/(features)/maps/data/countries';
import { HeaderModeType } from '@/types/entities';
import DropdownMenu from './DropdownMenu';

const MapMenu = ({ type = 'desktop' }: { type?: HeaderModeType }) => {
   // this number is come from list of item in HeaderMenuConfig the last item was 4 and this is 5 is services and 6 is map
   const MapId = 6;

   const countryChildren = CountriesMapData?.map(
      (country: CountriesMapDataType) => ({
         name: country.name,
         href: `/maps/${country.code.toLowerCase()}`,
      })
   );
   return (
      <DropdownMenu
         type={type}
         id={MapId}
         menuName="World Map"
         menuHref="/maps"
         childrenItems={countryChildren}
      />
   );
};

export default MapMenu;
