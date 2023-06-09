import React , { useEffect, useState } from 'react'
import Axios from '../../../axiosinstancs'
import axios from 'axios'
import Loader from '../Loader/Loader'

export default function SendFileSec({ reqStatus , reqId , setUpdatePage }) {

    const [rendering, setRendering] = useState(true) // TRUE
    const [isLoading, setIsLoading] = useState(false)
    const [fileErr, setFileErr] = useState(false)
    const [stepSendReq, setStepSendReq] = useState(false)
    const [err, setErr] = useState(false)
    const [up, setUp] = useState(0)

    const [fileStorage, setFileStorage ] = useState({
        file : null,
    })
    const [fileData, setFileData] = useState({
        request_id: reqId,
        file1: null,
        file2: null,
        file3: null,
    })

    useEffect(() => {
        setRendering(true)
        // get step 4
        Axios.get(`/api/admin/get_committee_for_admin/${reqId}`).then(async (res) => {
            console.log(res);
            setFileStorage({
                file : res.data.file_name1
            })
            setRendering(false)
        }) .catch(async (err) => {
                console.log(err.response.data);
                setRendering(false)
                setFileStorage({
                    file : null
                })            
            })
    } , [ up ])

    const changeHandler = (e) => {
          setFileData({
            ...fileData, [e.target.name]: e.target.files[0]
          })
        console.log(fileData);
        setFileErr(false)
      }

      // send Step 4
    const step4Handler = () => {
        setFileErr(false)
        if (fileData.file1 !== null && fileData.file2 !== null && fileData.file3 !== null) {
            const formData = new FormData();
            formData.append("request_id", fileData.request_id)
            formData.append("file1", fileData.file1)
            formData.append("file2", fileData.file2)
            formData.append("file3", fileData.file3)
            setErr(false)
            setIsLoading(true)
            setStepSendReq(true)
            axios.post("/api/admin/committee", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
            })
            .then(async (res) => {
                console.log(res);
                setUpdatePage(prev => prev + 1)
                setUp((prev) => prev + 1)
                setIsLoading(false)
                setStepSendReq(false)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
                setStepSendReq(false)
                setErr(true)
            })
        } else if (fileData.file1 === null || fileData.file2 === null || fileData.file3 === null) {
            setFileErr(true)
        }
    }


    if (rendering) {
        return (
            <div className=" m-3 bg-white rounded-xl p-5">
                <div className=" pb-4">
                    <p className=" font-bold">آپلود 3 فایل نهایی</p>
                </div>
                <hr className="border-dashed border-gray-300" />

                <hr className="border-dashed border-gray-300" />
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-yellow-500">
                        در حال بارگذاری...
                    </p>
                </div>
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-yellow-500">
                        در حال بارگذاری...
                    </p>
                </div>
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-yellow-500">
                        در حال بارگذاری...
                    </p>
                </div>
            </div>
        )
    } else if (reqStatus.commite === true) {
        return (
            <div className=" m-3 bg-white rounded-xl p-5">
              <div className=" pb-4">
                <p className=" font-bold">آپلود 3 فایل نهایی</p>
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
        )
    } else if (reqStatus.report === false) {
        return (
            <div className=" m-3 bg-white rounded-xl p-5">
              <div className=" pb-4">
                <p className=" font-bold">آپلود 3 فایل نهایی</p>
              </div>
              <hr className="border-dashed border-gray-300" />
            
              <hr className="border-dashed border-gray-300" />
              <div className="rounded-lg p-2 border text-red-700 text-xs mt-4">
                <p className="">
                  این بخش هنوز فعال نیست
                </p>
              </div>
            </div>
        )
    } else if (reqStatus.report === true && reqStatus.commite === false && fileStorage.file === null) {
        return (
            <div className="m-3 bg-white rounded-xl p-5">
                {isLoading && <Loader />}
                <div className=" pb-4">
                    <p className=" font-bold">آپلود 3 فایل نهایی</p>
                </div>
                <hr className="border-dashed border-gray-300" />
        
                <hr className="border-dashed border-gray-300" />
                {/*----------------------------------- FILE 1 -----------------------------------*/}
                <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                    <p className="">
                        تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                    </p>
                    {
                        fileData.file1 === null ?
                        <label htmlFor="file1" className="text-blue-400 text-xs w-full justify-center">
                            برای بارگذاری کلیک کنید
                        </label> :
                        <div>
                            <p className="text-blue-400 text-xs w-full m-1 justify-center">
                            {
                                `نام فایل : ${fileData.file1.name}`
                            }
                            </p>
                            <label htmlFor="file1" className="text-yellow-400 m-1 text-xs w-full justify-center">
                            برای تغییر کلیک کنید
                            </label>

                        </div>
                    }
                    {fileErr && fileData.file1 === null && <p className="text-yellow-400 text-xs w-full m-1 justify-center">*فایلی انتخاب کنید</p>}
                    <input id="file1" style={{ display: "none" }} type="file" onChange={changeHandler} name="file1" />
                </div>
                {/*----------------------------------- FILE 2 -----------------------------------*/}
                <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                    <p className="">
                        تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                    </p>
                    {
                        fileData.file2 === null ?
                        <label htmlFor="file2" className="text-blue-400 text-xs w-full justify-center">
                            برای بارگذاری کلیک کنید
                        </label> :
                        <div>
                            <p className="text-blue-400 text-xs w-full m-1 justify-center">
                            {
                                `نام فایل : ${fileData.file2.name}`
                            }
                            </p>
                            <label htmlFor="file2" className="text-yellow-400 m-1 text-xs w-full justify-center">
                            برای تغییر کلیک کنید
                            </label>

                        </div>
                    }
                    {fileErr && fileData.file2 === null && <p className="text-yellow-400 text-xs w-full m-1 justify-center">*فایلی انتخاب کنید</p>}
                    <input id="file2" style={{ display: "none" }} type="file" onChange={changeHandler} name="file2" />
                </div>
                {/*----------------------------------- FILE 3 -----------------------------------*/}
                <div className="rounded-lg p-2 border text-gray-400 text-xs mt-4">
                    <p className="">
                        تصویر مجوز ها و گواهی نامه های اخذ شده توسط شرکت
                    </p>
                    {
                        fileData.file3 === null ?
                        <label htmlFor="file3" className="text-blue-400 text-xs w-full justify-center">
                            برای بارگذاری کلیک کنید
                        </label> :
                        <div>
                            <p className="text-blue-400 text-xs w-full m-1 justify-center">
                            {
                                `نام فایل : ${fileData.file3.name}`
                            }
                            </p>
                            <label htmlFor="file3" className="text-yellow-400 m-1 text-xs w-full justify-center">
                            برای تغییر کلیک کنید
                            </label>

                        </div>
                    }
                    {fileErr && fileData.file3 === null && <p className="text-yellow-400 text-xs w-full m-1 justify-center">*فایلی انتخاب کنید</p>}
                    <input id="file3" style={{ display: "none" }} type="file" onChange={changeHandler} name="file3" />
                </div>
                {stepSendReq && <p className="text-green-400 text-xs w-full m-1 justify-center">در حال ارسال اطلاعات...</p>}
                {err && <p className="text-red-400 text-xs w-full m-1 justify-center">خطا در ارسال اطلاعات !</p>}
                <button onClick={step4Handler} className="w-full  rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">
                    ثبت{" "}
                </button>
            </div>
        )
    } else if (reqStatus.report === true && reqStatus.commite === false && fileStorage.file !== null) {
        return (
            <div className="m-3 bg-white rounded-xl p-5">
                <div className=" pb-4">
                  <p className=" font-bold">آپلود 3 فایل نهایی</p>
                </div>
                <hr className="border-dashed border-gray-300" />

                <hr className="border-dashed border-gray-300" />
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                  <p className="text-yellow-500">
                    درحال بررسی توسط مدیر
                  </p>
                </div>
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                  <p className="text-yellow-500">
                    درحال بررسی توسط مدیر
                  </p>
                </div>
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                  <p className="text-yellow-500">
                    درحال بررسی توسط مدیر
                  </p>
                </div>
            </div>
        )
    }
}
