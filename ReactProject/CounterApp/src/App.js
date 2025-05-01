import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={ {textAlign: 'center'}}>
      
      <h1>Click to Increase or Decrease the Number</h1>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter App</h1>
        <h2>{"'"+ count +"'"}</h2>
        <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ margin: '5px' }}>Reset</button>
      </div>
    </div>
  );
}

export default App;

