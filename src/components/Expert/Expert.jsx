import React , { useState } from "react";
import Button from "../Button/Button";
import Axios from "../../../axiosinstancs";
import Loader from "../Loader/Loader";

const Expert = ({ name, avatar , reqId , expertId , closeP , setUpdatePage , type}) => {
  const [isLoading , setIsLoading] = useState(false)
  
  const assignHandler = (reqId , expertId) => {
    setIsLoading(true)
    const datas = {
      requests_id : reqId,
      user2_id : expertId
    }
    Axios.post("/api/admin/expert_assignment" , datas ).then(async(res) => {
      console.log(res);
      setIsLoading(false)
      closeP(null)
      setUpdatePage(prev => prev + 1)
    })
  }
  const changeExpertHandler = (reqId , expertId) => {
    setIsLoading(true)
  
    const datas = {
      requests_id : reqId,
      user2_id : expertId
    }
    console.log(datas);
    Axios.post("/api/admin/change_expert" , datas ).then(async(res) => {
      console.log(res);
      setIsLoading(false)
      closeP(null)
      setUpdatePage(prev => prev + 1)
    })
  }
  return (
    <div className="p-2 flex items-center bg-c-2 rounded-lg">
      {
        isLoading && <Loader />
      }
      <img className="w-8 h-8" src={avatar} alt="expert avatar" />
      <div className="flex-1 px-2">{name}</div>
      <button onClick={() => type === "assign" ? assignHandler(reqId , expertId) : changeExpertHandler(reqId , expertId) } className="py-1 px-2 text-c-13 bg-c-14 rounded">اختصاص</button>
    </div>
  );
};

export default Expert;
