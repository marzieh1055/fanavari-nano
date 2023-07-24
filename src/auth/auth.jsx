import { Navigate } from "react-router-dom"
export const userAuth = (component) => {
  
  const datasLoc = window.localStorage.getItem("userData")
  
  const parsData = JSON.parse(datasLoc)
  console.log(datasLoc);

  if (datasLoc) {
    if (parsData.user.type === "genuine" || parsData.user.type === "legal") {
      console.log("REN");
      return component; 
    } else {
      return <Navigate to={"/panel/accesserror"} />
    }
  } 
}