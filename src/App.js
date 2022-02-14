import React, { useState } from "react";
import "./App.css";

function Display(props) {
  return (
    <div id="display">
      <div
        style={{
          backgroundColor: "gray",
          color: "white",
          height: "100px",
          width: "100%",
        }}
      >
        {props.result}
      </div>
    </div>
  );
}

function Buttons(props) {
  return (
    <div id="Buttons">
      <button id="cal_clear" onClick={props.handleClear}>
        C
      </button>
      <button id="cal_div" onClick={props.handleClick}>
        /
      </button>
      <button id="cal_mul" onClick={props.handleClick}>
        *
      </button>
      <button id="cal_sub" onClick={props.handleClick}>
        -
      </button>
      <button id="cal_7" onClick={props.handleClick}>
        7
      </button>
      <button id="cal_8" onClick={props.handleClick}>
        8
      </button>
      <button id="cal_9" onClick={props.handleClick}>
        9
      </button>
      <button id="cal_add" onClick={props.handleClick}>
        +
      </button>
      <button id="cal_4" onClick={props.handleClick}>
        4
      </button>
      <button id="cal_5" onClick={props.handleClick}>
        5
      </button>
      <button id="cal_6" onClick={props.handleClick}>
        6
      </button>
      <button id="cal_1" onClick={props.handleClick}>
        1
      </button>
      <button id="cal_2" onClick={props.handleClick}>
        2
      </button>
      <button id="cal_3" onClick={props.handleClick}>
        3
      </button>
      <button id="cal_equal" onClick={props.handleCalculate}>
        =
      </button>
      <button id="cal_0" onClick={props.handleClick}>
        0
      </button>
      <button id="cal_dot" onClick={props.handleClick}>
        .
      </button>
      <button id="null" onClick={props.handleClick}></button>
    </div>
  );
}

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.innerHTML));
  };
  const handleClear = () => {
    setResult("");
  };
  const handleCalculate = () => {
    setResult(eval(result));
  };

  return (
    <div className="App">
      <Display result={result} />
      <Buttons
        handleClick={handleClick}
        handleClear={handleClear}
        handleCalculate={handleCalculate}
      />
    </div>
  );
}

export default App;
