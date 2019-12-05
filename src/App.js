import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <p>Pressed {count} times.</p>
        <button onClick={() => setCount(count + 1)}>Press me</button>
        <button onClick={() => setCount(0)}>Reset me</button>
    </div>
  );
}

export default App;
