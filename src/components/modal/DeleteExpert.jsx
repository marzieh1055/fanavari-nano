import React, { useState } from 'react'
import Axios from '../../../axiosinstancs'
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

export default function DeleteExpert({expertData , close }) {

  const navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  console.log(expertData);
  const confirmHandler = () => {
    setIsLoading(true)
    Axios.delete(`/api/admin/expert/${expertData.id}`)
    .then((res) => {
      console.log(res);
      setIsLoading(false)
      // setUp((prev) => (prev + 1))
      close(null)

    })
    .catch((err) => {
      setIsLoading(false)
      navigate(`/panel/404`)
    })
  }
  if (IsLoading) return <Loader />
  return (
    <div  className="bg-gradient-to-b z-10 from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">آیا مایل به حذف کارشناس <span className='text-red-400'>{`${expertData.name} ${expertData.family}`}</span> هستید؟</p>
              <p className="text-center my-3 mb-1">
                برای حذف روی تایید کلیک کنید
              </p>
              <div className='flex'>
                <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
                <button onClick={confirmHandler} className="w-full m-1 rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs" >تایید</button>
              </div>
          </div>
        </div> 
  )
}
