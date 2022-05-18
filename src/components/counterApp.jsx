import React from "react";

const CounterApp = (props) => {
  let checker = props.counterVal % 2 === 0;
  return (
    <React.Fragment>
      <h1 style={{ color: checker ? "green" : "red" }}>
        Counter App {props.counterVal}
      </h1>
      <button onClick={() => props.onClick(1)}>Increament</button>
      <button onClick={() => props.onClick(-1)}>Decreament</button>
      <button onClick={() => props.onClick(2)}>Double</button>
    </React.Fragment>
  );
};

export default CounterApp;
