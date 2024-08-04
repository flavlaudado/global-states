import Button from "./components/Button";
import CountView from "./components/CountView";
import { TestContextProvider } from "./context/context.test";
import Title from "./components/Title";
function ContextApp() {
  return (
    <TestContextProvider>
      <Title />
      <Button />
      <CountView />
    </TestContextProvider>
  );
}

export default ContextApp;
