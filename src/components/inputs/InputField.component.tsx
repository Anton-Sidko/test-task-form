import { Field, ErrorMessage, useFormikContext } from 'formik';
import './Inputs.styles.scss';

interface InputFieldProps {
  name: string;
  type: string;
  placeholder?: string;
  labelText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = function ({
  name,
  type,
  placeholder,
  labelText,
  onChange,
  ...otherProps
}: InputFieldProps): JSX.Element {
  const form = useFormikContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    form.setFieldValue(name, event.target.value);
  };

  return (
    <div className="input-wrapper">
      {labelText && <label htmlFor={name}>{labelText}</label>}

      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${
          form.touched[name as keyof typeof form.touched] &&
          form.errors[name as keyof typeof form.touched]
            ? 'is-invalid'
            : ''
        }`}
        {...otherProps}
        onChange={handleChange}
      />

      <div className="error-wrapper">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default InputField;
