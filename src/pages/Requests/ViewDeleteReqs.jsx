import React , { useContext, useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import Loader from '../../components/Loader/Loader'
import { UserDataContext } from "../../contexts/UserData.Provider";
import DeleteReqAdmin from "../../components/modal/DeleteReqAdmin";
import { ToastContainer, toast } from "react-toastify";

export default function ViewDeleteReqs() {
  const {userDatas} = useContext(UserDataContext)
  const [isLoading , setIsLoading] = useState(true)
  const [showDeleteReq, setShowDeleteReq] = useState(false)
  const [up , setUp] = useState(0)
  
  const [reqDatas , setReqDatas] = useState([])
  useEffect(() => {
    setIsLoading(true)
    Axios.get(`/api/admin/get_request_delete`)
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
        <p className="text-xl font-extrabold">درخواست های حذف</p>
      </div>
      <div className="flex flex-wrap ">
      {isLoading && <Loader /> }
      {
        reqDatas && reqDatas.map(item => {
          // console.log(item);
          return (
            <div key={item.id} className="p-3 w-1/3">
                {showDeleteReq && <DeleteReqAdmin close={setShowDeleteReq} id={item.request.id} toast={toast} setUp={setUp}/>}
                <div className="bg-white rounded-xl p-4 flex flex-col ">
                  <p>شناسه درخواست : <span className="text-blue-500">{item.request.shenaseh}</span></p>
                  <div>
                    <p>توضیحات :</p>
                    <p className="text-gray-500 p-1">{item.description}</p>
                  </div>
                  <div className="flex justify-around">
                  {
                    item.path && 
                    <a className="flex justify-center" href={`https://backend.nanotf.ir/${item.path}`} target="_blank">
                      <div className="text-sm w-fit rounded-md p-2  bg-blue-600 text-white hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600 transition ">
                        دانلود فایل
                      </div>
                    </a>
                  }
                  <button onClick={() => setShowDeleteReq(true)} className="text-sm w-fit rounded-md p-2  bg-red-600 text-white hover:border hover:border-red-600 hover:bg-white hover:text-red-600 transition">حذف درخواست</button>
                  </div>
                </div>
              </div>
              
            )
          })
        }
      {
        !reqDatas[0] && 
        <div className="w-full mt-[50px] flex justify-center">
          <p >درخواست حذفی وجود ندارد</p>
        </div>
      }
      </div>
    </div>
  );
}
