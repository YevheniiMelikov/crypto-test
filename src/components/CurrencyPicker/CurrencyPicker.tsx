import { createItemPicker } from '../ItemPicker';

declare const CurrencyValues: ['BUSD', 'ETH', 'BNB', 'SOL', 'ADA'];
export type Currencies = typeof CurrencyValues[number];
export const currencies: Currencies[] = ['BUSD', 'ETH', 'BNB', 'SOL', 'ADA'];

export const {
  ItemContext: CurrencyContext,
  useItemContext: useCurrencyContext,
  ItemContextProvider: CurrencyContextProvider,
  ItemPicker: CurrencyPicker,
} = createItemPicker(currencies, 'Quote:');
