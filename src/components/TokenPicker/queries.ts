import { gql } from '@apollo/client';

export const EthereumTokensQueryDefinition = gql`
  query ethereum($quoteCurrencyAddress: String) {
    ethereum(network: bsc) {
      address(address: { is: $quoteCurrencyAddress }) {
        balances {
          currency {
            symbol
            address
          }
          value
        }
      }
    }
  }
`;
