import './App.css';

const buttonAlertFunction = () => {alert('Button clicked!')};

function App() {
  return (
    <div className="App"> 
      <button onClick={buttonAlertFunction}>Click me!</button>
    </div>
  );
}

export default App;
