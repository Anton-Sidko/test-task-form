import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';

import { validationSchema } from '../../models/validationSchema';
import { fetchData } from '../../utils/api';
import {
  CITIES_URL,
  DOCTORS_URL,
  FORM_INITIAL_VALUES,
  GENDER_OPTIONS,
  SPECIALTIES_URL,
} from '../../models/const';
import { City, Doctor, Specialty } from '../../models/types';

import InputField from '../inputs/InputField.component';
import SelectField from '../inputs/SelectField.components';
import { getSelectOptions, getSelectValue } from '../../utils/utils';

import './DoctorsForm.style.scss';
import ErrorMessage from '../error-message/ErrorMessage.component';
import Spinner from '../spinner/Spinner.component';

const DoctorsForm = (): JSX.Element => {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [filteredSpecialties, setFilteredSpecialties] = useState<Specialty[]>(
    []
  );
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState({
    cities: true,
    specialties: true,
    doctors: true,
  });
  const [isFetchError, setIsFetchError] = useState({
    cities: false,
    specialties: false,
    doctors: false,
  });

  useEffect(() => {
    async function getCities() {
      try {
        const citiesData = await fetchData<City[]>(CITIES_URL);
        setCities(citiesData);
        setFilteredCities(citiesData);
      } catch (error) {
        setIsFetchError(i => ({ ...i, cities: true }));
      } finally {
        setIsLoading(i => ({ ...i, cities: false }));
      }
    }

    async function getSpecialties() {
      try {
        const specialtiesData = await fetchData<Specialty[]>(SPECIALTIES_URL);
        setSpecialties(specialtiesData);
        setFilteredSpecialties(specialtiesData);
      } catch (error) {
        setIsFetchError(i => ({ ...i, specialties: true }));
      } finally {
        setIsLoading(i => ({ ...i, specialties: false }));
      }
    }

    async function getDoctors() {
      try {
        const doctorsData = await fetchData<Doctor[]>(DOCTORS_URL);
        setDoctors(doctorsData);
        setFilteredDoctors(doctorsData);
      } catch (error) {
        setIsFetchError(i => ({ ...i, doctors: true }));
      } finally {
        setIsLoading(i => ({ ...i, doctors: false }));
      }
    }

    getCities();
    getSpecialties();
    getDoctors();
  }, []);

  const citiesOptions = getSelectOptions(filteredCities);
  const specialtiesOptions = getSelectOptions(filteredSpecialties);
  const doctorsOptions = getSelectOptions(filteredDoctors);

  const selectGenderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sex = e.target.value;
    const newSpecialties = specialties.filter(specialty => {
      if (specialty.params && 'gender' in specialty.params) {
        return specialty.params.gender === sex;
      }
      return true;
    });

    const newDoctors = doctors.filter(doctor => {
      const id = doctor.specialityId;
      const doctorSpecialty = specialties.find(
        specialty => specialty.id === id
      );

      if (
        doctorSpecialty &&
        doctorSpecialty.params &&
        'gender' in doctorSpecialty.params
      ) {
        return doctorSpecialty.params.gender === sex;
      }
      return true;
    });

    setFilteredSpecialties(newSpecialties);
    setFilteredDoctors(newDoctors);
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={validationSchema(
        getSelectValue(GENDER_OPTIONS),
        getSelectValue(citiesOptions),
        getSelectValue(specialtiesOptions),
        getSelectValue(doctorsOptions)
      )}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="doctors-form">
        <InputField
          name="name"
          type="text"
          placeholder="Your name"
        />

        <InputField
          name="birthDate"
          type="date"
          labelText="Your birthday"
        />

        <SelectField
          name="sex"
          placeholder="Please select your gender"
          options={GENDER_OPTIONS}
          onChange={selectGenderHandler}
        />

        {isLoading.cities ? (
          <Spinner />
        ) : isFetchError.cities ? (
          <ErrorMessage />
        ) : (
          <SelectField
            name="city"
            placeholder="Please select your city"
            options={citiesOptions}
          />
        )}

        {isLoading.specialties ? (
          <Spinner />
        ) : isFetchError.specialties ? (
          <ErrorMessage />
        ) : (
          <SelectField
            name="specialty"
            placeholder="Please select doctor's specialty"
            options={specialtiesOptions}
          />
        )}

        {isLoading.doctors ? (
          <Spinner />
        ) : isFetchError.doctors ? (
          <ErrorMessage />
        ) : (
          <SelectField
            name="doctor"
            placeholder="Please select doctor"
            options={doctorsOptions}
          />
        )}

        <InputField
          name="email"
          type="email"
          placeholder="Your email"
        />

        <InputField
          name="phone"
          type="text"
          placeholder="+** *** *** ** **"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default DoctorsForm;
