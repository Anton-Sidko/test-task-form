import { FormValues } from './types';

export const FORM_INITIAL_VALUES: FormValues = {
  name: '',
  birth: undefined,
  sex: 'placeholder',
  city: 'placeholder',
  specialty: 'placeholder',
  doctor: 'placeholder',
  email: '',
  phone: '',
};

export const CITIES_URL =
  'https://run.mocky.io/v3/9fcb58ca-d3dd-424b-873b-dd3c76f000f4';

export const SPECIALTIES_URL =
  'https://run.mocky.io/v3/e8897b19-46a0-4124-8454-0938225ee9ca';

export const DOCTORS_URL =
  'https://run.mocky.io/v3/3d1c993c-cd8e-44c3-b1cb-585222859c21';
