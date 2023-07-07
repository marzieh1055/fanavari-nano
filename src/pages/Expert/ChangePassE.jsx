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
import UISelectInput from "../../components/Input/UISelectInput";
import Loader from "../../components/Loader/Loader";
import axios from "axios";

export default function ChangePassE() {

    const {userDatas} = useContext(UserDataContext)
    const navigate = useNavigate()
    const [isLoading , setIsLoading] = useState(false)

    const [sendDatas , setSendDatas] = useState({
        password : "",
        password_confirmation : "",
    })
    console.log(sendDatas);

  const sendHandler = () => {
    setIsLoading(true)
    // const docc = new FormData()
    // Object.keys(sendDatas).map(item => {
    //     docc.append(`${item}` , sendDatas[item])
    // })
    const token = localStorage.getItem('token');
    const isLoggedIn = token ? true : false;
    axios.post(`/api/admin/expert/${userDatas.user.id}`, sendDatas, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(isLoggedIn && {
              Authorization: `Bearer ${JSON.parse(token)}`
            }),
            "X-HTTP-Method-Override": "PUT",
        }
      })
    .then((res) => {
        console.log(res);
        if (res.data.success) {
            toast("اطلاعات با موفقیت ثبت شد")
            toast("در حال انتقال به صفحه ورود...")
        }
        navigate(`/auth/login`)
        setIsLoading(false)
    })
    .catch((err) => {
        setIsLoading(false)
        console.log(err.response.data.message);
        if (typeof(err.response.data.message) === "string") {
            toast(err.response.data.message)
        } else {
            Object.keys(err.response.data.message).map((item) => {
                toast(err.response.data.message[item][0])
            })
        }
    })
  }
  
  if (isLoading) return <Loader />
  return (
    <div className="bg-white rounded-2xl mt-6 p-6">
      <div className=" p-6">
        <p className="text-xl font-extrabold">تغییر رمز عبور </p>
      </div>
      <ToastContainer />
      <hr />
      <div className="flex flex-wrap">
        {
            Object.keys(sendDatas).map((item , index) => {
                {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-17 ">
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
