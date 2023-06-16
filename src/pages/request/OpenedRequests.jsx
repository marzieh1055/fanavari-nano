import React , { useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { onlyDateConversion } from "../../helper/dateConversion.cjs";
import Loader from '../../components/Loader/Loader'
import { Link } from "react-router-dom";
import user from "../../assets/imges/user.png"
export default function OpenedRequests() {
  const [reqDatas , setReqDatas] = useState([])
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    Axios.get("/api/v1/get_current_request_user").then(async (res) => {
      console.log(res);
      setReqDatas(res.data)
      setIsLoading(false)
    })
  },[])
  return (
    <div className="px-6">
      <div className=" py-6">
        <p className="text-xl font-extrabold"> درخواست های جاری</p>
      </div>
      <div className="flex flex-wrap ">
        {isLoading && <Loader /> }
        {
          reqDatas.map(item => {
            return (
              <div key={item.id} className="p-3 w-1/3">
                <Link to={`/panel/viewRequest/${item.id}`}>
                  <div className="bg-white rounded-xl p-4  ">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <p className="bg-blue-200 p-0.5 pt-1 px-2 rounded-lg text-blue-800 text-xs">
                          وضعیت:
                        </p>

                        {/* {رنگا و اسماشون مونده} */}
                        <p className={  item.status === "null" || item.status === null ? "text-yellow-400 font-bold mx-2 text-xs" : 
                                        item.status === "check" ? "text-blue-800 font-bold mx-2 text-xs" : 
                                        item.status === "assessment" ? "text-blue-800 font-bold mx-2 text-xs" : 
                                        item.status === "committee" ? "text-blue-800 font-bold mx-2 text-xs" : 
                                        item.status === "credit" ? "text-green-400 font-bold mx-2 text-xs" : "text-blue-800 font-bold mx-2 text-xs"
                          }>
                          {
                            item.status === "null" || item.status === null ? "در انتظار بررسی" : 
                            item.status === "check" ? "بررسی مدارک" : 
                            item.status === "assessment" ? "شروع ارزیابی و جلسه با مشاور فنی" : 
                            item.status === "report" ? "گزارش ارزیابی" : 
                            item.status === "committee" ? "کمیته" : 
                            item.status === "credit" ? "اعلام حد اعتباری" : "در حال بررسی"
                          }
                        </p>
                      </div>
                      <p className="text-sm">{onlyDateConversion(item.created_at)}</p>
                    </div>
                    <p className="font-bold text-sm pt-2 ">{item.type === "facilities" ? "درخواست تسهیلات" : 
                                                            item.type === "guarantee" ? "درخواست ضمانت" : "درخواست"
                    }</p>
                    <p className="font-bold text-xs text-gray-400 pb-2 ">
                        شناسه درخواست : {item.shenaseh}
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
