import {
  OptionsType,
  GenderOptionsType,
  City,
  Specialty,
  Doctor,
} from '../models/types';

export const getSelectValue = (
  options: OptionsType[] | GenderOptionsType[]
): string[] => options.map(option => option.value);

export const getSelectOptions = (
  data: City[] | Specialty[] | Doctor[]
): OptionsType[] =>
  data.map(item => {
    if ('surname' in item) {
      return {
        id: item.id,
        value: `${item.name} ${item.surname}`,
        label: `${item.name} ${item.surname}`,
      };
    }

    return {
      id: item.id,
      value: item.name,
      label: item.name,
    };
  });
