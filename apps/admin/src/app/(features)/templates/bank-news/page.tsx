'use client';
import { Container } from '@/components/atoms';
import { motion } from 'framer-motion';
import EmailBox from '../(components)/EmailBox';
import LatestPosts from '../(components)/LatestPosts';
import MainSecBank from './components/MainSecBank';
import MarketSummary from './components/MarketSummary';
import UnderMainBank from './components/UnderMainBank';

const BankNewsPage = () => {
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
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };

   return (
      <Container className="mt-30">
         <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
         >
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
               {/* Hero Section */}
               <MainSecBank />

               {/* Latest News */}
               <motion.section variants={itemVariants}>
                  <div className="flex items-center justify-between mb-6">
                     <h2 className="text-2xl font-bold ">Latest News</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-4">
                     <UnderMainBank />
                  </div>
               </motion.section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
               {/* Latest Posts */}
               <LatestPosts />

               {/* Newsletter Signup */}
               <EmailBox
                  title="Stay Informed"
                  description="Get the latest banking and financial news delivered to your
                inbox daily."
                  bg="bg-gradient-to-r from-blue-600 to-blue-700"
                  ElementColor="primary"
               />
               {/* Market Summary */}
               <MarketSummary />
            </div>
         </motion.div>
      </Container>
   );
};

export default BankNewsPage;
