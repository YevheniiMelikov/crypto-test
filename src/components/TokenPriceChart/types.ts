export interface EthereumDEXTrade {
  quotePrice: number;
  count: number;
  tradeAmount: number;
  date: {
    date: string;
  };
  baseCurrency: {
    address: string;
    name: string;
  };
  quoteCurrency: {
    address: string;
    name: string;
  };
}

export interface EthereumDEXTradeQuery {
  ethereum: {
    dexTrades: EthereumDEXTrade[];
  };
}

export interface EthereumDEXTradeQueryArgs {
  /**
   * ISO8601DateTime string
   * Example: '2022-07-28T14:48:00.000Z'
   *
   * @type {string}
   * @memberof EthereumDEXTradeQueryArgs
   */
  since: string;
  /**
   * First currency address listed in currency pair.
   * Should start from 0x and contain hex digits.
   *
   * @type {string | undefined}
   * @memberof EthereumDEXTradeQueryArgs
   */
  baseCurrencyAddress?: string;
  /**
   * Couter currency address.
   * Should start from 0x and contain hex digits.
   *
   * @type {string}
   * @memberof EthereumDEXTradeQueryArgs
   */
  quoteCurrencyAddress: string;
}
