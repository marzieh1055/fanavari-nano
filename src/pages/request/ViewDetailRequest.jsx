import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import Axios from "../../../axiosinstancs";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ExpertModal from "../../components/modal/ExpertModal";
import DownloadStep5 from "../../components/ChekRequestComp/DownloadStep5.jsx";
import DeleteReq from "../../components/modal/DeleteReq";
import { ToastContainer, toast } from 'react-toastify';


export default function ViewDetailRequest() {
  const reqId = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteReq, setShowDeleteReq] = useState(false)
  const [expertData, setExpertData] = useState(null)
  const [reqStatus, setReqStatus] = useState({})



  useEffect(() => {
    Axios.get(`/api/v1/request/${reqId.id}`).then(async (res) => {
      // console.log(res);
      if (res.data.expert_assignment !== null && res.data.expert_assignment !== "null") {
        setExpertData(res.data.expert_assignment.expert)
      }
    })
    Axios.get(`/api/v1/get_all_status/${reqId.id}`).then(async (res) => {
      console.log(res);
      setReqStatus({
        check: res.data.check,
        assessment: res.data.assessment,
        report: res.data.report,
        commite: res.data.commite,
        credit: res.data.credit,
      })
      setIsLoading(false)
    })
  }, [])
  return (
    <div className="px-5">
      <div className=" py-6">
        <p className="text-xl font-extrabold">بررسی درخواست </p>
      </div>
      {isLoading && <Loader />}
      {
        !isLoading &&
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <p className={reqStatus.check ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              1
            </p>
            <p className={reqStatus.check ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>بررسی مدارک</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.assessment ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.assessment ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              2
            </p>
            <p className={reqStatus.assessment ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>شروع ارزیابی و جلسه با مشاور فنی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.report ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.report ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              3
            </p>
            <p className={reqStatus.report ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>گزارش ارزیابی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.commite ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.commite ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              4
            </p>
            <p className={reqStatus.commite ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>کمیته</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.credit ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.credit ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              5
            </p>
            <p className={reqStatus.credit ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>اعلام حد اعتباری</p>
          </div>
        </div>
      }


      <div className="flex pt-4">
        <div className="w-1/2 px-2 ">
          <div className=" bg-white rounded-xl p-5">
          <DownloadStep5 reqStatus={reqStatus} reqId={reqId.id} />
          </div>
          {
            showModal && <ExpertModal expertData={expertData ? expertData : null} close={setShowModal} />
          }
          {
            showDeleteReq && <DeleteReq close={setShowDeleteReq} id={reqId.id} toast={toast}/>
          }
          {<ToastContainer />}
          <div className="pt-4">
            <div className="flex">
              <button onClick={() => setShowModal(true)} className="w-full  rounded-lg bg-blue-700 mt-2 ml-2  text-white p-3 font-bold text-xs">
                اطلاعات کارشناس{" "}
              </button>
              <button onClick={() => setShowDeleteReq(true)} className="w-full  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
                لغو درخواست{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
