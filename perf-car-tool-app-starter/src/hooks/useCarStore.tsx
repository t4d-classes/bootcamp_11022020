import { useState, useCallback, useMemo } from 'react';

import { Car } from '../models/Car';
import { CarsSort, SORT_ASC, SORT_DESC } from '../models/CarsSort';
import { CarFormData } from '../models/CarFormData';
import { CarToolStore } from '../models/CarToolStore';
import { useList } from '../hooks/useList';
import { ConfirmDeleteCarMessage } from '../models/ConfirmDeleteCarMessage';

const sortedCars = (cars: Car[], carsSort: CarsSort) => {
  return cars.concat().sort((a: Car, b: Car) => {
    const left = String(a[carsSort.col]).toUpperCase();
    const right = String(b[carsSort.col]).toUpperCase();

    if (left < right) {
      return carsSort.dir === SORT_ASC ? -1 : 1;
    } else if (left > right) {
      return carsSort.dir === SORT_ASC ? 1 : -1;
    } else {
      return 0;
    }
  });
};

type UseCarToolStore = (initialCars: Car[]) => CarToolStore;

export const useCarToolStore: UseCarToolStore = (initialCars) => {
  const [carsSort, setCarsSort] = useState<CarsSort>({
    col: 'id',
    dir: SORT_ASC,
  });
  const [editCarId, setEditCarId] = useState(-1);
  const [cars, appendCar, replaceCar, removeCar] = useList<Car>([
    ...initialCars,
  ]);

  const [confirmDeleteCarMessage, setConfirmDeleteCarMessage] = useState<
    ConfirmDeleteCarMessage
  >({
    message: '',
    carId: -1,
  });

  const addCar = useCallback(
    (carForm: CarFormData) => {
      appendCar(carForm);
      setEditCarId(-1);
    },
    [appendCar],
  );

  const saveCar = useCallback(
    (car: Car) => {
      replaceCar(car);
      setEditCarId(-1);
    },
    [replaceCar],
  );

  const confirmDeleteCar = useCallback(
    (carId: number) => {
      const { make, model, year } = cars.find((c) => c.id === carId)!;

      setConfirmDeleteCarMessage({
        message: `Are you sure you want to delete the ${year} ${make} ${model}?`,
        carId,
      });
    },
    [cars],
  );

  const deleteCar = useCallback(
    (carId: number) => {
      removeCar(carId);
      setEditCarId(-1);
      setConfirmDeleteCarMessage({
        message: '',
        carId: -1,
      });
    },
    [removeCar],
  );

  const cancelCar = useCallback(() => {
    setEditCarId(-1);
  }, []);

  const sortCars = useCallback(
    (col: keyof Car) => {
      if (col === carsSort.col) {
        setCarsSort({
          col,
          dir: SORT_ASC === carsSort.dir ? SORT_DESC : SORT_ASC,
        });
      } else {
        setCarsSort({
          col,
          dir: SORT_ASC,
        });
      }
    },
    [carsSort],
  );

  const cancelConfirmDeleteCar = useCallback(function cancelConfirmDeleteCar() {
    setConfirmDeleteCarMessage({
      message: '',
      carId: -1,
    });
  }, []);

  return {
    sortedCars: useMemo(() => sortedCars(cars, carsSort), [cars, carsSort]),
    editCarId,
    carsSort,
    confirmDeleteCarMessage,
    addCar,
    saveCar,
    confirmDeleteCar,
    deleteCar,
    editCar: setEditCarId,
    cancelCar,
    sortCars,
    cancelConfirmDeleteCar,
  };
};
