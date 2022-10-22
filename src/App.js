import React from 'react';

function App() {
  const arr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  
  return (
    <div>
     {arr.map((val)=>(
      <li>{val}</li>
     ))}
    </div>
  );
  };
  
export default App;
