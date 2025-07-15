import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FormData } from '../../compartments/CustomForm/CustomForm';

export const TextAreaField: React.FC<{
  label: string;
  required: boolean;
  placeholder: string | null;
  register: UseFormRegister<FormData>;
}> = ({ label, required, placeholder, register }) => {
  return (
    <textarea
      className="block border border-slate-200 rounded-theme w-full px-4 py-3.5 focus:outline-none focus:shadow-lg text-inherit placeholder:text-slate-500 dark:bg-slate-700/60 dark:border-transparent dark:placeholder:text-slate-400"
      id={label}
      placeholder={placeholder ? placeholder : label}
      rows={5}
      {...register(label, {
        required: required,
      })}
    />
  );
};
