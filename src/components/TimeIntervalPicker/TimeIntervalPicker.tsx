import { createItemPicker } from '../ItemPicker';

declare const IntervalValues: ['24h', '7d', 'YTD', 'All'];
export type Intervals = typeof IntervalValues[number];
export const intervals: Intervals[] = ['24h', '7d', 'YTD', 'All'];

export const {
  ItemContext: TimeIntervalContext,
  useItemContext: useTimeIntervalContext,
  ItemContextProvider: TimeIntervalContextProvider,
  ItemPicker: TimeIntervalPicker,
} = createItemPicker(intervals, 'Time:');
