import React from 'react';
import './App.css';

function App() {
  const [showTitle, setShowTitle] = React.useState(true);
  const onClick = () => setShowTitle(prevState => !prevState);

  return (
    <div className="App">
      <button onClick={onClick}>Show/Hide</button>
      {showTitle ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
}


  
export default App;
