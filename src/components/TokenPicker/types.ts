export interface Token {
  symbol: string;
  address: string;
}

export interface Balance {
  currency: Token;
  value: number;
}

export interface Address {
  balances: Balance[];
}

export interface EthereumTokensQuery {
  ethereum: {
    address: Address[];
  };
}

export interface EthereumTokensQueryArgs {
  /**
   * Couter currency address.
   * Should start from 0x and contain hex digits.
   *
   * @type {string}
   * @memberof EthereumTokensQueryArgs
   */
  quoteCurrencyAddress: string;
}
