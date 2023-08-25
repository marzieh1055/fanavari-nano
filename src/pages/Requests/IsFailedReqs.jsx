import React , { useContext, useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import Loader from '../../components/Loader/Loader'
import { UserDataContext } from "../../contexts/UserData.Provider";
import DeleteReqAdmin from "../../components/modal/DeleteReqAdmin";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function IsFailedReqs() {
  const {userDatas} = useContext(UserDataContext)
  const [isLoading , setIsLoading] = useState(true)
  const [showDeleteReq, setShowDeleteReq] = useState(false)
  const [up , setUp] = useState(0)
  
  const [reqDatas , setReqDatas] = useState([])
  useEffect(() => {
    setIsLoading(true)
    Axios.get(`/api/admin/get_failed`)
    .then((res) => {
      console.log(res);
      setReqDatas(res.data)
      setIsLoading(false)
    })
    .catch((err) => {
      console.log(err);
    })
  },[up])
  return (
    <div>
      <ToastContainer />
      <div className=" py-6">
        <p className="text-xl font-extrabold">درخواست های رد شده</p>
      </div>
      <div className="flex flex-wrap ">
      {isLoading && <Loader /> }
      {
        reqDatas && reqDatas.map(item => {
          // console.log(item);
            return (
                <Link
                    to={userDatas.user.type === "expert" ? `/panel/expertCheckRequest/${item.request_id}` : `/panel/AdminCheckRequest/${item.request_id}`}
                    style={{textDecoration : "none"}}
                    className="p-3 w-1/3"
                >
                    
                    <div key={item.id} className="w-full">
                        <div className="bg-white rounded-xl p-4 flex flex-col ">
                        <div>
                            <p>درخواست : <span className="text-gray-500 p-1">{item.request.type === "facilities" ? "تسهیلات" : "ضمانت" }</span></p>
                            
                        </div>
                        <p>شناسه درخواست : <span className="text-blue-500">{item.request.shenaseh}</span></p>
                        <div className="flex justify-around">
                        </div>
                        </div>
                    </div>
                </Link>
            )
        })
      }
      {
        !reqDatas[0] && 
        <div className="w-full mt-[50px] flex justify-center">
          <p >درخواستی وجود ندارد</p>
        </div>
      }
      </div>
    </div>
  );
}
