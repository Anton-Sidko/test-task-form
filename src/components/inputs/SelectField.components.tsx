import { Field, ErrorMessage } from 'formik';
import { OptionsType, GenderOptionsType } from '../../models/types';

interface SelectFieldProps {
  name: string;
  placeholder: string;
  options: OptionsType[] | GenderOptionsType[];
  labelText?: string;
}

const SelectField = function ({
  name,
  placeholder,
  options,
  labelText,
  ...otherProps
}: SelectFieldProps): JSX.Element {
  return (
    <div className="input-wrapper">
      {labelText && <label htmlFor={name}>{labelText}</label>}

      <Field
        as="select"
        name={name}
        {...otherProps}
      >
        <option
          value={placeholder}
          disabled
        >
          {placeholder}
        </option>

        {options.map(option => (
          <option
            key={option.value}
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
