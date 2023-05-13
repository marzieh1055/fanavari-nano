import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Requests from "./pages/Requests/Requests";
import Forgotpassword from "./pages/Login/Forgotpassword";
import Verification from "./pages/Register/Verification";
import Addexpert from "./pages/Expert/Addexpert";
const routes = [
  { path: "/", element: <Dashboard />},
  { path: "/dashboard", element: <Dashboard />},
  { path: "/dashboard/requests", element: <Requests />},
  { path: "/auth/login", element: <Login />},
  { path: "/auth/register", element: <Register />},
  { path: "/auth/Verification", element: <Verification />},
  { path: "/auth/forgotpassword", element: <Forgotpassword />},
  { path: "/Addexpert", element: <Addexpert />},

];

export default routes;