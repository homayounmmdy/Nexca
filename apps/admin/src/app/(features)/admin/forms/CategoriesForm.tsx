'use client';

import { Button, Input } from '@/components/atoms';
import FormHandler from '@/util/handler/FormHandler';
import { useState } from 'react';

const CategoriesForm = ({ handler }: { handler: FormHandler }) => {
   const [categoryInput, setCategoryInput] = useState('');
   return (
      <div className="mt-2 flex w-full gap-2">
         <Input
            type="text"
            value={categoryInput}
            color="input-primary"
            onChange={(e) => setCategoryInput(e.target.value)}
            placeholder="New Category"
            className="w-full"
         />
         <Button
            type="button"
            onClick={() => handler.addCategory(categoryInput, setCategoryInput)}
            color="btn-primary"
         >
            Add Category
         </Button>
      </div>
   );
};

export default CategoriesForm;
