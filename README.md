# REACT Hooks

Training with React Hooks


## useState usage

``` javascript
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
```

## useEffect 

```javascript

useEffect(callback, array)

// componentDidMount (when the array is empty)
useEffect(() => {
    console.log("mount")
    
    // componentDidUnmount
    return (
      console.log("unMount")
    )
}, []);

// componentDidUpdate (when there is no array as the second useEffect parameter)
useEffect(() => {
    document.title = `You clicked ${count} times`;
}, [count]);

```

### useEffect usage

``` javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useEffect unMount explanation:

```javascript
// This works like componentDidUpdate
useEffect(() => {
  // ...
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});

// Mount with { friend: { id: 100 } } props
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // Run first effect

// Update with { friend: { id: 200 } } props
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // Run next effect

// Update with { friend: { id: 300 } } props
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // Clean up previous effect
ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // Run next effect

// Unmount
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // Clean up last effect

```

### Tips, from react docs

- Use Multiple useEffects functions to Separate Concerns

## Links
- (setInterval)[https://overreacted.io/making-setinterval-declarative-with-react-hooks/] - helps when working with timers
- (Ben Awad)[https://www.youtube.com/watch?v=f687hBjwFcM]

## useContext

Create your context in ```context``` folder


/context/UserContex.js
```javascript
import { createContext } from "react"

export const UserContext = createContext(null);
```

Add Context Provider to the main file in project, with initial data (it could be getter and setter from )

```javascript
import React, { useState } from "react"
import { UserContext } from "./context/UserContext";

export function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/memo" exact component={Memo} />
      </UserContext.Provider>
    </Router>
  )
}
```

Go to the file that you want to use your context value

```About.jsx```
```javascript
import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { login } from "../utils/login"

export function About() {
    const { user, setUser } = useContext(UserContext)
    return (
        <div>
            <h2>About</h2>
            <pre>{ JSON.stringify(user, null, 2) }</pre>
            { user ? (
                <button onClick={() => {
                    setUser(null)
                }}>logout</button>
            ) : (
                <button onClick={async () => {
                    const user = await login()
                    setUser(user)
                }}>login</button>
            )}

        </div>
    )
}
```

You can use context in another file

```Home.jsx```
```javascript
import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"

function Home() {
    const { user } = useContext(UserContext)
    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default Home
```

User value is changing inside ```About.jsx``` and the value inside ```Home.jsx``` is changing too
