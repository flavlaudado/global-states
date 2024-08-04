import "./App.css";
import ContextApp from "./ContextApp";
import ZustandApp from "./ZustandApp";

function App() {
  console.log("render app.jsx");
  return (
    <>
      <ContextApp/>
      <ZustandApp/>
    </>
  );
}

export default App;
