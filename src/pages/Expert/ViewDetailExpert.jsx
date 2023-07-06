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
      <div style={{display:"flex" , justifyContent:"space-between"}}>
        <p className="text-xl font-bold p-4 py-6">اطلاعات کاربر</p>
        <span onClick={() => navigate(-1)} className="text-xl p-4 py-6" style={{fontSize:"15px" , cursor:"pointer"}}>بازگشت</span>
      </div>
        {details && <Link to={`/panel/expertChangePassword/${details.id}?name=${details.name}_${details.family}`} style={{cursor : "pointer" }} className="text-yellow-500 p-4 py-6">تغییر رمز عبور</Link>}

      <hr className="border-dashed mt-3" />

      <div className="flex flex-wrap">
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام و نام خانوادگی</p>
          <input
            type="text"
            placeholder={`${details.name} ${details.family}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">محل صدور</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.place_issue}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام پدر</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.father_name}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">کد ملی</p>
          <input
            type="text"
            placeholder={details.national_code}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تاریخ تولد</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.birth_day}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">شماره شناسنامه</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.number_certificate}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">سمت</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.job}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن همراه</p>
          <input
            type="text"
            placeholder={`${details.phone}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">میزان تحصیلات</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.education}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">رشته تحصیلی</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.study}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
      </div>
      <p className="text-xl font-bold p-4 py-6">محل سکونت</p>
      <hr className="border-dashed" />

      <div className="flex flex-wrap">
      <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن ثابت</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.address.home_number}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">آدرس</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.address.address}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">کد پستی</p>
          <input
            type="text"
            placeholder={`${details.profilegenuine.address.postal_code}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">پست الکترونیک</p>
          <input
            type="text"
            placeholder={`${details.email}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
      </div>
    </form>
  );
};

export default ViewDetailExpert;
