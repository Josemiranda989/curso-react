// rafcp //crea un functional component con proptypes

import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  //handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    //   setCounter( (c) => c +1 );
  };

  //handleSubstract
  const handleSubstract = () => {
    setCounter(counter - 1);
    //   setCounter( (c) => c +1 );
  };

  //handleSubstract
  const handleReset = () => {
    setCounter(value);
    //   setCounter( (c) => c +1 );
  };

  return (
    <>
      <h1> CounterApp </h1>

      <h2>{counter}</h2>

      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
