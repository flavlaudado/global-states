import { createContext, useContext, useState } from "react";

const TestContext = createContext();

export const TestContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Titulito");
  const resetCount = () =>{
    setCount(0)
  }
  return (
    <TestContext.Provider value={{title, count, setCount, resetCount }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTestContext = () =>{
    const context = useContext(TestContext)
    return context
} 
