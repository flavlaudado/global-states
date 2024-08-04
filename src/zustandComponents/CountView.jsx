import React from 'react'
import useStore from '../zustand/store';
function CountView() {
const count = useStore((state) => state.count); 
console.log("render zustand countview.jsx")
  return (
    <p>{count}</p>
  )
}

export default CountView