import { InputType } from '@/types/FormFiledType';
import React from 'react';

const Input: React.FC<InputType> = ({
   id,
   style,
   name,
   color,
   icon,
   label,
   defaultChecked,
   checked,
   className,
   ...rest
}: InputType) => {
   return (
      <>
         {icon ? (
            <label
               data-testid="label"
               className={`${style} ${color} flex input input-bordered items-center gap-2`}
            >
               {icon}
               <input
                  name={name}
                  id={id}
                  className={className}
                  checked={checked}
                  defaultChecked={defaultChecked}
                  {...rest}
               />
            </label>
         ) : label ? (
            <>
               <label className={style} data-testid="label" htmlFor={id}>
                  {label}
               </label>
               <input
                  className={`input input-bordered ${className} ${color}`}
                  name={name}
                  id={id}
                  checked={checked}
                  {...rest}
               />
            </>
         ) : (
            <input
               className={`input input-bordered ${className} ${color}`}
               name={name}
               id={id}
               checked={checked}
               {...rest}
            />
         )}
      </>
   );
};

export default Input;
