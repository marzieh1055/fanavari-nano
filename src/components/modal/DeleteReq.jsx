import React, { useState } from 'react'
import Axios from '../../../axiosinstancs'
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function DeleteReq({ close , id , toast }) {
  const navigate = useNavigate();

  const [IsLoading, setIsLoading] = useState(false);
  const [sendData, setSendData] = useState({
    request_id : id,
    description : "",
    file : ""
  });

//   console.log(userDataaa);
  const confirmHandler = () => {
    setIsLoading(true)
    const token = localStorage.getItem('token');
    const isLoggedIn = token ? true : false;
    axios.post("/api/v1/request_delete", sendData, {
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
        toast("درخواست حذف با موفقیت ثبت شد")
        close(false)
    })
    .catch((err) => {
        setIsLoading(false)
        toast("عملیات با خطا مواجه شد")
    })
  }
  if (IsLoading) return <Loader />
  return (
    <div  className="bg-gradient-to-b z-10 from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
          <div className="w-96 bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
              <p className="text-center font-bold my-3 mb-1">آیا مایل به حذف درخواست هستید؟</p>
              <div className='p-3 rounded border'>
                <label className='text-xs' htmlFor="text">علت حذف درخواست را شرح دهید:</label>
                <input type="text" id='text' value={sendData.description} name="description" onChange={(e) => setSendData(prev => ({...prev , [e.target.name] : e.target.value}))} className='mb-3 border-none outline-none w-full ' />
                <label className='text-yellow-400 font-sm' htmlFor="file">انتخاب فایل : {sendData.file && sendData.file.name}</label>
                <input type="file" id='file' className='hidden' name="file" onChange={(e) => setSendData(prev => ({...prev , [e.target.name] : e.target.files[0]}))} />
              </div>
              <div className='flex'>
                <button onClick={() => close(false)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
                <button onClick={confirmHandler} className="w-full m-1 rounded-lg bg-blue-700 mt-2  text-white p-3 font-bold text-xs" >تایید</button>
              </div>
          </div>
        </div> 
  )
}
