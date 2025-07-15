import classNames from 'classnames';
import { FieldTypeType } from '../../types';
import { getRegEx } from '../../utils';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FormData } from '../../compartments/CustomForm/CustomForm';

export const InputField: React.FC<{
  label: string;
  fieldType: FieldTypeType;
  required: boolean;
  placeholder: string | null;
  register: UseFormRegister<FormData>;
}> = ({ label, fieldType, required, placeholder, register }) => {
  return (
    <input
      className={classNames(
        'block border border-slate-200 rounded-theme-button w-full px-4 py-3.5 focus:outline-none focus:shadow-lg text-inherit placeholder:text-slate-500 dark:bg-slate-700/60 dark:border-transparent dark:placeholder:text-slate-400',
      )}
      type={fieldType}
      {...register(label, {
        required: required,
        pattern: getRegEx(fieldType),
      })}
      placeholder={placeholder ? placeholder : label}
    />
  );
};
