import React, { useEffect, useState } from 'react'
import Axios from '../../../axiosinstancs'
import imgg from '../../assets/imges/ViewRequests/x.png'
import Loader from '../../components/Loader/Loader'

export default function ViewReqs({close , setData , setRequest_data}) {

    const [reqs , setReqs] = useState([])
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        Axios.get("/api/v1/get_current_request_user").then(async(res) => {
            console.log(res);
            res.data.reverse()
            setReqs(res.data)
            setIsLoading(false)
          })
    } , [])
    const clickHandler = (e) => {
        setData(prev => {
            return({
                ...prev,
                request_id : e.id
            })
        })
        setRequest_data(e)
        close(false)
    }
    if (isLoading) return <Loader />
  return (
      <div className="bg-gradient-to-b z-10 from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
        <div className="absolute z-20 max-h-[60vh] overflow-y-scroll  z-10 rounded-2xl w-c-17 top-18 text-sm right-1/2 translate-x-1/2 bg-white p-3.5 flex flex-col gap-2">
            <div className="p-2 flex justify-between">
            <div>لیست درخواست ها</div>
            <button onClick={() => close(false)} className="text-c-9 border border-c-9 rounded w-c-4 h-c-4 flex justify-center items-center">
            <img className="" src={imgg} alt="" />
            </button>
            </div>
            {
                reqs.map((item , index) => {
                    // console.log(item);
                    return(
                        <div key={index} className="p-2 flex items-center bg-c-2 rounded-lg">
                            <div className="flex-1 px-2">درخواست {item.type === "warranty" ? "ضمانت" : "تسهیلات"}</div>
                            <div className="flex-1 px-2">شناسه : {item.shenaseh}</div>
                            {/* {item.warranty[0] && <div className="flex-1 px-2">عنوان : {item.warranty[0].title}</div>} */}
    
                            <button onClick={() => clickHandler(item)} className="py-1 px-2 text-c-13 bg-c-14 rounded">انتخاب</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
