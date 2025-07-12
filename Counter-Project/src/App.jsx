import { useState } from "react";
import "./App.css";

function App() {
  // Hooks -> useState.
  // counter is the variable and setCounter is the function
  // INFO: The 0 in useState(0) is tsetting the initial value
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // The setCounter method is used to update our counter variable
    // setCounter(counter + 1); // Can't use assignment like so +=, has to be as defined
    // setCounter(counter + 1); // Can't use assignment like so +=, has to be as defined
    // setCounter(counter + 1); // Can't use assignment like so +=, has to be as defined
    // setCounter(counter + 1); // Can't use assignment like so +=, has to be as defined

    // This returns a callback which then it wont be able to batch and will have to wait till this is done (kind of like async and Promises)
    // INFO: The above would this still only return the first function due to batching and will only increment our counter by one.
    // INFO: The below though will wait till its finished and then get the next method due to us using the callback
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  };
  const removeValue = () => {
    if (counter < 1) return;
    // The setCounter method is used to update our counter variable
    setCounter(counter - 1); // Can't use assignment like so +=, has to be as defined
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer:</p>
    </>
  );
}

export default App;
