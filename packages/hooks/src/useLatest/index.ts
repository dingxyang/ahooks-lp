import { useRef } from 'react';

function useLasted<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export default useLasted;
