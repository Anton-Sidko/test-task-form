import { CITIES_URL, DOCTORS_URL, SPECIALTIES_URL } from '../models/const';
import { City, Doctor, Specialty } from '../models/types';

export const fetchCities = async function () {
  const response = await fetch(CITIES_URL);
  const cities: City[] = await response.json();

  return cities;
};

export const fetchSpecialties = async function () {
  const response = await fetch(SPECIALTIES_URL);
  const specialties: Specialty[] = await response.json();

  return specialties;
};

export const fetchDoctors = async function () {
  const response = await fetch(DOCTORS_URL);
  const doctors: Doctor[] = await response.json();

  return doctors;
};
