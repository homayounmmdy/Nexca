'use client';
import LatestPosts from '../(components)/LatestPosts';
import TextHero from '../(components)/TextHero';
import AIHubMainSec from './components/AIHubMainSec';
import EmailBox from '../(components)/EmailBox';
import LatestVerticalPosts from './components/LatestVerticalPosts';
import CategoriesSec from './components/CategoriesSec';

const AINewsHub = () => {
   return (
      <div>
         <TextHero
            title="Stay Ahead with"
            name="AI News"
            description="Your premier destination for artificial intelligence breakthroughs,
          industry insights, and cutting-edge research updates."
         />
         <AIHubMainSec />

         {/* Category Filter */}
         <CategoriesSec />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <LatestVerticalPosts />

               {/* Sidebar */}
               <div className="space-y-8">
                  <LatestPosts />
                  <EmailBox
                     bg="bg-gradient-to-br from-blue-600 to-purple-600"
                     title="Stay Updated!"
                     description="Get the latest AI news delivered to your inbox weekly."
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AINewsHub;
