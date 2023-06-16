import React , { useContext, useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import Loader from '../../components/Loader/Loader'
import { Link } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";
import user from "../../assets/imges/user.png"
export default function ExpertviewAllRequest() {
  const {userDatas} = useContext(UserDataContext)
  const [reqDatas , setReqDatas] = useState([])
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    Axios.get("/api/admin/get_request_with_expert/12").then(async (res) => {
      console.log(res.data);
      setReqDatas(res.data)
      setIsLoading(false)
    })
  },[])
  if ((userDatas.user.type === "expert")) return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold"> درخواست های جاری</p>
      </div>
      <div className="flex flex-wrap ">
      {isLoading && <Loader /> }
      {
          reqDatas.map(item => {
            console.log(item);
            return (
              <div key={item.id} className="p-3 w-1/3">
                <Link to={`/panel/expertCheckRequest/${item.request.id}`}>
                  <div className="bg-white rounded-xl p-4  ">
                    <div className="flex justify-flex-end">
                      <p className="text-sm">{onlyDateConversion(item.created_at)}</p>
                    </div>
                    <p className="font-bold text-sm pt-2 ">{item.request.type === "facilities" ? "درخواست تسهیلات" : 
                                                            item.request.type === "guarantee" ? "درخواست ضمانت" : "درخواست"
                    }</p>
                    <p className="font-bold text-xs text-gray-400 pb-2 ">
                        شناسه درخواست : {item.request.shenaseh}
                    </p>
                    <img src={user} alt="" className="h-8" />
                  </div>
                </Link>
              </div>
              
            )
          })
        }
      </div>
    </div>
  );
}
