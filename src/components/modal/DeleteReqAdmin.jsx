import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteReqAdmin({ close , id , toast , setUp }) {
  const navigate = useNavigate();

  const [IsLoading, setIsLoading] = useState(false);

  // console.log(userDataaa);

  const confirmHandler = () => {
    setIsLoading(true)
    const token = localStorage.getItem('token');
    const isLoggedIn = token ? true : false;

    // اینجا
    axios.delete(`/api/v1/request/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(isLoggedIn && {
              Authorization: `Bearer ${JSON.parse(token)}`
          })
        }
      })
    .then((res) => {
        console.log(res);
        setIsLoading(false)
        toast("حذف با موفقیت انجام شد")
        close(false)
        setUp(prev => prev + 1)
    })
    .catch((err) => {
        setIsLoading(false)
        toast("عملیات با خطا مواجه شد")
    })
  }
  if (IsLoading) return <Loader />
  return (
    <div  className="transition-opacity bg-gradient-to-b z-10 from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="transition-opacity w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">آیا مایل به حذف درخواست هستید؟</p>
              <div className='flex'>
                <button onClick={() => close(false)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
                <button onClick={confirmHandler} className="w-full m-1 rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs" >تایید</button>
              </div>
          </div>
        </div> 
  )
}
