import React, { useState } from 'react'
import Axios from '../../../../axiosinstancs'
import Loader from '../../Loader/Loader';

export default function temp({close , data , id , toast }) {
    console.log(data);

    const [isLoading , setIsLoading] = useState(false)
    const [sendObject , setSendObject] = useState({
        places: [
            ...data
        ],
    })

    
    // console.log(sendObject);
    
    const sendHandler = (e) => {
        e.preventDefault()
        setIsLoading(false)
        Axios.put(`/api/v1/request/${id}`, sendObject)
        .then((res) => {
          console.log(res.data)
          setIsLoading(true)
          toast("تغییرات باموفقیت ثبت شد")
          close(null)

        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          toast("ثبت تغییرات با خطا مواجه شد")
        })
    }

    if (isLoading) return <Loader />
    return (
    <div className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex flex-col items-center justify-center">
        
      <div>
          <button className='bg-red-500 p-3 mt-2 ml-2 rounded-xl text-white shadow-md transition hover:bg-red-600' onClick={() => close(null)}>بستن</button>
          <button className='bg-green-500 p-3 mt-2 mr-2 rounded-xl text-white shadow-md transition hover:bg-green-600' onClick={sendHandler}>ثبت اطلاعات</button>
      </div>
    </div>
  )
}
