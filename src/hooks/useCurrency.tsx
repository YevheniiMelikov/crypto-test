import {
  EthereumBSCNetworkADA,
  EthereumBSCNetworkBUSD,
  EthereumBSCNetworkETH,
  EthereumBSCNetworkSOL,
  EthereumBSCNetworkBNB,
} from '../constants';
import {
  Currencies,
  useCurrencyContext,
} from '../components/CurrencyPicker/CurrencyPicker';

const getQuoteCurrencyAddress = (value: Currencies) => {
  switch (value) {
    case 'ETH':
      return EthereumBSCNetworkETH;
    case 'ADA':
      return EthereumBSCNetworkADA;
    case 'SOL':
      return EthereumBSCNetworkSOL;
    case 'BNB':
      return EthereumBSCNetworkBNB;
    case 'BUSD':
    default:
      return EthereumBSCNetworkBUSD;
  }
};

export const useCurrency = () => {
  const { item } = useCurrencyContext();
  return getQuoteCurrencyAddress(item);
};
