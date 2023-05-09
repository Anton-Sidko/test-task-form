import { Field, ErrorMessage, useFormikContext } from 'formik';
import { OptionsType, GenderOptionsType } from '../../models/types';

interface SelectFieldProps {
  name: string;
  placeholder: string;
  options: OptionsType[] | GenderOptionsType[];
  labelText?: string;
  onChange?:
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    | ((event: React.ChangeEvent<HTMLSelectElement>) => [string, string]);
}

const SelectField = function ({
  name,
  placeholder,
  options,
  labelText,
  onChange,
  ...otherProps
}: SelectFieldProps): JSX.Element {
  const form = useFormikContext();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event);
      const onChangeResult = onChange(event);

      if (onChangeResult) {
        const [cityName, specialtyName] = onChangeResult;

        form.setFieldValue('city', cityName);
        form.setFieldValue('specialty', specialtyName);
      }
    }
    form.setFieldValue(name, event.target.value);
  };

  return (
    <div className="input-wrapper">
      {labelText && <label htmlFor={name}>{labelText}</label>}

      <Field
        as="select"
        name={name}
        {...otherProps}
        onChange={handleChange}
      >
        <option
          value={placeholder}
          disabled
        >
          {placeholder}
        </option>

        {options.map(option => (
          <option
            key={option.id}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Field>

      <div className="error-wrapper">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default SelectField;
