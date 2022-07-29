import { BrowserRouter } from 'react-router-dom';
import { TokenPrices } from './pages/TokenPrices';

export const App = () => {
  return (
    <BrowserRouter>
      <TokenPrices />
    </BrowserRouter>
  );
};
