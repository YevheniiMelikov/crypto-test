import { gql } from '@apollo/client';

export const EthereumDEXTradeQueryDefinition = gql`
  query ethereum(
    $since: ISO8601DateTime
    $baseCurrencyAddress: String
    $quoteCurrencyAddress: String
  ) {
    ethereum(network: bsc) {
      dexTrades(
        date: { since: $since }
        options: { limit: 10000 }
        exchangeAddress: { is: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73" }
        baseCurrency: { is: $baseCurrencyAddress }
        quoteCurrency: { is: $quoteCurrencyAddress }
      ) {
        quotePrice
        date {
          date
        }
        baseCurrency {
          address
          name
          symbol
        }
        quoteCurrency {
          address
          name
        }
      }
    }
  }
`;
