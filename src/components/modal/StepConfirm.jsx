import React, { useState } from 'react'
import Axios from '../../../axiosinstancs'
import Loader from '../Loader/Loader'

export default function StepConfirm({action , requestId , close , setUpdatePage}) {
  const [isLoading , setIsLoading] = useState(false)
  const [err, setErr] = useState(false)
  const confirmHandler = () => {
    setIsLoading(true)
    setErr(false)
    if (action.step === 1 && action.prevTest === true) {
      Axios.post("/api/admin/check_document" , {
        "request_id":requestId,
        "is_accepted":true
      }).then(async(res) => {
        console.log(res);
        setIsLoading(false)
        setUpdatePage(prev => prev + 1)
        close(null)
      })
      .catch(() => {
        setErr(true)
        setIsLoading(false)
      })
    } else if (action.step === 2 && action.prevTest === true) {
      Axios.post("/api/admin/start_assessment" , {
        "request_id":requestId,
        "is_accepted":true
      }).then(async(res) => {
        console.log(res);
        setIsLoading(false)
        setUpdatePage(prev => prev + 1)
        close(null)
      })
      .catch(() => {
        setErr(true)
        setIsLoading(false)
      })
    }
  }

    if (action.currentStep === true) {
      return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">این مرحله قبلا تایید شده است</p>
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
              </div>
          </div>
      </div>  
      )
  
    } else if (action.prevTest === false) {
      return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">مراحل قبل هنوز تکمیل نشده</p>
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
              </div>
          </div>
      </div>  
      )
  
    } else if (action.step === 3) {
      return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">برای تکمیل این مرحله باید فایل در قسمت آپلود فایل گزارش ارزیابی بارگذاری گردد</p>
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
              </div>
          </div>
      </div>  
      )
  
    } else if (action.step === 4) {
      return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">برای تکمیل این مرحله باید فایل در قسمت آپلود سه فایل نهایی بارگذاری گردد</p>
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
              </div>
          </div>
      </div>  
      )
  
    } else if (action.step === 5) {
      return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">این بخش با آپلود فایل گزارش ارزیابی تکمیل میگردد</p>
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
              </div>
          </div>
      </div>  
      )
  
    } else {
      return (
        <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">آیا مایل به تایید  مرحله {action.step} هستید؟</p>
              <p className="text-center my-3 mb-1">
                {
                  action.step === 1 ? " بررسی مدارک تکمیل شد" :
                  action.step === 2 ? "شروع ارزیابی و جلسه" :
                  action.step === 3 ? "گزارش ارزیابی" :
                  action.step === 4 ? "کمیته" :
                  action.step === 5 ? "اعلام حد اعتباری" : ""
                }
              </p>
              {isLoading && <Loader />}
              {err && <p style={{textAlign : "center"}} className="text-red-400 text-xs w-full m-1 justify-center">خطا در ارسال اطلاعات !</p>}
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
                <button onClick={confirmHandler} className="w-full m-1 rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs" >تایید</button>
              </div>
          </div>
        </div>  
      )
  
    }
}
