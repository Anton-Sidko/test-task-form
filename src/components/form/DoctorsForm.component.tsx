import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema } from '../../models/validationSchema';
import { fetchCities, fetchDoctors, fetchSpecialties } from '../../utils/api';
import { FORM_INITIAL_VALUES } from '../../models/const';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
const options2 = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Femalsdfe', label: 'Femalsdfe' },
];

console.log(await fetchCities());
console.log(await fetchSpecialties());
console.log(await fetchDoctors());

const DoctorsForm = () => {
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
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

        <label htmlFor="sex">Select an option:</label>
        <Field
          as="select"
          name="sex"
          id="selectField"
        >
          <option
            value="placeholder"
            disabled
          >
            --Please select an option--
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
        <label htmlFor="sex">Select an option:</label>
        <Field
          as="select"
          name="sex"
          id="selectField"
          required
        >
          <option
            value="placeholder"
            disabled
          >
            --Please select an option--
          </option>
          {options2.map(option => (
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
