import React, { useState } from "react";
import "./App.css";
import CounterApp from "./components/counterApp";
function App() {
  const [counter, setCounter] = useState(0);

  const valueHandler = (event) => {
    if (event === -1) {
      setCounter((prev) => prev - 1);
    } else if (event === 1) {
      setCounter((prev) => prev + 1);
    } else if ((event = 2)) {
      setCounter((prev) => prev * 2);
    }
  };
  return (
    <>
      <div className="App">
        <CounterApp counterVal={counter} onClick={valueHandler} />
      </div>
    </>
  );
}

export default App;
