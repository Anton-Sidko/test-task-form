export interface FormValues {
  name: string;
  birthDate: Date | string;
  sex: GenderType | string;
  city: string;
  specialty: string;
  doctor: string;
  email?: string;
  phone?: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Specialty {
  id: string;
  name: string;
  params?: { gender: GenderType } | AgeRestrictionType;
}

export interface Doctor {
  id: string;
  name: string;
  surname: string;
  specialityId: string;
  isPediatrician: boolean;
  cityId: string;
}

export type GenderOptionsType = { value: GenderType; label: GenderType };
export type OptionsType = { value: string; label: string };
export type GenderType = 'Male' | 'Female';

type AgeRestrictionType = { minAge?: number; maxAge?: number };
