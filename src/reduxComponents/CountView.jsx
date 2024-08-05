import { useSelector } from "react-redux";

function CountView() {
  const count = useSelector((state) => state.counter.value);
  console.log("render redux countview.jsx");
  return <p>{count}</p>;
}

export default CountView;
