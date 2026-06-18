'use client';
import { Button, Input } from '@/components/atoms';
import { RELEASE_API_URL } from '@/config/apiConstants';
import { ReleaseCashType } from '@/types/CashTypes';
import FormHandler from '@/util/handler/FormHandler';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import FormLayout from '../components/FormLayout';

const EditReleaseForm = ({ data }: { data: ReleaseCashType }) => {
   const EDITMODE = data._id !== 'new';
   const router = useRouter();

   const startingData = {
      title: EDITMODE ? data.title : '',
      date: EDITMODE ? data.date : '',
      description: EDITMODE ? data.description : '',
      link: EDITMODE ? data.link : '',
   };
   const [formData, setFormData] = useState(startingData);
   const handler = new FormHandler(setFormData, RELEASE_API_URL, router);
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
      handler.submit(e, formData, data._id);

   return (
      <>
         <FormLayout
            title={EDITMODE ? 'Edit Release' : 'New Release'}
            isLoading={handler.isLoading}
         >
            <form
               onSubmit={handleSubmit}
               method="post"
               className="mb-3 flex w-full flex-col gap-3 md:w-1/2"
            >
               <Input
                  type="text"
                  id="title"
                  name="title"
                  label="relase Name"
                  color="input-primary"
                  className="w-full"
                  value={formData.title}
                  onChange={handler.trakeChange}
                  required
               />
               <Input
                  type="date"
                  id="date"
                  name="date"
                  label="relase Time"
                  color="input-primary"
                  className="w-full"
                  value={formData.date}
                  onChange={handler.trakeChange}
               />
               <Input
                  type="text"
                  id="description"
                  name="description"
                  label="description of relase"
                  color="input-primary"
                  className="w-full"
                  value={formData.description}
                  onChange={handler.trakeChange}
               />
               <Input
                  id="link"
                  type="url"
                  name="link"
                  placeholder="Enter Relase Link here"
                  style="w-full"
                  value={formData.link}
                  icon={<FaLink />}
                  color="input-primary"
                  onChange={handler.trakeChange}
               />
               <Button type="submit" color="btn-primary">
                  {EDITMODE ? 'Save' : 'create'}
               </Button>
            </form>
         </FormLayout>
      </>
   );
};

export default EditReleaseForm;
