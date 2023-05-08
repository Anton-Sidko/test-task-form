import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from '../../models/validationSchema';
import { fetchCities, fetchDoctors, fetchSpecialties } from '../../utils/api';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

console.log(await fetchCities());
console.log(await fetchSpecialties());
console.log(await fetchDoctors());

const DoctorsForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field
          name="firstName"
          type="text"
        />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field
          name="lastName"
          type="text"
        />
        <ErrorMessage name="lastName" />

        <div>
          <label htmlFor="date">Birth</label>
          <Field
            name="date"
            type="date"
            required
          />
          <ErrorMessage name="date" />
        </div>

        <label htmlFor="selectField">Select an option:</label>
        <Field
          as="select"
          name="selectField"
          id="selectField"
        >
          <option value="">--Please select an option--</option>
          {options.map(option => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </Field>

        <label htmlFor="email">Email Address</label>
        <Field
          name="email"
          type="email"
        />
        <ErrorMessage name="email" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default DoctorsForm;
