import {
  CurrencyContextProvider,
  CurrencyPicker,
} from '../../components/CurrencyPicker';
import {
  TimeIntervalContextProvider,
  TimeIntervalPicker,
} from '../../components/TimeIntervalPicker';
import {
  TokenContextProvider,
  TokenPicker,
} from '../../components/TokenPicker';
import { TokenPriceChart } from '../../components/TokenPriceChart';
import { ChartContainer, Container, Controls } from './styled';

export const TokenPrices = () => {
  return (
    <CurrencyContextProvider>
      <TimeIntervalContextProvider>
        <TokenContextProvider>
          <Container>
            <Controls>
              <CurrencyPicker />
              <TokenPicker />
              <TimeIntervalPicker />
            </Controls>
            <ChartContainer>
              <TokenPriceChart />
            </ChartContainer>
          </Container>
        </TokenContextProvider>
      </TimeIntervalContextProvider>
    </CurrencyContextProvider>
  );
};
