import { OptionsType, GenderOptionsType } from '../models/types';

export const getSelectValue = (
  options: OptionsType[] | GenderOptionsType[]
): string[] => options.map(option => option.value);
