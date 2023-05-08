import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .test('No digits', "The field shouldn't contain digits", value => {
      if (value) {
        return /^\D+$/.test(value);
      }
    })
    .min(2, 'Must be 2 characters or more')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  birthDate: Yup.date()
    .min(new Date(1900, 0, 1), "It's too old")
    .max(new Date(), "You birthday can't be in future")
    .required('Required'),
  sex: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  specialty: Yup.string().notRequired(),
  doctor: Yup.string().required('Required'),
  email: Yup.string().when('mobilePhone', {
    is: (val: string) => val && val.length > 0,
    then: Yup.string().email('Invalid email address').required('Required'),
    otherwise: Yup.string().email('Invalid email address'),
  }),
  mobilePhone: Yup.string().when('email', {
    is: val => val && val.length > 0,
    then: Yup.string()
      .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'Invalid phone number')
      .required('Required'),
    otherwise: Yup.string().matches(
      /^(\+?\d{1,3}[- ]?)?\d{10}$/,
      'Invalid phone number'
    ),
  }),
});
