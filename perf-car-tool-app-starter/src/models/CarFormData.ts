import { pick } from 'lodash/fp';
import { Car } from './Car';

export class CarFormData {
  make = '';
  model = '';
  year = NaN;
  color = '';
  price = NaN;
}

const pickCarFormData = pick(Object.keys(new CarFormData()));

export function toCarFormData(car: Car): CarFormData {
  return pickCarFormData(car) as CarFormData;
}
