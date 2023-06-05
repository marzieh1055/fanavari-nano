import React, { useState } from "react";
import WarrantyDocuments from "./WarrantyDocuments";
import { useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import StepConfirm from "../../components/modal/StepConfirm";
import Loader from "../../components/Loader/Loader";
export default function ExpertCheckRequest() {
  const reqId = useParams()
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailsdoc, setShowDetailsdoc] = useState(false);
  const [reqStatus, setReqStatus] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [updatePage, setUpdatePage] = useState(0)
  const [showStepConfirm, setShowStepConfirm] = useState(null)


  //step
  // const [Checkdocument, setCheckdocument] = useState(null);
  // const [Startassessment  , setStartassessment] = useState(null);
  // const [Evaluationreport  , setEvaluationreport] = useState(null);
  // const [Getreport  , setGetreport] = useState(null);
  // const [Getcommittee  , setGetcommittee] = useState(null);
  // const [Credit  , setCredit] = useState(null);

  // const formData = new FormData();
  // const [Committee , setCommittee] = useState({
  //   id : "",
  //   file1 :null,
  //   file2 : null, 
  //   file3 : null
  //   })
  // const subHandler = () => {
  //   formData.append("request_id" , data.هی)
  //   formData.append("file1" , data.file1)
  //   formData.append("file2" , data.file2)
  //   formData.append("file3" , data.file3)
    
  //   Axios.post("/api/v1/committee" , formData )
  //   .then((respons) => console.log(respons))
  //   .catch((error) => console.log(error))
  // }
  // useEffect(() => {
  //   getCheckdocument();
  // }, []);
  // const getCheckdocument = () => {
  //   Axios.get(`/api/admin/check_document/${id}` ).then(async (res) => {
  //     console.log(res.data);     
  //     setCheckdocument(true)
  //   }
  //   ).catch(err => {
  //     console.log(err)
  //   }
  //   )
  // }
  // const getStartassessment = () => {
  //   Axios.get(`/api/admin/start_assessment${id}` ).then(async (res) => {
  //     console.log(res.data);     
  //     setStartassessment(true)
  //   }
  //   ).catch(err => {
  //     console.log(err)
  //   }
  //   )
  // }  
  // const getcommittee = () => {
  //   Axios.get(`/api/admin/committee${id}` ).then(async (res) => {
  //     console.log(res.data);     
  //     setCommittee(true)
  //   }
  //   ).catch(err => {
  //     console.log(err)
  //   }
  //   )
  // } 



  


  const handleSelectRow =()=> {
    // setSelectedItem(item);
    setShowDetailsdoc(true)
    console.log("item");
  };
  useEffect(() => {
    setIsLoading(true)
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
      console.log(updatePage);
    })
  }, [ updatePage ])
  if (showDetailsdoc) return <WarrantyDocuments close={setShowDetailsdoc} details={selectedItem} />

  return (
    <div className="px-5">
      {
        isLoading && <Loader />
      }
      {
        showStepConfirm !== null && <StepConfirm action={showStepConfirm} requestId={reqId.id} close={setShowStepConfirm} setUpdatePage={setUpdatePage} />
      }
      {
        !isLoading &&
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({step:1 , prevTest : true , currentStep:reqStatus.check})} className={reqStatus.check ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              1
            </p>
            <p className={reqStatus.check ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>بررسی مدارک</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.assessment ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({step:2 , prevTest : reqStatus.check , currentStep:reqStatus.assessment})} className={reqStatus.assessment ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              2
            </p>
            <p className={reqStatus.assessment ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>شروع ارزیابی و جلسه با مشاور فنی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.report ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({step:3 , prevTest : reqStatus.assessment , currentStep:reqStatus.report})} className={reqStatus.report ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              3
            </p>
            <p className={reqStatus.report ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>گزارش ارزیابی</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.commite ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({step:4 , prevTest : reqStatus.report , currentStep:reqStatus.commite})} className={reqStatus.commite ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              4
            </p>
            <p className={reqStatus.commite ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>کمیته</p>
          </div>
          <div className="w-10 px-2">
            <div className={reqStatus.credit ? "border-t border-2 border-blue-800 h-full rounded" : "border-t border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p onClick={() => setShowStepConfirm({step:5 , prevTest : reqStatus.commite , currentStep:reqStatus.credit})} className={reqStatus.credit ? "bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-400 "}>
              5
            </p>
            <p className={reqStatus.credit ? "text-blue-800 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>اعلام حد اعتباری</p>
          </div>
        </div>
      }
      <div className="flex py-6">
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
            </div>
            <hr className="border-dashed border-gray-300" />

            <hr className="border-dashed border-gray-300" />
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
          </div>

          <div className=" bg-white rounded-xl p-5 mt-2">
            <div className=" pb-4">
              <p className=" font-bold">آپلود 3 فایل نهایی  </p>
            </div>
            <hr className="border-dashed border-gray-300" />

            <hr className="border-dashed border-gray-300" />
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
              </p>
              <a href="#" className="text-blue-400 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>
          </div>

        </div>
        <div className="w-1/2 px-2">
          <div className=" bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
            </div>
            <hr className="border-dashed border-gray-300" />
            {/* <p className="text-xs text- gray-400 my-1 ">
                حداکثر بارگذاری برای هر فرم 5 فایل میباشد .{" "}
              </p> */}

            <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
              <p className="">
                تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت{" "}
              </p>
              <a href="#" className="text-blue-500 text-xs">
                برای بارگذاری کلیک کنید
              </a>
            </div>

          </div>
          <div className="pt-4">

            <button className="w-1/2  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
            گزارش ناقصی در مدارک{" "}
            </button>
            <button onClick={() => handleSelectRow()} className="w-1/2  rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">
              مشاهده مدارک{" "}
            </button>
            <button className="w-full  rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">
            ثبت{" "}
            </button>
          </div>

          {/* <div className="flex">
              <button className="w-full  rounded-lg bg-blue-700   text-white p-3 font-bold text-xs">
                ارسال فایل 1{" "}
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
}
