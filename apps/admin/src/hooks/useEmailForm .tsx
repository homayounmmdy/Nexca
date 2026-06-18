'use client';
import { EMAIL_API_URL } from '@/config/apiConstants';
import FormHandler from '@/util/handler/FormHandler';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';

const emailSchema = z.object({
   email: z.string().email('Please enter a valid email address'),
});

export const useEmailForm = (successRedirect = '/') => {
   const router = useRouter();
   const [formData, setFormData] = useState({
      email: '',
   });

   const handler = new FormHandler(setFormData, EMAIL_API_URL, router);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate the form data using Zod
      const validationResult = emailSchema.safeParse(formData);

      if (!validationResult.success) {
         // If validation fails, display the first error message using react-toastify
         toast.error(validationResult.error.errors[0].message);
         return;
      }

      try {
         // If validation passes, proceed with form submission
         await handler.submit(e, formData, undefined, successRedirect);

         // Clear the input field after successful submission
         setFormData({ email: '' });

         // Display a success message
         toast.success('Thank you for subscribing!');
      } catch (error) {
         // Handle any errors during submission
         toast.error('Failed to subscribe. Please try again later.');
      }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handler.trakeChange(e);
   };

   return {
      formData,
      handleSubmit,
      handleChange,
   };
};
