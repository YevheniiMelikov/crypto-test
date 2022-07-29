import { Balance, EthereumTokensQuery } from '../types';

export const extractTokensFromData = (data?: EthereumTokensQuery) => {
  if (!data) {
    return [];
  }

  const tokens = data.ethereum.address
    .reduce<Balance[]>((acc, current) => acc.concat(current.balances), [])
    .map(({ currency }) => currency)
    .filter(({ address }) => address?.length > 10);

  return tokens;
};
