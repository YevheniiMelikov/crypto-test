import { FilterOptionOption } from 'react-select/dist/declarations/src/filters';
import { Token } from '../types';

export const filterByValueOrLabel = (
  item: FilterOptionOption<{
    label: string;
    value: Token;
  }>,
  inputValue: string
) => {
  const filter = inputValue.toLowerCase().trim();
  const {
    data: {
      value: { address },
      label,
    },
  } = item;

  return (
    address.toLowerCase().includes(filter) ||
    label.toLowerCase().includes(filter)
  );
};
