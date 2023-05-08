import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .test('No digits', "The field shouldn't contain digits", value => {
      if (value) {
        return /^\D+$/.test(value);
      }
    })
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  date: Yup.date()
    .min(new Date(1900, 0, 1), "It's too old")
    .max(new Date(), "You birthday can't be in future")
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});
