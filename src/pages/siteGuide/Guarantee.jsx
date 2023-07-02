import React, { useContext, useEffect, useState } from "react";
import { MdPayment } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";
import Axios from "../../../axiosinstancs";
import Loader from "../../components/Loader/Loader";

export default function Guarantee() {
  const {userDatas} = useContext(UserDataContext)
  const navigate = useNavigate()
  const [isLoading , setIsLoading] = useState(true)
  useEffect(() => {
    Axios.get("/api/v1/is_profile_genuine")
    .then((res) => {
      console.log(res);
      setIsLoading(false)
      if (!res.data && userDatas.user.type === "genuine") {
        navigate(`/panel/genuineUserInfo`)
      }
    })
    .catch((err) =>{
      console.log(err);
      navigate(`/panel/404`)
    })
    Axios.get("/api/v1/is_profile_legal")
    .then((res) => {
      console.log(res);
      setIsLoading(false)
      if (!res.data && userDatas.user.type === "legal") {
        navigate(`/panel/legaluserInfo`)
      }
    })
    .catch((err) =>{
      console.log(err);
      navigate(`/panel/404`)
    })

  } , [])

  if (isLoading) return <Loader />
  return (
    <div className="px-5 py-5 text-justify">
      {/* <div className=" py-6">
        <p className="text-xl font-extrabold">راهنمای سایت </p>
      </div>
      <FcDocument className=" text-4xl" /> */}
      <div className="">
        <p className="font-bold text-lg my-3">
          شرایط و قوانین درخواست ضمانت نامه {" "}
        </p>
        <p className="text-gray-600 justify-items-stretch py-2">
          همراه گرامی  موارد زیر را جهت ثبت درخواست بهینه
          به دقت ملاحظه فرمایید.
        </p>
      </div>
      <div className="border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله اول : </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          شما درخواست‌دهنده گرامی در مرحله اول موظف به پرداخت هزینه بررسی می باشید. همراهانی که ساکن تهران هستند، باید مبلغ 10000000
          ریال را پرداخت کنند و افرادی که ساکن غیرتهران هستند، موظف به پرداخت 5000000 ریال می باشند.
          به ذکر است بدون پرداخت این هزینه، اجازه ثبت درخواست  را ندارند .
        </p>
      </div>
      <div className=" border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله دوم : </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          در این مرحله باید مدارک درخواست شده را حجم و کیفیت مناسب برای بررسی اپلود کنید.
        </p>
      </div>
      <div className=" border-b-[3px] border-gray-300">
        <p className="font-bold text-lg my-3">مرحله سوم </p>
        <p className="text-gray-600 justify-items-stretch py-3">
          پس از بارگذاری کامل مدارک، می توانید از قسمت درخواست های جاری جزئیات درخواستخود را بررسی کنید و از روند آن اطلاع داشته باشید.
        </p>
      </div>
      <Link to="/panel/oploadDoc">
      <button className="flex bg-blue-800 text-white rounded-xl p-3 my-3 w-full justify-center items-center  ">
        <MdPayment className="text-2xl ml-2" />

        انتقال به درگاه بانکی
      </button>
      </Link>
    </div>
  );
}
