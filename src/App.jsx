import "./App.css";
import ContextApp from "./ContextApp";
import ZustandApp from "./ZustandApp";
import ReduxApp from "./ReduxApp";
//agregar practica de spread operators 
function App() {
  console.log("render app.jsx");
  return (
    <>
      <ContextApp/>
      <ZustandApp/>
      <ReduxApp/>
    </>
  );
}

export default App;
