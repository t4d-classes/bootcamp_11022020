import { useState } from "react";

import { Item } from "../models/item";

export type AppendItem<E extends Item> = (newItem: Omit<E, "id">) => void;

export type ReplaceItem<A extends Item> = (item: A) => void;

export type RemoveItem = (itemId: number) => void;

export type UseList = <G extends Item>(
  initialItems: G[]
) => [G[], AppendItem<G>, ReplaceItem<G>, RemoveItem];

export const useList: UseList = <J extends Item>(startingItems: J[]) => {
  const [items, setItems] = useState(startingItems);

  const appendItem: AppendItem<J> = (newItem) => {
    setItems([
      ...items,
      {
        ...newItem,
        id: Math.max(...items.map((c) => c.id), 0) + 1,
      } as J,
    ]);
  };

  const replaceItem: ReplaceItem<J> = (item) => {
    const itemIndex = items.findIndex((c) => c.id === item.id);
    const newItems = [...items];
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const removeItem: RemoveItem = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return [items, appendItem, replaceItem, removeItem];
};
