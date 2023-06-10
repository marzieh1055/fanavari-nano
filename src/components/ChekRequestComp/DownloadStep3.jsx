import React , { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';
import Axios from '../../../axiosinstancs';

export default function DownloadStep3({ reqStatus , reqId }) {

    const [rendering, setRendering] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [fileErr, setFileErr] = useState(false)
    const [stepSendReq, setStepSendReq] = useState(false)
    const [up, setUp] = useState(0)

    const [fileStorage, setFileStorage ] = useState({
        file : null,
    })
    const [fileData, setFileData] = useState({
        request_id: reqId,
        file: null,
    })

    useEffect(() => {
        setRendering(true)
        // get step 3
        Axios.get(`/api/admin/get_report_for_admin/${reqId}`).then(async (res) => {
            console.log(res);
            setFileStorage({
                file : res.data.file_name
            })
            setRendering(false)
        }) .catch(async (err) => {
            console.log(err.response.data);
            setRendering(false)
            setFileStorage({
                file : null
            })
        })
    } , [ ])
    const downloadHandler = () => {
        // axios({
        //     url: 'https://panel.frzddev.ir/storage/app/public/Reports/q05IzKpyYJp9vOOC9MjnkkMSR0iKRRExxeyMj35q.pdf',
        //     method: 'GET',
        //     responseType: 'blob',
        // }).then((response) => {
        //     console.log(response);
        //     // const url = window.URL.createObjectURL(new Blob([response.data]));
        //     // console.log(url);
        // })
        Axios.get("/storage/app/public/Reports/q05IzKpyYJp9vOOC9MjnkkMSR0iKRRExxeyMj35q.pdf")
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }    
      if (rendering) {
        return (
            <div className=" m-3 bg-white rounded-xl p-5">
                <div className=" pb-4">
                    <p className=" font-bold"> دانلود فایل گزارش ارزیابی </p>
                </div>
                <hr className="border-dashed border-gray-300" />

                <hr className="border-dashed border-gray-300" />
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-yellow-500">
                        در حال بارگذاری...
                    </p>
                </div>
            </div>
        )
      }
      if (reqStatus.report === true) {
        return (
            <div className=" m-3 bg-white rounded-xl p-5">
                <div className=" pb-4">
                    <p className=" font-bold"> دانلود فایل گزارش ارزیابی </p>
                </div>
                <hr className="border-dashed border-gray-300" />

                <hr className="border-dashed border-gray-300" />
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-green-500">
                        کامل شده
                    </p>
                </div>
            </div>
        )
      } else if (reqStatus.assessment === false) {
        return (
            <div className=" m-3 bg-white rounded-xl p-5">
                <div className=" pb-4">
                    <p className=" font-bold"> دانلود فایل گزارش ارزیابی </p>
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
      } else if (reqStatus.assessment === true && reqStatus.report === false && fileStorage.file === null) {
        return (
            <div className="m-3 bg-white rounded-xl p-5">
                {isLoading && <Loader />}
                <div className=" pb-4">
                    <p className=" font-bold"> دانلود فایل گزارش ارزیابی </p>
                </div>
                <hr className="border-dashed border-gray-300" />
        
                <hr className="border-dashed border-gray-300" />
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    <p className="text-yellow-500">
                        هنوز از سمت کارشناس کامل نشده
                    </p>
                </div>
                
            </div>
        )
      } else if (reqStatus.assessment === true && reqStatus.report === false && fileStorage.file !== null) {
        return (
            <div className="m-3 bg-white rounded-xl p-5">
                <div className=" pb-4">
                  <p className=" font-bold"> دانلود فایل گزارش ارزیابی </p>
                </div>
                <hr className="border-dashed border-gray-300" />

                <hr className="border-dashed border-gray-300" />
                <div className="rounded-lg p-2 border text-green-700 text-xs mt-4">
                    {/* <a href="Reports/q05IzKpyYJp9vOOC9MjnkkMSR0iKRRExxeyMj35q.pdf"> */}
                        <p onClick={downloadHandler} className="text-blue-500">
                            برای دانلود فایل کلیک کنید
                        </p>
                    {/* </a> */}
                </div>
            </div>
        )
      }

}
