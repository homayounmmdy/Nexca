import { SectionCashType } from '@/types/CashTypes';

export const getSectionsData = (
   sections: SectionCashType[],
   templateId: string
) => {
   const finalData: FinalSectionCashType[] = [];

   sections?.map((section: SectionCashType) => {
      return (
         section.templates == templateId &&
         finalData.push({
            secid: section.secid,
            name: section.name,
         })
      );
   });

   return finalData;
};

interface FinalSectionCashType {
   secid: string | number;
   name: string;
}
