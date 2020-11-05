import { Color, NewColor } from "../models/colors";
import { useList } from "../hooks/useList";

export type ColorStore = {
  colors: Color[];
  addColor: (color: NewColor) => void;
  deleteColor: (colorId: number) => void;
};

export const useColorStore = (initialColors: Color[]) => {
  const [colors, appendColor, , removeColor] = useList([...initialColors]);

  return {
    colors,
    addColor: appendColor,
    deleteColor: removeColor,
  };
};
