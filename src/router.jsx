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
import ViewExpert from "./pages/Expert/ViewExpert";
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
import ExpertViewRequest from "./pages/Requests/ExpertViewRequest";
import DashboardUser from "./pages/Dashboard/DashboardUser";
import UserInfo from "./pages/User/UserInfo";
import LegalUserInfo from "./pages/User/LegalUserInfo";
import ExpertviewAllRequest from "./pages/Requests/ExpertviewAllRequest";
import ExpertCheckRequest from './pages/Requests/ExpertCheckRequest'
import ViewDetailRequest from './pages/request/ViewDetailRequest'
import One from "./pages/Tashilat/steps/One";
import Two from "./pages/Tashilat/steps/Two";
import Three from "./pages/Tashilat/steps/three";
import Four from "./pages/Tashilat/steps/Four";
import Five from "./pages/Tashilat/steps/Five";
import Confirm from "./pages/Tashilat/steps/Confirm";
import Tashilat from "./pages/Tashilat/Tashilat";
import WarrantyDocuments from "./pages/Requests/WarrantyDocuments";
import AdminCheckRequest from "./pages/Requests/AdminCheckRequest";

const routes = [
  {
    path: "/panel",
    element: <Panel />,
    children: [ 
      { path: "*", element: <Dashboard /> },
      { path: "", element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboarduser", element: <DashboardUser /> },
      { path: "requests", element: <Requests /> },
      { path: "Addexpert", element: <Addexpert /> },
      { path: "viewExpert", element: <ViewExpert /> },
      { path: "viewUsers", element: <ViewUsers /> },
      { path: "viewTickets", element: <ViewTickets /> },
      { path: "addTicket", element: <AddTicket /> },
      { path: "suport/:ticket_route_id", element: <Support /> },
      { path: "siteGuide", element: <SiteGuide /> },
      { path: "guarantee", element: <Guarantee /> },
      { path: "addFacilities", element: <AddFacilities /> },
      { path: "allNotifs", element: <AllNotifs /> },
      { path: "viewRequest/:id", element: <ViewDetailRequest /> },
      { path: "openedRequests", element: <OpenedRequests /> },
      { path: "oploadDoc", element: <UploadDoc /> },
      { path: "ExpertViewRequest", element: <ExpertViewRequest /> },
      { path: "WarrantyDocuments/:id", element: <WarrantyDocuments /> },
      { path: "AdminCheckRequest/:id", element: <AdminCheckRequest /> },
      
      
      { path: "expertViewAllRequest", element: <ExpertviewAllRequest /> },
      { path: "expertCheckRequest/:id", element: <ExpertCheckRequest /> },
      { path: "userInfo", element: <UserInfo /> },
      { path: "legaluserInfo", element: <LegalUserInfo /> },
      {
        path: "tashilat",
        element: <Tashilat />,
        children: [
          { path: "1", element: <One /> },
          { path: "2", element: <Two /> },
          { path: "3", element: <Three /> },
          { path: "4", element: <Four /> },
          { path: "5", element: <Five /> },
          { path: "confirm", element: <Confirm /> },
        ]
      },
      
    ],

  },

  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/Verification", element: <Verification /> },
  { path: "/auth/forgotpassword", element: <Forgotpassword /> },
];

export default routes ;