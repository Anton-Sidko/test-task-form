export interface FormValues {
  name: string;
  birth: Date | undefined;
  sex: GenderType | undefined;
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
  params?: GenderType | AgeRestrictionType;
}

export interface Doctor {
  id: string;
  name: string;
  surname: string;
  specialityId: string;
  isPediatrician: boolean;
  cityId: string;
}

type GenderType = { gender: 'Male' | 'Female' };
type AgeRestrictionType = { minAge?: number; maxAge?: number };
