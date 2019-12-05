import React, { useState, useEffect } from 'react';

function useCounter(number) {
  const [count, setCount] = useState(number);

  return {
    count,
    setCount
  }
}

function App() {
  const counter = useCounter(0)

  const counter2 = useCounter(4)

  return (
    <div>
      <p>Pressed { counter.count } times.</p>
      <button onClick={ () => counter.setCount(counter.count + 1) }>Press me</button>
      <button onClick={ () => counter.setCount(0) }>Reset me</button>
      <div>
        <p>Pressed { counter2.count } times.</p>
        <button onClick={ () => counter2.setCount(counter2.count + 1) }>Press me</button>
        <button onClick={ () => counter2.setCount(0) }>Reset me</button>
      </div>
    </div>
  );
}

export default App;
