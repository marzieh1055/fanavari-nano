import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";
import Axios from "../../../axiosinstancs";
import Loader from "../../components/Loader/Loader";

export default function Tashilat() {
  let { pathname: pass } = useLocation();
  const [stepLevel , setStepLevel] = useState(pass.split("/")[3])
  console.log(stepLevel);

  const {userDatas} = useContext(UserDataContext)
  const navigate = useNavigate()
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    setStepLevel(pass.split("/")[3])
  } , [pass])
  useEffect(() => {
    Axios.get("/api/v1/is_profile_genuine")
    .then((res) => {
      console.log(res);
      setIsLoading(false)
      if (!res.data && userDatas.user.type === "genuine") {
        navigate(`/panel/genuineUserInfo`)
      }
    })
    .catch((err) =>{
      console.log(err);
      navigate(`/panel/404`)
    })
    Axios.get("/api/v1/is_profile_legal")
    .then((res) => {
      console.log(res);
      setIsLoading(false)
      if (!res.data && userDatas.user.type === "legal") {
        navigate(`/panel/legaluserInfo`)
      }
    })
    .catch((err) =>{
      console.log(err);
      navigate(`/panel/404`)
    })

  } , [])
  if (isLoading) return <Loader />
  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بارگیری و بارگذاری مدارک </p>
      </div>
      <div className=" flex  items-center w-full justify-center">
        <div className="flex items-center">
          <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
            1
          </p>
        </div>
        <div className="w-10 px-2">
          <div className={stepLevel > 1 || stepLevel === "confirm" ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-slate-300 h-full rounded"}></div>
        </div>
        <div className="flex items-center">
          <p className={stepLevel >= 2  || stepLevel === "confirm"? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 "}>
            2
          </p>
        </div>
        <div className="w-10 px-2">
          <div className={stepLevel > 2 || stepLevel === "confirm" ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-slate-300 h-full rounded"}></div>
        </div>
        <div className="flex items-center">
          <p className={stepLevel >= 3  || stepLevel === "confirm"? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 "}>
            3
          </p>
        </div>
        <div className="w-10 px-2">
          <div className={stepLevel > 3 || stepLevel === "confirm" ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-slate-300 h-full rounded"}></div>
        </div>
        <div className="flex items-center">
          <p className={stepLevel >= 4 || stepLevel === "confirm" ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 "}>
            4
          </p>
        </div>
        <div className="w-10 px-2">
          <div className={stepLevel > 4 || stepLevel === "confirm" ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-slate-300 h-full rounded"}></div>
        </div>
        <div className="flex items-center">
          <p className={stepLevel >= 5 || stepLevel === "confirm" ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 "}>
            5
          </p>
        </div>
        <div className="w-10 px-2">
          <div className={stepLevel === "confirm" ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-slate-300 h-full rounded"}></div>
        </div>
        <div className="flex items-center">
          <p className={stepLevel === "confirm" ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-slate-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 "} >
            تایید
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
