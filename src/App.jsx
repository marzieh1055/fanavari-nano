import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import "./styles/styles.css";
import"flowbite/dist/flowbite"

function App() {
  const router = useRoutes(routes);

  return <>{router}</>;
}

export default App;
