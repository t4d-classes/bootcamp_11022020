import React, { createContext, useContext } from "react";

import { Car } from "../models/cars";
import { CarStore, useCarStore } from "../hooks/useCarStore";

const carStoreContext = createContext({} as CarStore);

const carList: Car[] = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2019,
    color: "white",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2020,
    color: "red",
    price: 100000,
  },
];

export type CarStoreProviderProps = {
  children: React.ReactNode;
};

export const CarStoreProvider = ({ children }: CarStoreProviderProps) => {
  return (
    <carStoreContext.Provider value={useCarStore(carList)}>
      {children}
    </carStoreContext.Provider>
  );
};

export const useCarStoreContext = () => {
  return useContext(carStoreContext);
};
