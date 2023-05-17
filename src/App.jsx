import React from "react";
import { useRoutes } from "react-router-dom";
import "./styles/styles.css";
import"flowbite/dist/flowbite"
import routes from "./router";


function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
