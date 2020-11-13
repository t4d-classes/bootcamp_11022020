import React, { createContext, ReactNode, useContext } from 'react';

import { Car } from '../models/Car';
import { CarToolStore } from '../models/CarToolStore';
import { useCarToolStore } from '../hooks/useCarStore';

const carToolStoreContext = createContext({} as CarToolStore);

export type CarToolStoreProviderProps = {
  initialCars: Car[];
  children: ReactNode;
};

export function CarToolStoreProvider({
  initialCars,
  children,
}: CarToolStoreProviderProps) {
  return (
    <carToolStoreContext.Provider value={useCarToolStore(initialCars)}>
      {children}
    </carToolStoreContext.Provider>
  );
}

export function useCarToolStoreContext() {
  return useContext(carToolStoreContext);
}
