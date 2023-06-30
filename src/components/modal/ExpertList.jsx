import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Expert from '../Expert/Expert'
import Axios from '../../../axiosinstancs'
import Loader from '../Loader/Loader'
import imgg from '../../assets/imges/ViewRequests/x.png'

export default function ExpertList({close , reqId , setUpdatePage , type}) {

    const [expert , setExpert] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get("/api/admin/expert").then(async(res) => {
            console.log(res);
            setExpert(res.data)
            setIsLoading(false)
          })
    } , [])
  return (
    <div className="absolute shadow-c z-10 rounded-2xl w-c-17 top-18 text-sm right-1/2 translate-x-1/2 bg-white p-3.5 flex flex-col gap-2">
        <div className="p-2 flex justify-between">
        <div>لیست کارشناسان</div>
        <button onClick={() => close(null)} className="text-c-9 border border-c-9 rounded w-c-4 h-c-4 flex justify-center items-center">
          <img className="" src={imgg} alt="" />
        </button>
        </div>
        {
            isLoading && <Loader />
        }
        {
            expert && expert.map((item) => {
                console.log(item);
                return <Expert type={type} key={item.id} closeP={close} name={`${item.name} ${item.family}`} setUpdatePage={setUpdatePage} avatar="/src/assets/imges/user.png" reqId={reqId} expertId={item.id} />
            })
        }
    </div>
  )
}
