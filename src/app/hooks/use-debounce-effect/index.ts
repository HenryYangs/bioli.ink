import { DependencyList, useEffect } from 'react'

export const useDebounceEffect = (
  fn: () => void,
  waitTime: number,
  deps?: DependencyList,
) => {
  useEffect(() => {
    const t = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      fn.apply(undefined, deps);
    }, waitTime);

    return () => {
      clearTimeout(t);
    }
  }, deps);
};
