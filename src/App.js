import React, { useReducer } from "react";
import "./App.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 5 });
  return (
    <div className="App">
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>
        add 5
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>
        add 1
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatch({ type: "RESET", amount: 5 })}>
        reset
      </button>
    </div>
  );
}

export default App;
