import React from "react";
import { useRoutes } from "react-router-dom";
import "./styles/styles.css";
import"flowbite/dist/flowbite"
import routes from "./router";
import UserDataProvider from "./contexts/UserData.Provider";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <UserDataProvider>
        {router}
      </UserDataProvider>
    </>
  ) 
}

export default App;
