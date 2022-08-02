import { useQuery } from '@apollo/client';
import { useEffect, useMemo } from 'react';
import Select, { SingleValue } from 'react-select';
import { useCurrency } from '../../hooks';
import { useTokenContext } from './components';
import { extractTokensFromData, filterByValueOrLabel } from './helpers';
import { EthereumTokensQueryDefinition } from './queries';
import { Container } from './styled';
import { EthereumTokensQuery, EthereumTokensQueryArgs, Token } from './types';

export const TokenPicker = () => {
  const quoteCurrencyAddress = useCurrency();
  const { selectedToken, setSelectedToken } = useTokenContext();

  const { data, loading, error } = useQuery<
    EthereumTokensQuery,
    EthereumTokensQueryArgs
  >(EthereumTokensQueryDefinition, {
    variables: {
      quoteCurrencyAddress,
    },
  });

  useEffect(() => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    setSelectedToken(undefined);
  }, [quoteCurrencyAddress]);

  const tokenOptions = useMemo(
    () =>
      extractTokensFromData(data).map((token) => ({
        label: token.symbol,
        value: token,
      })),
    [data]
  );

  const handleChange = (
    option: SingleValue<{ label?: string; value?: Token | null }>
  ) => option?.value && setSelectedToken(option.value);

  return (
    <Container>
      <span>Base:</span>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={tokenOptions[0]}
        isLoading={loading}
        isDisabled={loading}
        name="token"
        options={tokenOptions}
        isSearchable
        onChange={handleChange}
        filterOption={filterByValueOrLabel}
        value={
          selectedToken
            ? { label: selectedToken.symbol, value: selectedToken }
            : null
        }
      />
    </Container>
  );
};
