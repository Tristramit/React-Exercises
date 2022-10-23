import React,{ useState } from 'react';

function App() {
  const[firstName, setFirstName] = useState("")
  const[lastName, setLastName] = useState("")


  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value)
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value)
  };
  const clickHandler = () =>{
    alert("Hello " + firstName + " "+ lastName + "!")
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="First Name" onChange={firstNameChangeHandler}/>
        <input type="text" placeholder="Last Name" onChange={lastNameChangeHandler}/>
        <button onClick={clickHandler}>Greet Me!</button>
        </form>
    </div>
  );
  };
  
export default App;
