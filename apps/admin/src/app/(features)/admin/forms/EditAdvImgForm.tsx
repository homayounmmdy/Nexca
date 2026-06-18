'use client';
import { Button, Input } from '@/components/atoms';
import { IMG_ADV_API_URL } from '@/config/apiConstants';
import { ImgAdvCashType } from '@/types/CashTypes';
import FormHandler from '@/util/handler/FormHandler';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ImagePreview from '../components/ImagePreview';
import FormLayout from '../components/FormLayout';

const EditAdvImgForm = ({ data }: { data: ImgAdvCashType }) => {
   const EDITMODE = data._id !== 'new';
   const router = useRouter();

   const startingData = {
      advId: EDITMODE ? data.advId : 1,
      advName: EDITMODE ? data.advName : '',
      imgURL: EDITMODE ? data.imgURL : '',
      imgAlt: EDITMODE ? data.imgAlt : '',
      body: EDITMODE ? data.body : '',
      link: EDITMODE ? data.link : '',
   };
   const [formData, setFormData] = useState(startingData);
   const handler = new FormHandler(setFormData, IMG_ADV_API_URL, router);
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
      handler.submit(e, formData, data._id);

   return (
      <>
         <FormLayout
            title={EDITMODE ? 'Edit TextAdv' : 'New TextAdv'}
            isLoading={handler.isLoading}
         >
            <form
               onSubmit={handleSubmit}
               method="post"
               className="mb-3 flex w-full flex-col gap-3 md:flex-row"
            >
               <div className="w-full md:w-1/2">
                  <div>
                     <label className="mb-2" htmlFor="advId">
                        Section for ads
                     </label>
                     <select
                        id="advId"
                        name="advId"
                        value={formData.advId}
                        onChange={handler.trakeChange}
                        className="select select-primary w-full mb-2"
                        required
                     >
                        <option value="1">
                           Default Template - next to posts
                        </option>
                        <option value="2">Service - next to main img</option>
                     </select>
                  </div>
                  <Input
                     type="text"
                     id="advName"
                     name="advName"
                     label="Adv Name"
                     color="input-primary"
                     className="w-full mb-2"
                     value={formData.advName}
                     onChange={handler.trakeChange}
                     required
                  />
                  <Input
                     type="text"
                     id="body"
                     name="body"
                     label="body of Adv"
                     color="input-primary"
                     className="w-full mb-2"
                     value={formData.body}
                     onChange={handler.trakeChange}
                     required
                  />
                  <Input
                     id="link"
                     type="url"
                     name="link"
                     label="link of adv"
                     className="w-full mb-2"
                     value={formData.link}
                     color="input-primary"
                     onChange={handler.trakeChange}
                     required
                  />
                  <Button
                     type="submit"
                     color="btn-primary"
                     className="w-full hidden md:block"
                  >
                     {EDITMODE ? 'Save' : 'create'}
                  </Button>
               </div>
               <div className="w-full md:w-1/2">
                  <ImagePreview
                     imgurl={formData.imgURL}
                     title={formData.advName}
                     onChange={handler.trakeChange}
                  />
                  <Input
                     id="imgAlt"
                     type="text"
                     name="imgAlt"
                     label="Alt of for adv image"
                     className="w-full mb-2"
                     value={formData.imgAlt}
                     color="input-primary"
                     onChange={handler.trakeChange}
                  />
                  <Button
                     type="submit"
                     color="btn-primary"
                     className="w-full block md:hidden"
                  >
                     {EDITMODE ? 'Save' : 'create'}
                  </Button>
               </div>
            </form>
         </FormLayout>
      </>
   );
};

export default EditAdvImgForm;
