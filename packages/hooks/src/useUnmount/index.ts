import { useEffect } from 'react';
import useLasted from '../useLatest';

const useUnmount = (fn: () => void) => {
  const fnRef = useLasted(fn);
  useEffect(
    () => () => {
      fnRef.current();
    },
    [],
  );
};

export default useUnmount;
