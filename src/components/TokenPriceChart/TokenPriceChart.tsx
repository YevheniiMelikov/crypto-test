import { useMemo, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { EthereumDEXTradeQueryDefinition } from './queries';
import { EthereumDEXTradeQuery, EthereumDEXTradeQueryArgs } from './types';
import { convertToChartData } from './helpers/convertToChartData';
import { AbsoluteCenter, Container } from './styled';
import { useCurrency, useSinceTime } from '../../hooks';
import { useTokenContext } from '../TokenPicker';
import { ChartQueryStates, LineChart } from './components';

export const TokenPriceChart = () => {
  const quoteCurrencyAddress = useCurrency();
  const since = useSinceTime();
  const { selectedToken } = useTokenContext();

  const baseCurrencyAddress = selectedToken?.address;

  const {
    data: priceData,
    loading,
    error,
  } = useQuery<EthereumDEXTradeQuery, EthereumDEXTradeQueryArgs>(
    EthereumDEXTradeQueryDefinition,
    {
      variables: {
        since,
        baseCurrencyAddress,
        quoteCurrencyAddress,
      },
      fetchPolicy: 'network-only',
      skip: !baseCurrencyAddress,
    }
  );

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [error]);

  const { chartData, chartKeys } = useMemo(() => {
    return convertToChartData(priceData?.ethereum.dexTrades);
  }, [priceData]);

  return (
    <Container>
      <LineChart chartData={chartData} chartKeys={chartKeys} />
      <AbsoluteCenter>
        <ChartQueryStates
          loading={loading}
          data={chartData}
          baseCurrencyAddress={baseCurrencyAddress}
          error={error}
        />
      </AbsoluteCenter>
    </Container>
  );
};
