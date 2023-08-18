import React, { useEffect, useState } from "react";
import Axios from "../../../axiosinstancs";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const ViewDetailExpert = () => {
  const reqId = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState([])
  const [IsLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Axios.get(`/api/admin/expert/${reqId.id}`).then(async res => {
      console.log(res)
      setDetails(res.data)
      setIsLoading(false)
    }
    ).catch(err => {
      console.log(err)
      setIsLoading(false)
    }
    )
  } , [])
  if (IsLoading) return <Loader />
  return (
    <form className="bg-white rounded-3xl mt-3 p-3">
      <div className="flex items-center justify-between p-6">
        <p className="text-xl font-bold p-4 py-6">اطلاعات کاربر</p>
        <p onClick={() => navigate(-1)} className="cursor-pointer hover:bg-blue-700 transition-all hover:text-white p-2 rounded-lg">بازگشت</p>
      </div>

      <hr className="border-dashed mt-3 mb-3" />
        {details && <Link to={`/panel/expertChangePassword/${details.id}?name=${details.name}_${details.family}`} style={{cursor : "pointer" }} className="text-yellow-500 p-4 py-6 ">تغییر رمز عبور</Link>}

      <div className="flex flex-wrap">
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام و نام خانوادگی</p>
          <p className="text-gray-500">{`${details.name} ${details.family}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">محل صدور</p>
          <p className="text-gray-500">{`${details.profilegenuine.place_issue}`}</p>
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام پدر</p>
          <p className="text-gray-500">{`${details.profilegenuine.father_name}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">کد ملی</p>
          <p className="text-gray-500">{details.national_code}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تاریخ تولد</p>
          <p className="text-gray-500">{`${details.profilegenuine.birth_day}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">شماره شناسنامه</p>
          <p className="text-gray-500">{`${details.profilegenuine.number_certificate}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">سمت</p>
          <p className="text-gray-500">{`${details.profilegenuine.job}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن همراه</p>
          <p className="text-gray-500">{`${details.phone}`}</p>
        </div>
        
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">میزان تحصیلات</p>
          <p className="text-gray-500">{`${details.profilegenuine.education}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">رشته تحصیلی</p>
          <p className="text-gray-500">{`${details.profilegenuine.study}`}</p>
        </div>
      </div>
      <p className="text-xl font-bold p-4 py-6">محل سکونت</p>
      <hr className="border-dashed" />

      <div className="flex flex-wrap">
      <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن ثابت</p>
          <p className="text-gray-500">{`${details.profilegenuine.address.home_number}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">آدرس</p>
          <p className="text-gray-500">{`${details.profilegenuine.address.address}`}</p>
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">کد پستی</p>
          <p className="text-gray-500">{`${details.profilegenuine.address.postal_code}`}</p>
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">پست الکترونیک</p>
          <p className="text-gray-500">{`${details.email}`}</p>
        </div>
      </div>
    </form>
  );
};

export default ViewDetailExpert;
