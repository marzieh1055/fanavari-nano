import React, { useContext, useEffect, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import user from "../../assets/imges/user.png"
import Axios from "../../../axiosinstancs";
import { UserDataContext } from "../../contexts/UserData.Provider";
export default function UserInfo() {
  const [details , setDetails] = useState()
  const { userDatas } = useContext(UserDataContext)
  useEffect(() => {
    Axios.get("/api/v1/profile_genuine")
    .then((res) => {
      console.log(res);
      const newA = res.data.reverse()
      newA.map((item) => {
        if(item.user.id === userDatas.user.id) {
          setDetails(item)
          console.log(item);
        }
      })
    })
    .catch((err) => {
     console.log(err); 
    })
  } , [])

  return (
    <div className="bg-white rounded-2xl mt-6 p-6">
      <div className=" p-6">
        <p className="text-xl font-extrabold">اطلاعات کاربری</p>
      </div>
      <hr />
      <div className="">
        <div className="w-1/2 mx-auto">
          <div className="flex mt-6 items-center">
            {
              details && details.image && <img style={{borderRadius : "50%"}} src={`https://backend.nanotf.ir/${details.image}`} alt="عکس پروفایل" className="w-16 h-16" />
            }
            {(!details || !details.image) && <img src={user}  alt="" className="w-16 h-16 " />}
            
            <div className=" pr-4">
              <p className="font-bold">عکس پروفایل</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">نام نام خانوادگی</p>
              <RiPencilLine className="mr-3"/>
            </div>
            <p className="border-0 w-[460px] rounded-xl p-2 bg-purple-50 outline-none mt-2 w-full">{`${userDatas.user.name} ${userDatas.user.family}`}</p>
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">شماره تلفن</p>
              <RiPencilLine className="mr-3" />
            </div>
            <p className="border-0 w-[460px] rounded-xl p-2 bg-purple-50 outline-none mt-2 w-full">{userDatas.user.phone}</p>
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">ایمیل</p>
              <RiPencilLine className="mr-3" />
            </div>
            <p className="border-0 w-[460px] rounded-xl p-2 bg-purple-50 outline-none mt-2 w-full">{userDatas.user.email}</p>
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">کد ملی</p>
              <RiPencilLine className="mr-3" />
            </div>
            <p className="border-0 w-[460px] rounded-xl p-2 bg-purple-50 outline-none mt-2 w-full">{userDatas.user.national_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
