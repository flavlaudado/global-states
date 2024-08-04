import React from 'react'
import { useTestContext } from '../context/context.test'

function CountView() {
const{count} = useTestContext(); 
console.log("render countview.jsx")
  return (
    <p>{count}</p>
  )
}

export default CountView