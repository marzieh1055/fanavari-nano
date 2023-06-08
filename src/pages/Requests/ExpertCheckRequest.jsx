import React, { useState, useEffect } from "react";
import WarrantyDocuments from "./WarrantyDocuments";
import { useParams } from "react-router-dom";
import Axios from "../../../axiosinstancs";
import StepConfirm from "../../components/modal/StepConfirm";
import Loader from "../../components/Loader/Loader";
import axios from "axios";


export default function ExpertCheckRequest() {
  const reqId = useParams()
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetailsdoc, setShowDetailsdoc] = useState(false);
  const [reqStatus, setReqStatus] = useState({
    check: false,
        assessment: false,
        report: false,
        commite: false,
        credit: false,
        fileName : null,
        fileName1 : null,
        fileName2 : null,
        fileName3 : null,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [step3SendReq, setStep3SendReq] = useState(false)
  
  const [updatePage, setUpdatePage] = useState(0)
  const [showStepConfirm, setShowStepConfirm] = useState(null)

  const [fileData, setFileData] = useState({
    request_id: reqId.id,
    file: null,
  })
  const [commiteFileData, setComiteFileData] = useState({
    request_id: reqId.id,
    file1: null,
    file2: null,
    file3: null,
  })

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

    // get step 3
    Axios.get(`/api/admin/get_report_for_admin/${reqId.id}`).then(async (res) => {
      console.log(res);
      setReqStatus({
        ...reqStatus , fileName : res.data.file_name
      })
    }) .catch(async (err) => {
      console.log(err.response.data);
      if (err.response.data.success) {
        setReqStatus({
          ...reqStatus , file : ""
        })
      }
    })

    // get step 4
    Axios.get(`/api/admin/get_committee_for_admin/${reqId.id}`).then(async (res) => {
      console.log(res);
      
    }) .catch(async (err) => {
      console.log(err.response.data);
      
    })
  }, [updatePage])

  const step3Handler = () => {
    const formData = new FormData();
    formData.append("request_id", fileData.request_id)
    formData.append("file", fileData.file)
    console.log(formData);
    setIsLoading(true)
    setStep3SendReq(true)
    axios.post("/api/admin/evaluation_report", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then(async (res) => {
        console.log(res);
        setUpdatePage(prev => prev + 1)
        setIsLoading(false)
        setStep3SendReq(false)
      })
      .catch((error) => console.log(error))
  }

  const step4Handler = () => {
    const formData = new FormData();
    formData.append("request_id", commiteFileData.request_id)
    formData.append("file1", commiteFileData.file1)
    formData.append("file2", commiteFileData.file2)
    formData.append("file3", commiteFileData.file3)
    setIsLoading(true)
    setStep3SendReq(true)
    axios.post("/api/admin/committee", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then(async (res) => {
        console.log(res);
        setUpdatePage(prev => prev + 1)
        setIsLoading(false)
        setStep3SendReq(false)
      })
      .catch((error) => console.log(error))
  }


  const handleSelectRow = () => {
    // setSelectedItem(item);
    setShowDetailsdoc(true)
    console.log("item");
  };

  const changeHandler = (e) => {
    if (e.target.name === "file") {
      setFileData({
        ...fileData, [e.target.name]: e.target.files[0]
      }
      )
    }
    console.log(fileData);
  }

  const commitechangeHandler = (e) => {
    if (e.target.type === "file") {
      setComiteFileData({
        ...commiteFileData, [e.target.name]: e.target.files[0]
      }
      )
    }
    console.log(commiteFileData);
  }
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

      {/* -------------------------------------------    مرحله 3  ------------------------------------------------------ */}
      <div className="flex py-6">
        <div className="w-1/2 px-2">
          {
            
              reqStatus.fileName !== null && reqStatus.report === false ?  
              <div className="m-3 bg-white rounded-xl p-5">
              <div className=" pb-4">
                <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
              </div>
              <hr className="border-dashed border-gray-300" />

              <hr className="border-dashed border-gray-300" />
              <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                <p className="text-yellow-500">
                  درحال بررسی توسط مدیر
                </p>
              </div>
            </div>
              
              :
              reqStatus.assessment && reqStatus.report === false ? <div className=" m-3 bg-white rounded-xl p-5">
              <div className=" pb-4">
                <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
              </div>
              <hr className="border-dashed border-gray-300" />

              <hr className="border-dashed border-gray-300" />
              <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                <p className="">
                  تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                </p>
                {
                  fileData.file === null ?
                    <label htmlFor="step3" className="text-blue-400 text-xs w-full justify-center">
                      برای بارگذاری کلیک کنید
                    </label> :
                    <div>
                      <p className="text-blue-400 text-xs w-full m-1 justify-center">
                        {
                          `نام فایل : ${fileData.file.name}`
                        }
                      </p>
                      <label htmlFor="step3" className="text-yellow-400 m-1 text-xs w-full justify-center">
                        برای تغییر کلیک کنید
                      </label>
                      {step3SendReq && <p className="text-green-400 text-xs w-full m-1 justify-center">در حال ارسال اطلاعات...</p>}
                    </div>
                }
                <input id="step3" style={{ display: "none" }} type="file" onChange={changeHandler} name="file" />
                <button onClick={step3Handler} className="w-full  rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">
                  ثبت{" "}
                </button>
              </div>
            </div>
              :

              reqStatus.report === true ?
                <div className=" m-3 bg-white rounded-xl p-5">
                  <div className=" pb-4">
                    <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
                  </div>
                  <hr className="border-dashed border-gray-300" />

                  <hr className="border-dashed border-gray-300" />
                  <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-green-500">
                      کامل شده
                    </p>
                  </div>
                </div>
                :
                <div className=" m-3 bg-white rounded-xl p-5">
                  <div className=" pb-4">
                    <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
                  </div>
                  <hr className="border-dashed border-gray-300" />

                  <hr className="border-dashed border-gray-300" />
                  <div className="rounded-lg p-2 border text-red-700 text-xs mt-4">
                    <p className="">
                      این بخش هنوز فعال نیست
                    </p>
                  </div>
                </div>
          }
{/* -------------------------------------------    پایان مرحله 3 ------------------------------------------------------ */}


{/* -------------------------------------------    مرحله 4   ------------------------------------------------------ */}
          {
            reqStatus.report && reqStatus.commite === false ?
            <div className="m-3 bg-white rounded-xl p-5 mt-2">
            <div className=" pb-4">
              <p className=" font-bold">آپلود 3 فایل نهایی  </p>
            </div>
            <hr className="border-dashed border-gray-300" />

            <hr className="border-dashed border-gray-300" />
              <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                <p className="">
                  تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                </p>
                {
                  commiteFileData.file1 === null ?
                    <label htmlFor="file1" className="text-blue-400 text-xs w-full justify-center">
                      برای بارگذاری کلیک کنید
                    </label> :
                    <div>
                      <p className="text-blue-400 text-xs w-full m-1 justify-center">
                        {
                          `نام فایل : ${commiteFileData.file1.name}`
                        }
                      </p>
                      <label htmlFor="file1" className="text-yellow-400 m-1 text-xs w-full justify-center">
                        برای تغییر کلیک کنید
                      </label>
                    </div>
                }
                <input id="file1" style={{ display: "none" }} type="file" onChange={commitechangeHandler} name="file1" />
                
              </div>
              <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                <p className="">
                  تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                </p>
                {
                  commiteFileData.file2 === null ?
                    <label htmlFor="file2" className="text-blue-400 text-xs w-full justify-center">
                      برای بارگذاری کلیک کنید
                    </label> :
                    <div>
                      <p className="text-blue-400 text-xs w-full m-1 justify-center">
                        {
                          `نام فایل : ${commiteFileData.file2.name}`
                        }
                      </p>
                      <label htmlFor="file2" className="text-yellow-400 m-1 text-xs w-full justify-center">
                        برای تغییر کلیک کنید
                      </label>
                    </div>
                }
                <input id="file2" style={{ display: "none" }} type="file" onChange={commitechangeHandler} name="file2" />
                
              </div>
              <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                <p className="">
                  تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                </p>
                {
                  commiteFileData.file3 === null ?
                  <label htmlFor="step4" className="text-blue-400 text-xs w-full justify-center">
                      برای بارگذاری کلیک کنید
                    </label> :
                    <div>
                      <p className="text-blue-400 text-xs w-full m-1 justify-center">
                        {
                          `نام فایل : ${commiteFileData.file3.name}`
                        }
                      </p>
                      <label htmlFor="step4" className="text-yellow-400 m-1 text-xs w-full justify-center">
                        برای تغییر کلیک کنید
                      </label>
                    </div>
                }
                <input id="step4" style={{ display: "none" }} type="file" onChange={commitechangeHandler} name="file3" />
              </div>
                {step3SendReq && <p className="text-green-400 text-xs w-full m-1 justify-center">در حال ارسال اطلاعات...</p>}
                <button onClick={step4Handler} className="w-full  rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">
                  ثبت{" "}
                </button>
          </div> : 
          reqStatus.commite === true ?
            <div className=" m-3 bg-white rounded-xl p-5">
              <div className=" pb-4">
                <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
              </div>
              <hr className="border-dashed border-gray-300" />

              <hr className="border-dashed border-gray-300" />
              <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                <p className="text-green-500">
                  کامل شده
                </p>
              </div>
              <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                <p className="text-green-500">
                  کامل شده
                </p>
              </div>
              <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                <p className="text-green-500">
                  کامل شده
                </p>
              </div>
            </div>
          :
          <div className=" m-3 bg-white rounded-xl p-5">
            <div className=" pb-4">
              <p className=" font-bold"> آپلود فایل گزارش ارزیابی </p>
            </div>
            <hr className="border-dashed border-gray-300" />

            <hr className="border-dashed border-gray-300" />
            <div className="rounded-lg p-2 border text-red-700 text-xs mt-4">
              <p className="">
                این بخش هنوز فعال نیست
              </p>
            </div>
          </div>
          }

        </div>
        <div className="w-1/2 px-2">
          <div className=" m-3 bg-white rounded-xl p-5">
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
