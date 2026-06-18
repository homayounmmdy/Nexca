import { Button } from '@/components/atoms';
import { SectionCashType, ServicesCashType } from '@/types/CashTypes';

interface FilterPanelProps {
   selectedService: string;
   selectedSection: string;
   services: ServicesCashType[];
   sections: SectionCashType[];
   onServiceChange: (event: { target: { value: string } }) => void;
   onSectionChange: (event: { target: { value: string } }) => void;
   onClearFilters: () => void;
}

const FilterPanel = ({
   selectedService,
   selectedSection,
   services,
   sections,
   onServiceChange,
   onSectionChange,
   onClearFilters,
}: FilterPanelProps) => {
   return (
      <div className="rounded-md border border-indigo-600 p-4 shadow-xs">
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
               <label className="mb-1 block text-sm font-medium">Service</label>
               <select
                  value={selectedService}
                  onChange={onServiceChange}
                  className="select select-primary mb-2 w-full"
               >
                  <option value="">All Services</option>
                  {services.map((service) => (
                     <option key={service._id} value={service.secid}>
                        {service.name}
                     </option>
                  ))}
               </select>
            </div>
            <div>
               <label className="mb-1 block text-sm font-medium">Section</label>
               <select
                  value={selectedSection}
                  onChange={onSectionChange}
                  className="select select-primary mb-2 w-full"
               >
                  <option value="">All Sections</option>
                  {sections.map((section) => (
                     <option key={section.__v} value={section.secid}>
                        {section.name}
                     </option>
                  ))}
               </select>
            </div>
         </div>
         <div className="mt-4 flex justify-end">
            <Button onClick={onClearFilters} color="btn-primary">
               Clear Filters
            </Button>
         </div>
      </div>
   );
};

export default FilterPanel;
