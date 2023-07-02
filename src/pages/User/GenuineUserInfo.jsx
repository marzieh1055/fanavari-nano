import React, { useContext, useEffect, useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import user from "../../assets/imges/user.png"
import Axios from "../../../axiosinstancs";
import UIInput from "../../components/Input/UIInput";
import UIInputNumber from "../../components/Input/UIInputNumber";
import UIInputDate from "../../components/Input/UIInputDate";
import { ToastContainer, toast } from 'react-toastify';
import { inputTitle } from "../../helper/inputTitles";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../contexts/UserData.Provider";

export default function GenuineUserInfo() {

    const {userDatas} = useContext(UserDataContext)
    const navigate = useNavigate()
    const [sendDatas , setSendDatas] = useState({
        father_name:"",
        number_certificate:"981320005",
        birth_day:"2000-01-01",
        study : "",
        place_issue:"قم",
        series_certificate:"98654",
        nationality:"ایرانی",
        gender:"female",
        marital:"single",
        residential:"resident",
        education:" کامپیوتر لیسانس",
        job:"برنامه نویس",
        address:"شهرک قدس آوینی جنوبی8",
        postal_code:"1234854",
        phone:"02532859562",
        namabar:"",
        work_address:"عطاران سعدی 3 پلاک 13",
        work_postal_code:"98549495",
        work_phone:"02548754598",
        work_home:"11111111111",
        home_number : "12345678900",
        work_namabar:"",
    })
//   useEffect(() => {
//     Axios.get("/api/v1/is_profile_legal")
//     .then((res) => {
//       console.log(res);

//     })
//     .catch((err) =>{
//       console.log(err);
//     })
//     Axios.get("/api/v1/is_profile_genuine")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) =>{
//       console.log(err);
//     })

//   } , [])

  const sendHandler = () => {
    Axios.post("/api/v1/profile_genuine" , sendDatas)
    .then((res) => {
        console.log(res);
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
        <p className="text-xl font-extrabold">اطلاعات کاربر حقیقی </p>
        <p className="text-ms mt-3 font-ms">برای استفاده از امکانات سایت ابتدا مشخصات خود را کامل نمایید</p>
      </div>
      <ToastContainer />
      <hr />
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
                if (item === "birth_day") {
                    return(
                        <div className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInputDate value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } else if (["number_certificate" , "series_certificate" , "postal_code" , "phone" , "work_phone" , "work_postal_code" , "work_namabar"].includes(item)) {
                    return(
                        <div className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInputNumber value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } else {
                    return(
                        <div className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
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
      </div>
        <div className="py-3 ">
          <button onClick={sendHandler} className=" p-3 px-10 border bg-green-500 text-white rounded-xl mr-3">
            ذخیره
          </button>
        </div>
    </div>
  );
}
