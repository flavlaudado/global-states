import Button from "./reduxComponents/Button";
import CountView from "./reduxComponents/CountView";
import Title from "./reduxComponents/Title";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function ReduxApp() {
  return (
    <div>
      <Provider store={store}>
        <Title />
        <Button />
        <CountView />
      </Provider>
    </div>
  );
}

export default ReduxApp;
