import { Field, ErrorMessage } from 'formik';

interface InputFieldProps {
  name: string;
  type: string;
  placeholder?: string;
  labelText?: string;
}

const InputField = function ({
  name,
  type,
  placeholder,
  labelText,
  ...otherProps
}: InputFieldProps): JSX.Element {
  return (
    <div className="input-wrapper">
      {labelText && <label htmlFor={name}>{labelText}</label>}

      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        {...otherProps}
      />

      <div className="error-wrapper">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default InputField;
