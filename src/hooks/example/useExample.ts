//@delete:folder
import React from 'react';

function useExample({ initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  const increment = React.useCallback(() => setCount((prev) => prev + 1), []);
  return { count, increment };
}

export default useExample;
