import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import Loader from "../../components/Loader/Loader";
import SendEvaluationReportFile from "../../components/ChekRequestComp/SendEvaluationReportFile";
import StepConfirmAdmin from "../../components/modal/StepConfirmAdmin";
import DownloadStep3 from "../../components/ChekRequestComp/DownloadStep3";
import DownloadSecStepFile from "../../components/ChekRequestComp/DownloadSecStepFile";
import RejectAdmin from "../../components/modal/RejectAdmin";

export default function AdminCheckRequest() {
  const reqId = useParams()
  const navigate = useNavigate()

  const [reqStatus, setReqStatus] = useState({
        // check: false,
        // assessment: false,
        // report: true,
        // commite: false,
        // credit: false,
        // fileName : null,
        // file_name1 : null,
        // file_name2 : null,
        // file_name3 : null,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [updatePage, setUpdatePage] = useState(0)
  const [showStepConfirm, setShowStepConfirm] = useState(null)
  const [showCheckRep, setShowCheckRep] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    Axios.get(`/api/v1/get_all_status/${reqId.id}`).then(async (res) => {
      console.log(res);
      setReqStatus({
        check: res.data.check,
        assessment: res.data.assessment,
        report: res.data.report,
        // report: true,
        commite: res.data.commite,
        // commite: true,
        credit: res.data.credit,
      })
      setIsLoading(false)
      console.log(updatePage);
    })
  }, [updatePage])

  return (
    <div className="px-5">
      {
        isLoading && <Loader />
      }
      {
        showStepConfirm !== null && <StepConfirmAdmin action={showStepConfirm} requestId={reqId.id} close={setShowStepConfirm} setUpdatePage={setUpdatePage} />
      }
      {/* ********************* */}
      {
        showCheckRep !== null && <RejectAdmin reqStatus={reqStatus} close={setShowCheckRep} requestId={reqId.id} setUpdatePage={setUpdatePage} />
      }
      {
        !isLoading &&
        <div className="flex justify-center items-center  mt-4">
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({ step: 1, prevTest: true, currentStep: reqStatus.check })} className={reqStatus.check ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              1
            </p>
            <p className={reqStatus.check ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>بررسی مدارک</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.assessment ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({ step: 2, prevTest: reqStatus.check, currentStep: reqStatus.assessment })} className={reqStatus.assessment ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              2
            </p>
            <p className={reqStatus.assessment ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>شروع ارزیابی و جلسه با مشاور فنی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.report ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({ step: 3, prevTest: reqStatus.assessment, currentStep: reqStatus.report })} className={reqStatus.report ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              3
            </p>
            <p className={reqStatus.report ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>گزارش ارزیابی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.commite ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({ step: 4, prevTest: reqStatus.report, currentStep: reqStatus.commite })} className={reqStatus.commite ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              4
            </p>
            <p className={reqStatus.commite ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>کمیته</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.credit ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({ step: 5, prevTest: reqStatus.commite, currentStep: reqStatus.credit })} className={reqStatus.credit ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              5
            </p>
            <p className={reqStatus.credit ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>اعلام حد اعتباری</p>
          </div>
        </div>
      }

      {/* ------------------------------------------   آپلود فایل مرحله 4 و 3  ------------------------------------------------------ */}
      <div className="flex py-6">
          <div style={{display: "flex" , flexDirection: "column"}} className="w-1/2 px-2">
            <DownloadStep3 reqStatus={reqStatus} reqId={reqId.id} />
            <DownloadSecStepFile reqStatus={reqStatus} reqId={reqId.id} />            
          </div>
      {/* ------------------------------------------   آپلود فایل مرحله 4 و 3  ------------------------------------------------------ */}

        <div className="w-1/2 px-2">
          <SendEvaluationReportFile reqStatus={reqStatus} reqId={reqId.id} setUpdatePage={setUpdatePage} />
          
          <div className="pt-4 px-2">
            <div style={{display:"flex"}} className="w-full">
              {
                reqStatus.assessment === true && reqStatus.credit === false ?
                <button onClick={() => setShowCheckRep(true)} className="w-1/2  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
                  گزارش ناقصی در مدارک{" "}
                </button> : ""
              }
              <Link to={`/panel/WarrantyDocuments/${reqId.id}`} style={{textAlign : "center"}} className={reqStatus.assessment === true && reqStatus.credit === false ? "w-1/2 rounded-lg border border-blue-700 mt-2 text-blue-700 p-3 font-bold text-xs" : "w-full rounded-lg border border-blue-700 mt-2 text-blue-700 p-3 font-bold text-xs"}>
                مشاهده مدارک{" "}
              </Link>
            </div>
            <button onClick={() => navigate(-1)} className="w-full rounded-lg bg-blue-700 mt-2   text-white p-3 font-bold text-xs">
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}