import { useState, useEffect } from 'react';

const useDebounce = (val, delay) => {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    //!** amount of time required between keystrokes for the request to be send
    return () => {
      clearTimeout(handler);
    };
  }, [val]);
  return debounceVal;
};

export default useDebounce;
