import React, { useState , useEffect } from 'react'
import Axios from '../../../axiosinstancs'
import Loader from '../Loader/Loader'

export default function ExpertReqs({details , close}) {
  const [isLoading , setIsLoading] = useState(true)
  const [listType , setListType] = useState("allReqs") // reqs or openReqs
  const [reqs , setReqs] = useState([])
  const [currentReqs , setCurrentReqs] = useState([])


  // console.log(details);
  useEffect(() => {
    Axios.get(`/api/admin/get_request_with_expert/${details.id}`).then(async (res) => {
      console.log(res.data);
      setReqs(res.data)
      setIsLoading(false)
    })
    Axios.get(`/api/admin/get_current_requests/${details.id}`).then(async (res) => {
      console.log(res.data);
      setCurrentReqs(res.data)
      setIsLoading(false)
    })
  },[])
  return (
    <div  className="bg-gradient-to-b from-gray-600 to-transparent fixed inset-0 flex items-center justify-center">
      <div className="w-[30rem] max-h-[500px] bg-white z-10 rounded-lg p-4 shadow-lg flex flex-col gap-4">
        {isLoading && <Loader />}
          <div class="mt-2">
            <div class="border-b border-gray-200">
              <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                <button id="tabs-1-tab-1" onClick={() => setListType("openReqs")} style={listType === "openReqs" ? { borderColor: '#ff0000' } : {}}  class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">درخواست های جاری</button>
                <button id="tabs-1-tab-2" onClick={() => setListType("allReqs")} style={listType === "allReqs" ? { borderColor: '#ff0000' } : {}} class="border-transparent text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">درخواست ها</button>
              </div>
            </div>
          </div>
          <div>
            <ul role="list" class="max-h-[300px] overflow-y-auto divide-y divide-gray-100">
              {
                listType === "allReqs" && reqs && reqs.map((item) => {
                  return (
                    <li class="flex justify-between gap-x-6 py-5">
                      <div class="flex gap-x-4">
                        <div class="min-w-0 flex-auto">
                          <p class="text-sm font-semibold leading-6 text-gray-900">{item.request.type === "facilities" ? "درخواست تسهیلات" : "درخواست ضمانت"}</p>
                          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{`شناسه : ${item.request.shenaseh}`}</p>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
              {
                listType === "openReqs" && currentReqs && currentReqs.map((item) => {
                  return (
                    <li class="flex justify-between gap-x-6 py-5">
                      <div class="flex gap-x-4">
                        <div class="min-w-0 flex-auto">
                          <p class="text-sm font-semibold leading-6 text-gray-900">{item.request.type === "facilities" ? "درخواست تسهیلات" : "درخواست ضمانت"}</p>
                          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{`شناسه : ${item.request.shenaseh}`}</p>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <button onClick={() => close(null)}  className="w-full m-1 rounded-lg border border-red-700 mt-2 text-red-700 p-3 font-bold text-xs" >بستن</button>
      </div>
  </div>  
  )
}
