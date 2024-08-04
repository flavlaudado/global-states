import React from "react";
import { useTestContext } from "../context/context.test";

function Button() {
  const { setCount, count, resetCount } = useTestContext();

  const increment = () => {
    setCount(count + 1);
  };
  console.log("render button.jsx");
  return (
    <div>
      <button onClick={increment}>Sumar 1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Button;
