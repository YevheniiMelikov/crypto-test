import { ApolloError } from '@apollo/client';
import { Rings } from 'react-loader-spinner';
import { ChatState } from './styled';

export interface ChartQueryStatesProps<T extends unknown> {
  loading?: boolean;
  error?: ApolloError;
  data?: T[];
  baseCurrencyAddress?: string;
}

export const ChartQueryStates = <T extends unknown>({
  loading,
  error,
  data,
  baseCurrencyAddress,
}: ChartQueryStatesProps<T>) => {
  if (error && !loading) {
    return (
      <ChatState>
        <h1>Something went wrong</h1>
        <span>Try reloading the page</span>
      </ChatState>
    );
  }

  if (!loading && !baseCurrencyAddress) {
    return (
      <ChatState>
        <h1>No token selected</h1>
        <span>Selecting token in dropdown above the chart</span>
      </ChatState>
    );
  }

  if (loading) {
    return <Rings color="#00BFFF" height={80} width={80} />;
  }

  if (!loading && !data?.length) {
    return (
      <ChatState>
        <h1>No data found</h1>
        <span>Try selecting different token or increasing time interval</span>
      </ChatState>
    );
  }

  return null;
};
