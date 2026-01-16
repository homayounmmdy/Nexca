import TabContent from '../../(components)/TabContent';
import { useCategoryStore } from '../useCategoryStore';
import { FaRegNewspaper } from 'react-icons/fa';
import { LuBrainCircuit } from 'react-icons/lu';
import { MdBiotech } from 'react-icons/md';
import { FiCpu, FiDatabase, FiSmartphone } from 'react-icons/fi';

const CategoriesSec = () => {
   const { activeCategory, setActiveCategory } = useCategoryStore();
   return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="flex flex-wrap gap-4 justify-center">
            {AI_HUB_categories.map((category) => (
               <TabContent
                  key={category.id}
                  category={category}
                  setActiveCategory={setActiveCategory}
                  activeCategory={activeCategory}
               />
            ))}
         </div>
      </section>
   );
};

export default CategoriesSec;

const AI_HUB_categories = [
   { id: 'all', name: 'ALL Posts', icon: FaRegNewspaper },
   { id: '10', name: 'AI News', icon: LuBrainCircuit },
   { id: '11', name: 'Technology', icon: MdBiotech },
   { id: '12', name: 'Research', icon: FiDatabase },
   { id: '13', name: 'Enterprise', icon: FiCpu },
   { id: '14', name: 'Healthcare', icon: FiSmartphone },
];
