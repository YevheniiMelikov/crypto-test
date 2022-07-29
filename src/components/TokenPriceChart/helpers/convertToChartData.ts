import { EthereumDEXTrade } from '../types';

export const convertToChartData = (data?: EthereumDEXTrade[]) => {
  if (!data) {
    return {
      chartData: [],
      chartKeys: [],
    };
  }

  const chartKeys = new Set<string>();
  const chartData = data
    .map(({ date }) => date.date)
    .map((filterDate) => {
      const fields: Record<string, number> = {};

      data.forEach(({ date, quotePrice, baseCurrency }) => {
        if (filterDate === date.date) {
          fields[baseCurrency.name] = quotePrice;
          chartKeys.add(baseCurrency.name);
        }
      });

      return {
        name: filterDate,
        ...fields,
      };
    });

  return {
    chartData,
    chartKeys: Array.from(chartKeys),
  };
};
