import { useState } from 'react';

// my own Counter Hook
export function useCounter(number) {
    const [count, setCount] = useState(number);
  
    return {
      count,
      setCount
    }
}