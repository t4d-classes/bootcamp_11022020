import { useState } from "react";

import { Item } from "../models/item";

export type AppendItem<S> = (newItem: Omit<S, "id">) => void;

export type ReplaceItem<S> = (item: S) => void;

export type RemoveItem = (itemId: number) => void;

export type UseList = <T extends Item>(
  initialItems: T[]
) => [T[], AppendItem<T>, ReplaceItem<T>, RemoveItem];

export const useList: UseList = <T extends Item>(initialItems: T[]) => {
  const [items, setItems] = useState(initialItems);

  const appendItem: AppendItem<T> = (newItem) => {
    setItems([
      ...items,
      {
        ...newItem,
        id: Math.max(...items.map((c) => c.id), 0) + 1,
      } as T,
    ]);
  };

  const replaceItem: ReplaceItem<T> = (item) => {
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
