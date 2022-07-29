import { createItemPickerContext } from './ItemPickerContext';
import { Container, Item, Text } from './styled';

export const createItemPicker = <O extends string[]>(
  options: O,
  label?: string,
  defaultItem?: O[number]
) => {
  const { ItemContext, useItemContext, ItemContextProvider } =
    createItemPickerContext<O>(options, defaultItem);

  const ItemPicker = () => {
    const { item, setItem } = useItemContext();

    const getItemClickHandler = (option: O[number]) => () => setItem(option);

    return (
      <Container>
        {label && <Text>{label}</Text>}
        {options.map((option) => (
          <Item
            isActive={option === item}
            onClick={getItemClickHandler(option)}
            key={option}
          >
            <Text>{option}</Text>
          </Item>
        ))}
      </Container>
    );
  };

  return {
    ItemContext,
    useItemContext,
    ItemContextProvider,
    ItemPicker,
  };
};
