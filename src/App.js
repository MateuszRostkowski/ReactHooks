import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import About from "./components/About";
import Home from "./components/Home";
import { UserContext } from "./context/UserContext"

// my own Counter Hook
function useCounter(number) {
  const [count, setCount] = useState(number);

  return {
    count,
    setCount
  }
}

function App() {
  const [value, setValue] = useState(1)

  const providerValue = useMemo(() => ({ value, setValue}), [value, setValue])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
