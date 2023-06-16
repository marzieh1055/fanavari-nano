import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import Axios from "../../../axiosinstancs";
import { useParams } from "react-router-dom";
import user from "../../assets/imges/user.png"

// فعلا این صفحه استفاده نمیشه
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




export default function ViewRequest() {

  const reqId = useParams()
  
  const [expertData , setExpertData] = useState({})
  const [reqStatus , setReqStatus] = useState({})

  

  useEffect(() => {
    Axios.get(`/api/v1/request/${reqId.id}`).then(async(res) => {
      console.log(res);
      setExpertData(res.data.expert_assignment.expert)
    })
    Axios.get(`/api/v1/get_all_status/${reqId.id}`).then(async(res) => {
      console.log(res);
      setReqStatus({
        check : res.data.check,
        assessment : res.data.assessment,
        report : res.data.report,
        commite : res.data.commite,
        credit : res.data.credit,
      })
    })
  },[])
  
  return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold">مشاهده درخواست ها</p>
      </div>
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="flex items-center">
            <p className={reqStatus.check === true ? "bg-green-200 p-0.5 pt-1 px-3 rounded-xl text-green-600 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-500"}>
              1
            </p>
            <p className={reqStatus.check === true ? "text-green-500 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>check</p>
          </div>
          <div className="h-16">
            <div className={reqStatus.assessment === true ? "border-l border-2 border-green-500 h-full rounded" : "border-l border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.assessment === true ? "bg-green-200 p-0.5 pt-1 px-3 rounded-xl text-green-600 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-500"}>
              2
            </p>
            <p className={reqStatus.assessment === true ? "text-green-500 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>
              assessment
            </p>
          </div>
          <div className="h-16">
            <div className={reqStatus.report === true ? "border-l border-2 border-green-500 h-full rounded" : "border-l border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.report === true ? "bg-green-200 p-0.5 pt-1 px-3 rounded-xl text-green-600 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-500"}>
              3
            </p>
            <p className={reqStatus.report === true ? "text-green-500 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>report</p>
          </div>
          <div className="h-16">
            <div className={reqStatus.commite === true ? "border-l border-2 border-green-500 h-full rounded" : "border-l border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.commite === true ? "bg-green-200 p-0.5 pt-1 px-3 rounded-xl text-green-600 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-500"}>
              4
            </p>
            <p className={reqStatus.commite === true ? "text-green-500 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>commite</p>
          </div>
          <div className="h-16">
            <div className={reqStatus.credit === true ? "border-l border-2 border-green-500 h-full rounded" : "border-l border-2 border-gray-300 h-full rounded"}></div>
          </div>
          <div className="flex items-center">
            <p className={reqStatus.credit === true ? "bg-green-200 p-0.5 pt-1 px-3 rounded-xl text-green-600 " : "bg-gray-300 p-0.5 pt-1 px-3 rounded-xl text-gray-500"}>
              5
            </p>
            <p className={reqStatus.credit === true ? "text-green-500 font-bold mx-2 text-sm" : "text-gray-300 font-bold mx-2 text-sm"}>credit</p>
          </div>
        </div>
        <div className="w-3/6 px-6">
          <div className="flex flex-col bg-white rounded-xl p-6 h-1/2 mb-4">
            <p className="font-bold">مدارک اصلی</p>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <AiOutlineCheckCircle className="text-4xl text-green-500  my-2" />
              <p className="font-bold text-3xl">با موفقیت تکمیل شد ! </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-xl p-6 h-1/2 mt-">
            <p className="font-bold">اسناد</p>
            <div className="flex text-gray-500">
              <BiErrorCircle />
              <p className=" text-sm mx-2">حداکثر تعداد اسناد 5 عدد می باشد</p>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <AiOutlineCheckCircle className="text-4xl text-green-500  my-2" />
              <p className="font-bold text-3xl">با موفقیت تکمیل شد ! </p>
            </div>
          </div>
        </div>

        
        <div className="w-2/6 bg-white rounded-2xl px-6">
          <div className=" py-6 ">
            <p className="text-lg font-extrabold">کارشناس</p>
          </div>
          <div className="flex items-center">
            <img src={user} alt="" className="h-10" />
            <p className="px-3 font-bold text-gray-600">{`${expertData.name} ${expertData.family}`}</p>
          </div>
          
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">
              {`پست الکترونیکی : ${expertData.email}`}
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
