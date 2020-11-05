import React, { createContext, useContext } from "react";

import { Color } from "../models/colors";
import { ColorStore, useColorStore } from "../hooks/useColorStore";

const colorStoreContext = createContext({} as ColorStore);

const colorList: Color[] = [
  { id: 1, name: "red", hexcode: "FF0000" },
  { id: 2, name: "blue", hexcode: "0000FF" },
  { id: 3, name: "white", hexcode: "FFFFFF" },
  { id: 4, name: "green", hexcode: "00FF00" },
  { id: 5, name: "brown", hexcode: "A52A2A" },
  { id: 6, name: "aqua", hexcode: "00FFFF" },
];

export type ColorStoreProviderProps = {
  children: React.ReactNode;
};

export const ColorStoreProvider = ({ children }: ColorStoreProviderProps) => {
  return (
    <colorStoreContext.Provider value={useColorStore(colorList)}>
      {children}
    </colorStoreContext.Provider>
  );
};

export const useColorStoreContext = () => {
  return useContext(colorStoreContext);
};
