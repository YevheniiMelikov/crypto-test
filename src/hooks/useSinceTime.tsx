import { useMemo } from 'react';
import {
  Intervals,
  useTimeIntervalContext,
} from '../components/TimeIntervalPicker';

const dayInMS = 3600 * 24 * 1000;
const weekInMS = dayInMS * 7;

const offsetDateByInterval = (interval: Intervals) => {
  switch (interval) {
    case '24h':
      return new Date(Date.now() - dayInMS).toISOString();
    case 'YTD':
      return new Date(new Date().getFullYear(), 0).toISOString();
    case 'All':
      return new Date(0).toISOString();
    case '7d':
    default:
      return new Date(Date.now() - weekInMS).toISOString();
  }
};

export const useSinceTime = () => {
  const { item } = useTimeIntervalContext();

  const since = useMemo(() => offsetDateByInterval(item), [item]);

  return since;
};
