import { motion } from 'framer-motion';
const FeaturedTracksLoading = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };
   return (
      <section id="music" className="py-20 bg-black/20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header skeleton */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               {/* Title skeleton */}
               <div className="h-12 bg-gray-300/20 rounded-2xl animate-pulse mb-4 max-w-md mx-auto"></div>

               {/* Subtitle skeleton */}
               <div className="h-6 bg-gray-300/20 rounded-lg animate-pulse max-w-2xl mx-auto"></div>
            </motion.div>

            {/* Grid skeleton */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
               {[...Array(4)].map((_, index) => (
                  <motion.div
                     key={index}
                     variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                     }}
                     className="bg-gray-800/30 rounded-2xl overflow-hidden shadow-lg"
                  >
                     {/* Image skeleton */}
                     <div className="w-full h-48 bg-gray-300/20 animate-pulse"></div>

                     {/* Content skeleton */}
                     <div className="p-4 space-y-3">
                        {/* Title skeleton */}
                        <div className="h-5 bg-gray-300/20 rounded-lg animate-pulse w-4/5"></div>

                        {/* Description skeleton */}
                        <div className="space-y-2">
                           <div className="h-3 bg-gray-300/20 rounded animate-pulse w-full"></div>
                           <div className="h-3 bg-gray-300/20 rounded animate-pulse w-5/6"></div>
                        </div>

                        {/* Metadata skeleton */}
                        <div className="flex justify-between items-center pt-2">
                           <div className="h-4 bg-gray-300/20 rounded animate-pulse w-20"></div>
                           <div className="h-4 bg-gray-300/20 rounded animate-pulse w-16"></div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default FeaturedTracksLoading;
