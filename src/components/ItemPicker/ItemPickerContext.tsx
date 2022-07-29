import React, { useMemo, useState, useContext } from 'react';

interface ItemState<I extends string> {
  item: I;
  setItem: React.Dispatch<React.SetStateAction<I>>;
}

export const createItemPickerContext = <O extends string[]>(
  items: O,
  defaultItem?: O[number]
) => {
  const defaultState: ItemState<O[number]> = {
    item: defaultItem || items[0],
    setItem: () => undefined,
  };

  const ItemContext = React.createContext<ItemState<O[number]>>(defaultState);

  const useItemContext = () => useContext(ItemContext);

  const ItemContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [item, setItem] = useState<O[number]>(defaultState.item);

    const state = useMemo(() => ({ item, setItem }), [item]);

    return (
      <ItemContext.Provider value={state}>{children}</ItemContext.Provider>
    );
  };

  return {
    ItemContext,
    useItemContext,
    ItemContextProvider,
  };
};
