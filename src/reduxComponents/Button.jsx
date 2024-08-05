import { useDispatch } from 'react-redux'
import { increment, reset } from '../redux/slices/counterSlice';

function Button() {
  const dispatch = useDispatch()


  console.log("render redux button.jsx");
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Sumar 1</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Button;
