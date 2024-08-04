import React from "react";
import useStore from "../zustand/store";
function Button() {
const resetCount = useStore((state) => state.resetCount)
const increment = useStore((state) => state.increment)

  console.log("render zustand button.jsx");
  return (
    <div>
      <button onClick={increment}>Sumar 1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Button;
