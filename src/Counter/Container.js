import {useState} from 'react';
import {createContainer} from 'unstated-next';

const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {count, increment, decrement};
};

export const Counter = createContainer(useCounter);
