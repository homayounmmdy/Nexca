import { motion } from 'framer-motion';

const MusicHeroLoading = () => {
   return (
      <section className="relative py-20 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"></div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Text content skeleton */}
               <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
               >
                  {/* Title skeleton */}
                  <div className="h-16 bg-gray-300/20 rounded-2xl animate-pulse lg:h-24 w-full"></div>
                  <div className="h-12 bg-gray-300/20 rounded-2xl animate-pulse lg:h-16 w-4/5"></div>

                  {/* Description skeleton */}
                  <div className="space-y-4">
                     <div className="h-4 bg-gray-300/20 rounded-lg animate-pulse w-full"></div>
                     <div className="h-4 bg-gray-300/20 rounded-lg animate-pulse w-5/6"></div>
                     <div className="h-4 bg-gray-300/20 rounded-lg animate-pulse w-4/6"></div>
                  </div>
               </motion.div>

               {/* Image content skeleton */}
               <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
               >
                  {/* Main image skeleton */}
                  <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                     <div className="w-full h-full bg-gray-300/20 animate-pulse"></div>
                  </div>

                  {/* Animated circles skeleton */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-300/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300/20 rounded-full animate-pulse"></div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default MusicHeroLoading;
