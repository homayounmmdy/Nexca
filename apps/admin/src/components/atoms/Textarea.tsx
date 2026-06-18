import { TextareaType } from '@/types/FormFiledType';
import React from 'react';

const Textarea: React.FC<TextareaType> = ({
   id,
   style,
   color,
   label,
   icon,
   className = '',
   ...rest
}: TextareaType) => {
   return (
      <>
         {icon ? (
            <label
               data-testid="label"
               className={`${style} ${color} textarea textarea-bordered flex items-center gap-2`}
            >
               {icon}
               <textarea className={className} id={id} {...rest} />
            </label>
         ) : label ? (
            <div className="flex gap-2">
               <label className={style} htmlFor={id}>
                  {label}
               </label>
               <textarea
                  className={`textarea textarea-bordered ${className} ${color}`}
                  id={id}
                  {...rest}
               />
            </div>
         ) : (
            <textarea
               className={`textarea textarea-bordered ${className} ${color}`}
               id={id}
               {...rest}
            />
         )}
      </>
   );
};

export default Textarea;
