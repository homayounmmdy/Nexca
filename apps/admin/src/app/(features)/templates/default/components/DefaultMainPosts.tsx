'use client';
import { SectionController } from '@/util/controller/sectionsController';
import MainSec from './MainSec';
import NextMain from './NextMain';

const DefaultMainPosts = () => {
   return (
      <SectionController sectionId={1}>
         <div className="grid grid-cols-12 md:gap-9">
            <MainSec />
            <NextMain />
         </div>
      </SectionController>
   );
};

export default DefaultMainPosts;
