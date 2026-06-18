import Link from 'next/link';
import { CountriesMapData } from '../data/countries';

const ListOfCountries = () => {
   return (
      <div className="pb-4 md:py-4">
         <h2 className="font-bold text-center pb-2 text-lg md:text-2xl">
            Available countries map
         </h2>
         <div className="flex gap-3 flex-wrap ">
            {CountriesMapData.map((country) => (
               <Link
                  href={`/maps/${country.code.toLowerCase()}`}
                  title={`link to map of ${country.name}`}
                  key={country.secid}
                  className="badge badge-lg hover:bg-indigo-600 hover:text-white badge-soft badge-primary"
               >
                  {country.name}
               </Link>
            ))}
         </div>
      </div>
   );
};

export default ListOfCountries;
