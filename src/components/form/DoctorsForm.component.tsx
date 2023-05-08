import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';

import { validationSchema } from '../../models/validationSchema';
import { fetchCities, fetchDoctors, fetchSpecialties } from '../../utils/api';
import { FORM_INITIAL_VALUES, GENDER_OPTIONS } from '../../models/const';
import { City, Doctor, OptionsType, Specialty } from '../../models/types';

import InputField from '../inputs/InputField.component';
import SelectField from '../inputs/SelectField.components';
import { getSelectValue } from '../../utils/utils';

const DoctorsForm = (): JSX.Element => {
  const [cities, setCities] = useState<City[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    async function getAllData() {
      const cities = await fetchCities();
      const specialties = await fetchSpecialties();
      const doctors = await fetchDoctors();

      setCities(cities);
      setSpecialties(specialties);
      setDoctors(doctors);
    }

    getAllData();
  }, []);

  const citiesOptions: OptionsType[] = cities.map(city => ({
    value: city.name,
    label: city.name,
  }));

  const specialtiesOptions: OptionsType[] = specialties.map(specialty => ({
    value: specialty.name,
    label: specialty.name,
  }));

  const doctorsOptions: OptionsType[] = doctors.map(doctor => ({
    value: `${doctor.name} ${doctor.surname}`,
    label: `${doctor.name} ${doctor.surname}`,
  }));

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
      <Form>
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
        />

        <SelectField
          name="city"
          placeholder="Please select your city"
          options={citiesOptions}
        />

        <SelectField
          name="specialty"
          placeholder="Please select doctor's specialty"
          options={specialtiesOptions}
        />

        <SelectField
          name="doctor"
          placeholder="Please select doctor"
          options={doctorsOptions}
        />

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
