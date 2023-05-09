import * as Yup from 'yup';

export const validationSchema = (
  genders: string[],
  cities: string[],
  specialties: string[],
  doctors: string[]
) =>
  Yup.object({
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
    sex: Yup.string().required('Required').oneOf(genders, 'Select option'),
    city: Yup.string().required('Required').oneOf(cities, 'Select option'),
    specialty: Yup.string().notRequired().oneOf(specialties, 'Select option'),
    doctor: Yup.string().required('Required').oneOf(doctors, 'Select option'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string()
      .test('No letters', "The field shouldn't contain letters", value => {
        if (value) {
          return /^[\d+()\s-]+$/.test(value);
        }
      })
      .min(10, 'Must be 10 characters or more')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });
