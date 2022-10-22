import React from 'react';
import ListItem from './components/ListItem';

function App() {
  const arr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
  
  return (
    <div>
     {arr.map((val)=>(
      <ListItem List={val} />
     ))}
    </div>
  );
  };
  
export default App;
