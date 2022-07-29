import React, { useMemo, useState, useContext } from 'react';
import { Token } from '../types';

export interface TokenContextState {
  selectedToken?: Token;
  setSelectedToken: React.Dispatch<React.SetStateAction<Token | undefined>>;
}

const defaultState: TokenContextState = {
  selectedToken: undefined,
  setSelectedToken: () => undefined,
};

export const TokenContext =
  React.createContext<TokenContextState>(defaultState);

export const useTokenContext = () => useContext(TokenContext);

export const TokenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedToken, setSelectedToken] = useState<Token>();

  const state = useMemo(
    () => ({ selectedToken, setSelectedToken }),
    [selectedToken]
  );

  return (
    <TokenContext.Provider value={state}>{children}</TokenContext.Provider>
  );
};
