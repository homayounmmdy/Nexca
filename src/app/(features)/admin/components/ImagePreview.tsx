import Input from '../../../../components/atoms/Input';
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';
import React from 'react';

const ImagePreview = ({
   imgurl,
   title,
   onChange,
}: {
   title: string;
   imgurl?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
   <>
      <Image
         src={!imgurl ? '/static/Image/logo.jpg' : imgurl}
         alt={title}
         title={title}
         data-testid="image-preview"
         height={390.938}
         width={695}
         className="mb-2 aspect-video w-full rounded-xl border border-indigo-500"
      />
      <Input
         id="imgurl"
         type="url"
         name="imgurl"
         data-testid="input-url"
         color="input-primary"
         style="w-full mb-2"
         placeholder="Enter url of image here"
         icon={<FaLink data-testid="input-icon" />}
         value={imgurl}
         onChange={onChange}
      />
   </>
);

export default ImagePreview;
