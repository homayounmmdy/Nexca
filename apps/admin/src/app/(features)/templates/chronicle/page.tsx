'use client';
import EmailListForm from '@/components/organisms/EmailListForm';
import { motion } from 'framer-motion';
import EmailBox from '../(components)/EmailBox';
import ChronicleHero from './components/ChronicleHero';
import ChronicleTeleType from './components/ChronicleTeleType';
import LatestReports from './components/LatestReports';
import MostReadToday from './components/MostReadToday';

const TheChronicle = () => {
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.6,
            ease: 'easeOut',
         },
      },
   };

   return (
      <>
         {/* Breaking News Ticker */}
         <ChronicleTeleType />

         {/* Hero Section */}
         <motion.section
            className="pt-8 pb-12 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
         >
            <div className="max-w-7xl mx-auto mt-6">
               <ChronicleHero />
            </div>
         </motion.section>

         {/* Latest News Section */}
         <motion.section
            className="py-16 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <motion.div className="mb-12" variants={itemVariants}>
                  <div className="flex items-center justify-between">
                     <div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold  mb-2">
                           Latest Reports
                        </h2>
                        <p className="text-lg ">
                           In-depth analysis and breaking developments from
                           around the world
                        </p>
                     </div>
                  </div>
               </motion.div>

               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <LatestReports />
               </div>
            </div>
         </motion.section>

         {/* Trending and Categories Section */}
         <motion.section
            className="py-16 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
         >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid lg:grid-cols-3 gap-12">
                  <MostReadToday />

                  <motion.div variants={itemVariants}>
                     <EmailBox
                        title="Daily Brief"
                        description="Get our top stories delivered to your inbox every morning at 6 AM."
                        bg="bg-slate-900"
                        ElementColor="error"
                     />
                  </motion.div>
               </div>
            </div>
         </motion.section>

         {/* Newsletter Section */}
         <motion.section
            className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
         >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
               <motion.div variants={itemVariants}>
                  <h2 className="text-3xl text-white sm:text-4xl font-serif font-bold mb-4">
                     Stay Informed
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
                     Join over 250,000 readers who trust The Chronicle for
                     authoritative journalism and insightful analysis
                  </p>
                  <div className="flex flex-col items-center gap-4  mx-auto">
                     <EmailListForm color="error" />
                  </div>
                  <p className="text-sm text-slate-400 mt-4">
                     Free newsletter • No spam • Unsubscribe anytime
                  </p>
               </motion.div>
            </div>
         </motion.section>
      </>
   );
};

export default TheChronicle;
