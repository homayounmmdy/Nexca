'use client';
import { Button, Input } from '@/components/atoms';
import { useEmailForm } from '@/hooks/useEmailForm ';
import { AllowedColors } from '@/types/AllowedOptions';
import { Toaster } from 'react-hot-toast';
import { GrFormNextLink } from 'react-icons/gr';

const EmailListForm = ({ color = 'primary' }: { color?: AllowedColors }) => {
   const { formData, handleSubmit, handleChange } = useEmailForm();

   return (
      <>
         <Toaster />
         <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
               color={`input-${color}`}
               placeholder="Please Enter Your Email here"
               onChange={handleChange}
               type="email"
               id="email"
               name="email"
               value={formData.email}
            />
            <Button
               className="rounded-full"
               color={`btn-${color}`}
               type="submit"
            >
               <GrFormNextLink size={24} /> Subscribe
            </Button>
         </form>
      </>
   );
};

export default EmailListForm;
