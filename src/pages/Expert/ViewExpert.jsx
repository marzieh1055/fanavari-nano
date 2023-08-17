import React, { useContext, useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Axios from "../../../axiosinstancs";
import ViewDetailExpert from './ViewDetailExpert'
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"
import ExpertReqs from "../../components/modal/ExpertReqs";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import DeleteExpert from "../../components/modal/DeleteExpert";
import MoreLine from "./components/MoreLine";

export default function ViewExpert() {
  const {userDatas} = useContext(UserDataContext)
  const [allExpert, setAllExpert] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailsUser, setShowDetailsUser] = useState(false);
  const [showReqsModal, setShowReqsModal] = useState(null);
  const [showDelete, setShowDelete] = useState(null);
  const [showMore, setShowMore] = useState(null);
  // const [up, setUp] = useState(0);

  const [IsLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getExpert();
  }, [showDelete]);

  const getExpert = () => {
    Axios.get("/api/admin/expert").then(async res => {
      console.log(res)
      setAllExpert(res.data)
      setIsLoading(false)
      
    }
    ).catch(err => {
      console.log(err)
      setIsLoading(false)
    }
    )
  }

  if (IsLoading) return <Loader />
  if (userDatas && (userDatas.user.type === "admin" || userDatas.user.type === "Admin")) return (
    <div>
      {showReqsModal !== null && <ExpertReqs close={setShowReqsModal} details={showReqsModal} />}
      <div className=" py-6 flex justify-between	">
        <div>
        <p className="text-xl font-extrabold" >لیست کارشناسان</p>

        <div className="flex items-center pt-2">
          <AiOutlineInfoCircle className="text-blue-400" />
          <p className="text-xs  text-gray-600 px-2">
            برای مشاهده درخواست های جاری هر کارشناس روی کارشناس مربوطه کلیک کنید
          </p>
        </div>
        </div>
        <div>
        <a href="https://backend.nanotf.ir/api/expertExcel">
        <button className="rounded-lg bg-green-700 mt-2   text-white p-3 font-bold text-xs">خروجی اکسل</button>
        
      </a>
      </div>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll scrollable-content-chat">
        <table className="w-full ">
          <thead>
            <tr className="top-0">
              <th className="bg-white p-3 rounded-r-xl ">نمایه </th>
              <th className="bg-white p-3 ">نام </th>
              <th className="bg-white p-3 ">نام خانوادگی</th>
              <th className="bg-white p-3 ">تاریخ ثبت نام کارشناس </th>
              <th className="bg-white p-3 ">تعداد  پروژه </th>
              <th className="bg-white p-3 rounded-l-xl">اعمال </th>
            </tr>
          </thead>
            {showDelete !== null && <DeleteExpert close={setShowDelete} expertData={showDelete} />}
          <tbody>
          {showMore && <MoreLine setShowDelete={setShowDelete} expert={showMore} close={setShowMore}/>}
          {allExpert && allExpert.map((expert) => {
              return (
                <tr
                  key={expert.id}
                  id={expert.id}
                  
                  className={
                    ''
                  }
                >
                  <td>
                    {" "}
                    {expert.profilegenuine && expert.profilegenuine.image !== null && <img className="w-10 h-10 " style={{borderRadius : "50%"}} src={`https://backend.nanotf.ir/${expert.profilegenuine.image}`} alt=""/> }
                    {expert.profilegenuine && expert.profilegenuine.image !== null && console.log(expert.profilegenuine.image)}
                    {(expert.profilegenuine === null || expert.profilegenuine.image === null) && <img className="w-10" src={user} alt=""/>}
                    
                  </td>
                  <td onClick={() => setShowReqsModal(expert)}  className="cursor-pointer p-4 text-xs text-gray-400 font-bold">{expert.name}</td>
                  <td onClick={() => setShowReqsModal(expert)} className="cursor-pointer p-4 text-xs text-gray-400 font-bold">{expert.family}</td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                    {onlyDateConversion(expert.created_at)}
                  </td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                    {expert.project_count}
                  </td>
                  <td className="p-4 text-xs text-gray-400 font-bold">
                  <button onClick={() => setShowMore(expert)} className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                    بیشتر
                  </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />

    </div>
  );
}
