import React, { useContext, useEffect, useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import user from "../../assets/imges/user.png"
import Axios from "../../../axiosinstancs";
import { useNavigate } from "react-router-dom";
import UIInputDate from "../../components/Input/UIInputDate";
import UIInputNumber from "../../components/Input/UIInputNumber";
import UIInput from "../../components/Input/UIInput";
import { ToastContainer, toast } from 'react-toastify';
import { inputTitle } from "../../helper/inputTitles";
import { UserDataContext } from "../../contexts/UserData.Provider";

export default function LegalUserInfo() {
  const navigate = useNavigate()
  const {userDatas} = useContext(UserDataContext)
    const [sendDatas , setSendDatas] = useState({
        type_legal:"",
        place_registration:"",
        establishment:"",
        signed_right:"",
        initial_investment:"",
        fund:"",
        subject_activity:"",
        name_representative:"",
        landline_phone:"",
        phone:"",
        email:"",
        site:""
      })

  const sendHandler = () => {
    Axios.post("/api/v1/profile_legal" , sendDatas)
    .then((res) => {
      console.log(res.data);
      if (res.data.success) {
        toast("اطلاعات با موفقیت ثبت شد")
      }
      setTimeout(() => {
          navigate(`/panel/userInfo`)
      } , 1000)
        
    })
    .catch((err) => {
        console.log(err.response.data.errors);
        Object.keys(err.response.data.errors).map((item) => {
            toast(err.response.data.errors[item][0])
        })
    })
  }
  return (
    <div className="bg-white rounded-2xl mt-6 p-6">
      <div className=" p-6">
        <p className="text-xl font-extrabold">اطلاعات کاربر حقوقی </p>
        <p className="text-ms mt-3 font-ms">برای استفاده از امکانات سایت ابتدا مشخصات خود را کامل نمایید</p>
      </div>
      <hr />
      <ToastContainer />
      <div className="flex mt-6 items-center">
        <img src={user} alt="" className="w-16" />
        <div className=" pr-4">
          <p className="font-bold">{`${userDatas.user.name} ${userDatas.user.family}`}</p>
          <p className="text-gray-500 text-xs">عکس پروفایل </p>
        </div>

      </div>
      <div className="flex flex-wrap">
      {
            Object.keys(sendDatas).map((item , index) => {
                if (item === "establishment") {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInputDate value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } else if (["number_certificate" , "series_certificate" , "postal_code" , "phone" , "work_phone" , "work_postal_code" , "work_namabar"].includes(item)) {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInputNumber value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInput value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                }
            })
        }
        <div className="py-3 ">
        <button onClick={sendHandler} className=" p-3 px-10 border bg-green-500 text-white rounded-xl mr-3">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
}
