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
import Tashilat from "./pages/tashilat/Tashilat";
import Two from "./pages/tashilat/steps/Two";
import One from "./pages/tashilat/steps/One";
import Three from "./pages/tashilat/steps/Three"
import Four from "./pages/tashilat/steps/Four";
import Five from "./pages/tashilat/steps/Five";
import Confirm from "./pages/tashilat/steps/Confirm";
import WarrantyDocuments from "./pages/Requests/WarrantyDocuments";
import AdminCheckRequest from "./pages/Requests/AdminCheckRequest";
import DashboardExpert from "./pages/Dashboard/DashboardExpert";
import ViewDetailExpert from "./pages/Expert/ViewDetailExpert";
import Viewdetailuser from "./pages/User/Viewdetailuser";
import ErrorPage from "./pages/404/ErrorPage";
import FacilitiesDocuments from "./pages/Requests/FacilitiesDocuments";
import GenuineUserInfo from "./pages/User/GenuineUserInfo";
import AddTicketE from "./pages/Ticket/AddTicketE";
import ViewTicketsExpert from "./pages/Ticket/ViewTicketsExpert";
import ViewTicketsAdmin from "./pages/Ticket/ViewTicketsAdmin"
import Changepass from "./pages/Register/Changepass";
import Testticket from "./pages/Ticket/Testticket";
import TestticketExpert from "./pages/Ticket/TestticketExpert";
import ExpertInfo from "./pages/Expert/ExpertInfo";
import ChangepassE from "./pages/Register/ChangepassE";
import ViewDeleteReqs from "./pages/Requests/ViewDeleteReqs";

const routes = [
  {
    path: "/panel",
    element: <Panel />,
    children: [ 
      { path: "*", element: <Dashboard /> },
      { path: "", element: <Dashboard /> },

      { path: "dashboard", element: <Dashboard /> },
      { path: "dashboarduser", element: <DashboardUser /> },
      { path: "dashboardexpert", element: <DashboardExpert /> },
      { path: "requests", element: <Requests /> },
      { path: "Addexpert", element: <Addexpert /> },
      { path: "viewExpert", element: <ViewExpert /> },
      { path: "viewUsers", element: <ViewUsers /> },
      { path: "ViewTicketsAdmin", element: <ViewTicketsAdmin /> },
      { path: "ViewTicketsExpert", element: <ViewTicketsExpert /> },
      { path: "viewTickets", element: <ViewTickets /> },
      { path: "ViewDeleteReqs", element: <ViewDeleteReqs /> },

      { path: "TestticketExpert", element: <TestticketExpert /> },
      { path: "Testticket", element: <Testticket /> },

      { path: "addTicket", element: <AddTicket /> },
      { path: "addTicketE", element: <AddTicketE /> },
      { path: "suport/:ticket_route_id", element: <Support /> },
      { path: "siteGuide", element: <SiteGuide /> },
      { path: "guarantee", element: <Guarantee /> },
      { path: "addFacilities", element: <AddFacilities /> },
      { path: "allNotifs", element: <AllNotifs /> },
      { path: "viewRequest/:id", element: <ViewDetailRequest /> },
      { path: "Viewdetailuser/:id", element: <Viewdetailuser /> },
      { path: "openedRequests", element: <OpenedRequests /> },
      { path: "oploadDoc", element: <UploadDoc /> },
      { path: "ExpertViewRequest", element: <ExpertViewRequest /> },
      { path: "WarrantyDocuments/:id", element: <WarrantyDocuments /> },
      { path: "FacilitiesDocuments/:id", element: <FacilitiesDocuments /> },
      { path: "AdminCheckRequest/:id", element: <AdminCheckRequest /> },
      { path: "ViewDetailExpert/:id", element: <ViewDetailExpert /> },
      { path: "404", element: <ErrorPage /> },
      {path:"changePass" , element: <Changepass />},
      
      { path: "expertChangePassword/:id", element: <ChangepassE /> },
      { path: "expertViewAllRequest", element: <ExpertviewAllRequest /> },
      { path: "expertCheckRequest/:id", element: <ExpertCheckRequest /> },
      { path: "userInfo", element: <UserInfo /> },
      { path: "expertInfo", element: <ExpertInfo /> },
      { path: "legaluserInfo", element: <LegalUserInfo /> },
      { path: "genuineUserInfo", element: <GenuineUserInfo /> },
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
  { path: "/", element: <Login /> },

  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/Verification/:number", element: <Verification /> },
  { path: "/auth/forgotpassword", element: <Forgotpassword /> },
];

export default routes ;