import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import About from "./components/About";
import Home from "./components/Home";
import Memo from "./components/Memo"
import { UserContext } from "./context/UserContext"

function App() {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser}), [user, setUser])

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
            <li>
              <Link to="/memo/">Memo</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={value}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/memo" exact component={Memo} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
