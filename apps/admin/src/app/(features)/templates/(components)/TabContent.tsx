'use client';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';

interface Props {
   category: {
      id: string;
      name: string;
      icon: IconType;
   };
   setActiveCategory: (category: string) => void;
   activeCategory: string;
}

function TabContent({ category, setActiveCategory, activeCategory }: Props) {
   const IconComponent = category.icon;
   return (
      <motion.button
         onClick={() => setActiveCategory(category.id)}
         className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all cursor-pointer ${
            activeCategory === category.id
               ? 'bg-blue-600 text-white shadow-lg'
               : 'bg-base-200  hover:bg-blue-50 hover:text-blue-600 shadow-md'
         }`}
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
      >
         <IconComponent size={16} />
         <span>{category.name}</span>
      </motion.button>
   );
}

export default TabContent;
