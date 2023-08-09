import React, { useContext, useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import user from "../../assets/imges/user.png"
import Axios from "../../../axiosinstancs";
import { UserDataContext } from "../../contexts/UserData.Provider";
import { ToastContainer, toast } from 'react-toastify';
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function Changepass() {
  const {userDatas} = useContext(UserDataContext)

  const navigate = useNavigate()
  const [err , setErr] = useState(false)

  const [isLoading , setIsLoading] = useState(false)
  const [sendDatas , setSendDatas] = useState({
    old_password:"",
    password:"",
    password_confirmation:""
  })

  const sendHandler = () => {
    setErr(false)
    if ((sendDatas.password === sendDatas.password_confirmation) && (sendDatas.password !== "")) {
      setIsLoading(true)
      Axios.post(`/api/v1/change_pass` , sendDatas)
      .then((res) => {
        console.log(res);
          toast("اطلاعات با موفقیت ثبت شد")
          toast("در حال انتقال به صفحه ورود...")
          setTimeout(() => {
            navigate("/auth/login")
          } , 2000)
          setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
        if (typeof(err.response.data.message) === "string") {
            toast(err.response.data.message)
        } else {
            Object.keys(err.response.data.message).map((item) => {
              console.log(err.response.data.message[item][0]);
              toast(err.response.data.message[item][0])
            })
        }
      })
    } else {
      setErr(true)
      console.log("err");
    }
  }
  // if (isLoading) return <Loader />
  return (
      <div className="bg-white rounded-2xl mt-6 p-6">
        {isLoading && <Loader />}
        <ToastContainer />
        <div className=" p-6">
          <p className="text-xl font-extrabold">تغییر رمز عبور</p>
        </div>
        <hr />
        <div className="">
          <div className="w-1/2 mx-auto">
            <div className="mt-6">
              <div className="flex">
                <p className="font-bold text-sm">رمز عبور قبلی :</p>
              </div>
              <input
                type="text"
                name="old_password"
                value={sendDatas.old_password}
                onChange={(e) => setSendDatas(p => ({...p , [e.target.name] : e.target.value}))}
                id=""
                className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
              />
            </div>
            <div className="mt-6">
              <div className="flex">
              <p className="font-bold text-sm">رمز عبور جدید :</p>
                {/* <RiPencilLine className="mr-3" /> */}
              </div>
              <input
                type="text"
                name="password"
                value={sendDatas.password}
                onChange={(e) => setSendDatas(p => ({...p , [e.target.name] : e.target.value}))}
                id=""
                className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
              />
            </div>
            <div className="mt-6">
              <div className="flex">
              <p className="font-bold text-sm">تکرار رمز عبور جدید :</p>
              </div>
              <input
                type="text"
                name="password_confirmation"
                value={sendDatas.password_confirmation}
                onChange={(e) => setSendDatas(p => ({...p , [e.target.name] : e.target.value}))}
                id=""
                className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
              />
            </div>
            {err && <p className="text-yellow-400 p-3">پسورد و تایید با هم مطابقت ندارند</p>}
            <button onClick={sendHandler} className="rounded-xl p-3 px-8 mt-6 bg-blue-800 text-white text-sm ">ذخیره</button>
          </div>
        </div>
      </div>
    );
}
