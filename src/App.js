import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCount(counter + 1)}>
        Click me
      </button>
    </div>
  );

export default App;
