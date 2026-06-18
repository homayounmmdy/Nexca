import EmailListForm from '@/components/organisms/EmailListForm';
import { motion } from 'framer-motion';
import React from 'react';
import { AllowedColors } from '@/types/AllowedOptions';

interface Props {
   title: string;
   description: string;
   bg?: string;
   ElementColor?: AllowedColors;
}

const EmailBox = ({
   title,
   description,
   bg = 'bg-blue-600',
   ElementColor = 'primary',
}: Props) => {
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
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.5,
            ease: 'easeOut',
         },
      },
   };
   return (
      <motion.div
         initial="hidden"
         animate="visible"
         variants={containerVariants}
         className={`${bg} rounded-xl shadow-md p-6 `}
      >
         <motion.h3
            variants={itemVariants}
            className="text-xl text-white font-bold mb-3"
         >
            {title}
         </motion.h3>
         <motion.p variants={itemVariants} className="text-blue-100 mb-4">
            {description}
         </motion.p>
         <motion.div variants={itemVariants} className="space-y-3">
            <EmailListForm color={ElementColor} />
         </motion.div>
      </motion.div>
   );
};

export default EmailBox;
