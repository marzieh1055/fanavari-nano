import React, { useState } from 'react'
import axios from 'axios'
import Loader from '../Loader/Loader'
import Axios from '../../../axiosinstancs'
export default function CheckReport({ close , setUpdatePage , reqId}) {
    const [repText , setRepText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(false)
    const [validationError, setValidationError] = useState(false)

    const [checkType , setCheckType] = useState({is_failed : false})

    const changeHandler = (e) => {
        setRepText(e.target.value)
        if (repText) {
            setValidationError(false)
        }
    }
    const checkHandler = (e) => {
        if (e.target.id === 'is_accepted') {
            setCheckType({
                is_failed : false
            })
        } else {
            setCheckType({
                is_failed : true
            })
        }
    }
    const sendReport = () => {
        if (repText) {
            setIsLoading(true)
            setErr(false)
            setValidationError(false)
            const data = {
                ...checkType,
                request_id : reqId,
                message : repText ,
                is_accepted : false,
            }
            console.log(data);
            Axios.post(`/api/admin/check_document`, data)
            .then(async (res) => {
                console.log(res);
                setUpdatePage(prev => prev + 1)
                setIsLoading(false)
                close(null)
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false)
                setErr(true)
            })
        } else {
            setValidationError(true)
        }
    }

    return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">متن گزارش خود را وارد کنید</p>
                <textarea
                    className={validationError ? "w-full h-12 border border-gray-300 rounded-xl my -2 border-red-500" : "w-full h-12 border border-gray-300 rounded-xl my -2"}
                    id=""
                    cols="40"
                    rows="20"
                    type={repText} onChange={changeHandler}
                ></textarea>
                {validationError && <span className='text-red-500'>* این فیلد الزامی میباشد</span>}
                <div className='flex justify-center items-center'>
                    {/* is_accepted */}
                    <div className='mx-3'>
                        <input className='mx-1 rounded-[50%] border-0 outline-0' type='radio' name='checkBoxs' id='is_accepted' checked onChange={checkHandler}/>
                        <label htmlFor="is_accepted">گذارش ناقصی</label>
                    </div>
                    {/* is_failed */}
                    <div className='mx-3'>
                        <input className='mx-1 rounded-[50%] border-0 outline-0' type='radio' name='checkBoxs' id='is_failed' onChange={checkHandler}/>
                        <label htmlFor="is_failed">رد کردن درخواست</label>
                    </div>
                </div>
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
