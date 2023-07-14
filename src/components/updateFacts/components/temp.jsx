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
        
    </div>
  )
}
