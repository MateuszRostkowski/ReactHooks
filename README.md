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
});

```

### useEffect usage

``` javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

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
