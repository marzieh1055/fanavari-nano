import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import Axios from '../../../axiosinstancs'
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
            is_accepted : false ,
            message : repText ,
        }
        Axios.post(`/api/admin/check_document`, data)
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
              <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="40"
                  rows="20"
                  type={repText} onChange={changeHandler}
                ></textarea>
              {/* <input type={repText} onChange={changeHandler} /> */}
              {isLoading && <Loader />}
                {err && <p className="text-red-400 text-xs w-full m-1 justify-center">خطا در ارسال اطلاعات !</p>}
              <div className='flex'>
                <button onClick={() => close(null)} className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs">بستن</button>
                <button onClick={sendReport} className="w-full m-1 rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs">تایید</button>
              </div>
            </div>
        </div>  
    )
}
