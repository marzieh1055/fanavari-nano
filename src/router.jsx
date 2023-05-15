import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Requests from "./pages/Requests/Requests";
import Forgotpassword from "./pages/Login/Forgotpassword";
import Verification from "./pages/Register/Verification";
import Addexpert from "./pages/Expert/Addexpert";
import Panel from "./pages/Panel";
import ViewUsers from "./pages/User/ViewUsers";
import ViewExpert from "./pages/Expert/viewExpert";
import ViewTickets from "./pages/Ticket/ViewTickets";
import AddTicket from "./pages/Ticket/AddTicket";
import Support from "./pages/support/Support";
import SiteGuide from "./pages/siteGuide/SiteGuide";
import Guarantee from "./pages/siteGuide/Guarantee";
import AddFacilities from "./pages/Facilities/AddFacilities";
import AllNotifs from "./pages/notif/AllNotifs";
import ViewRequest from "./pages/request/ViewRequest";
import OpenedRequests from "./pages/request/OpenedRequests";
import UploadDoc from "./pages/UploadDoc";

const routes = [
  {
    path: "/panel",
    element: <Panel />,
    children: [ 
      { path: "*", element: <Dashboard /> },
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "requests", element: <Requests /> },
      { path: "Addexpert", element: <Addexpert /> },
      { path: "viewExpert", element: <ViewExpert /> },
      { path: "viewUsers", element: <ViewUsers /> },
      { path: "viewTickets", element: <ViewTickets /> },
      { path: "addTicket", element: <AddTicket /> },
      { path: "suport", element: <Support /> },
      { path: "siteGuide", element: <SiteGuide /> },
      { path: "guarantee", element: <Guarantee /> },
      { path: "addFacilities", element: <AddFacilities /> },
      { path: "allNotifs", element: <AllNotifs /> },
      { path: "viewRequest", element: <ViewRequest /> },
      { path: "openedRequests", element: <OpenedRequests /> },
      { path: "oploadDoc", element: <UploadDoc /> },
    ],
  },

  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/Verification", element: <Verification /> },
  { path: "/auth/forgotpassword", element: <Forgotpassword /> },
];

export default routes;
