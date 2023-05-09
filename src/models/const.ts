import { FormValues, GenderOptionsType } from './types';

export const FORM_INITIAL_VALUES: FormValues = {
  name: '',
  birthDate: '',
  sex: 'Please select your gender',
  city: 'Please select your city',
  specialty: "Please select doctor's specialty",
  doctor: 'Please select doctor',
  email: '',
  phone: '',
};

export const GENDER_OPTIONS: GenderOptionsType[] = [
  { id: '1', value: 'Male', label: 'Male' },
  { id: '2', value: 'Female', label: 'Female' },
];

export const CITIES_URL =
  'https://run.mocky.io/v3/9fcb58ca-d3dd-424b-873b-dd3c76f000f4';

export const SPECIALTIES_URL =
  'https://run.mocky.io/v3/e8897b19-46a0-4124-8454-0938225ee9ca';

export const DOCTORS_URL =
  'https://run.mocky.io/v3/3d1c993c-cd8e-44c3-b1cb-585222859c21';
