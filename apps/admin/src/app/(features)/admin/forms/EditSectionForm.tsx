'use client';
import { Button, Input } from '@/components/atoms';
import { SECTIONS_API_URL } from '@/config/apiConstants';
import { templatesData } from '@/config/tempaltes';
import { SectionCashType } from '@/types/CashTypes';
import FormHandler from '@/util/handler/FormHandler';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import FormLayout from '../components/FormLayout';
import SelectField from '../components/SelectField';

const EditSectionForm = ({ data }: { data: SectionCashType }) => {
   const EDITMODE = data._id !== 'new';
   const router = useRouter();

   const startingData = {
      templates: EDITMODE ? data.templates : '1',
      name: EDITMODE ? data.name : '',
      secid: EDITMODE ? data.secid : 1,
   };

   const [formData, setFormData] = useState(startingData);
   const handler = new FormHandler(setFormData, SECTIONS_API_URL, router);
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
      handler.submit(e, formData, data._id);

   return (
      <>
         <FormLayout
            title={EDITMODE ? 'Edit Section' : 'New Section'}
            isLoading={handler.isLoading}
         >
            <form
               onSubmit={handleSubmit}
               method="post"
               className="mb-3 flex w-full flex-col gap-3 md:w-1/2"
            >
               <SelectField
                  id="templates"
                  name="templates"
                  label="templates"
                  value={formData.templates}
                  onChange={handler.trakeChange}
                  options={templatesData}
               />
               <Input
                  id="name"
                  type="text"
                  name="name"
                  label="Name"
                  color="input-primary"
                  className="w-full"
                  value={formData.name}
                  onChange={handler.trakeChange}
               />
               <Input
                  id="secid"
                  type="number"
                  name="secid"
                  label="secid"
                  color="input-primary"
                  className="w-full"
                  value={formData.secid}
                  onChange={handler.trakeChange}
                  required
               />
               <Button type="submit" color="btn-primary">
                  {EDITMODE ? 'Save' : 'create'}
               </Button>
            </form>
         </FormLayout>
      </>
   );
};

export default EditSectionForm;
