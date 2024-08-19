import React from "react";
import ContextProvider from "./context/Context";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <ContextProvider>
      <Sidebar/>
      <Main />
    </ContextProvider>
  );
}

export default App;
