import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
export default function CheckReport({ close , reqId}) {
    const [repText , setRepText] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const changeHandler = (e) => {
        setRepText(e.target.value)
    }
    
    const sendReport = () => {
        setIsLoading(true)
        setErr(false)
        const data = {
            request_id : reqId,
            is_accepted : 0 ,
            message : repText ,
        }
        axios.post(`/api/admin/check_document`, data , {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(async (res) => {
            console.log(res);
            setUpdatePage(prev => prev + 1)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false)
            setErr(true)
        })
    }

    return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">متن گزارش خود را وارد کنید</p>
              <input type={repText} onChange={changeHandler} />
              {isLoading && <Loader />}
              <div className='flex'>
                {err && <p className="text-red-400 text-xs w-full m-1 justify-center">خطا در ارسال اطلاعات !</p>}
                <button onClick={() => close(null)} className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">بستن</button>
                <button onClick={sendReport} className="w-full m-1 rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">تایید</button>
              </div>
            </div>
        </div>  
    )
}
