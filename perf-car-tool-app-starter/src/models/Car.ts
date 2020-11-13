export type Car = {
  id: number,
  make: string,
  model: string,
  year: number,
  color: string,
  price: number,
}

export type NewCar = Omit<Car, 'id'>;

export type CarKeys = keyof Car;

export type NewCarKeys = keyof NewCar;