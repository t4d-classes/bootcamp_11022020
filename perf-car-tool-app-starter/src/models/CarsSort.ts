import { CarKeys } from './Car';

export const SORT_ASC = 'asc';
export const SORT_DESC = 'desc';

export type CarsSort = {
  col: CarKeys,
  dir: 'asc' | 'desc',
}