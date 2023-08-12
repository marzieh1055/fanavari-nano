// Routes

const userRoutsO = [ "uploadPic" , "tashilat" , "dashboarduser" , "addFacilities" , "updateFact" , "viewRequest" , "oploadDoc" , "WarrantyDocuments" , "WarrantyDocumentsUp" , "FacilitiesDocuments" , "legaluserInfo" , "genuineUserInfo"]
const expertRoutsO = ["dashboardexpert" , "ViewTicketsExpert" , "TestticketExpert" , "expertViewAllRequest" , "expertCheckRequest" , "ExpertViewRequest" , "expertInfo" , "FacilitiesDocuments" , "WarrantyDocumentsUp"]
const adminRoutsO = ["dashboard" , "requests" , "Addexpert" , "viewExpert" , "viewUsers" , "ViewTicketsAdmin" , "ViewDeleteReqs" , "Viewdetailuser" , "expertChangePassword" , "AdminCheckRequest" , "ViewDetailExpert"]
const publicRoutsO = ["openedRequests" , "changePass" , "accesserror" , "addTicket" , "addTicketE" , "suport" , "siteGuide" , "guarantee" , "allNotifs" , "userInfo" , "Testticket" , "viewTickets" , "404"]

const userRouts = userRoutsO.map(i => i.toLowerCase())
const expertRouts = expertRoutsO.map(i => i.toLowerCase())
const adminRouts= adminRoutsO.map(i => i.toLowerCase())
const publicRouts = publicRoutsO.map(i => i.toLowerCase())


export { userRouts , expertRouts , adminRouts , publicRouts }