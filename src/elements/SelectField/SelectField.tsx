import classNames from 'classnames';
import ReactSelect from 'react-select';
import { useEffect, useState } from 'react';
import { useController } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types/form';
import { FormData } from '../../compartments/CustomForm/CustomForm';

export const SelectField: React.FC<{
  label: string;
  options: Array<string> | null;
  required: boolean;
  placeholder: string | null;
  control: Control<FormData>;
}> = ({ label, options, required, placeholder, control }) => {
  const { field } = useController({
    name: label,
    control,
    rules: { required: required },
  });
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // for fixing hydration warnings and errors
    setIsClient(true);
  }, []);

  return isClient ? (
    <ReactSelect
      unstyled
      classNames={{
        input: () => classNames('focus:outline-none focus:shadow-lg'),
        placeholder: () => classNames('text-slate-500 dark:text-slate-400'),
        control: () =>
          classNames(
            'p-3.5 rounded-[--border-radius-theme-button] border border-slate-200 dark:border-transparent dark:bg-slate-700/60',
          ),
        menu: () =>
          'mt-2 border border-slate-200 rounded-[--border-radius-theme-button] bg-white dark:bg-slate-800 dark:border-transparent',
        option: (state) =>
          classNames(
            'cursor-pointer select-none relative py-2 px-4',
            state.isFocused && 'bg-slate-200 dark:bg-slate-700',
            state.isSelected && 'bg-slate-300 dark:bg-slate-600',
            state.isDisabled && 'cursor-not-allowed opacity-50',
          ),
      }}
      name={label}
      options={options?.map((option) => {
        return {
          label: option,
          value: option,
        };
      })}
      placeholder={placeholder ? placeholder : label}
      onChange={(selectedOption) => {
        field.onChange(selectedOption?.value);
      }}
    />
  ) : null;
};
