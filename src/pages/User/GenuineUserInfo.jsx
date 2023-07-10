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

export default function GenuineUserInfo() {

    const {userDatas} = useContext(UserDataContext)
    const navigate = useNavigate()
    const [isLoading , setIsLoading] = useState(true)
    const [editStatus , setEditStatus] = useState(false)

    const [profilePic , setProfilePic] = useState(null)
    const [sendDatas , setSendDatas] = useState({
        father_name:"",
        number_certificate:"",
        birth_day:"",
        study : "",
        place_issue:"",
        series_certificate:"",
        nationality:"",
        gender:"",
        marital:"",
        residential:"",
        education:"",
        job:"",
        address:"",
        postal_code:"",
        phone:"",
        namabar:"",
        work_address:"",
        work_postal_code:"",
        work_phone:"",
        work_home:"",
        home_number : "",
        work_namabar:"",
        image : null
    })
    console.log(sendDatas);
    useEffect(() => {
        Axios.get(`/api/v1/show_user/${userDatas.user.id}`)
        .then((res) => {
            console.log(res.data);
            setIsLoading(false)
            const newObj = res.data
            if ((newObj.profilegenuine !== null) || (newObj.profilelagal !== null)) {
                Object.keys(sendDatas).map(item => {
                    Object.keys(newObj).map(pi => {
                        if ((pi === "profilegenuine") && (newObj.type === "genuine")) {
                            Object.keys(newObj.profilegenuine).map(i => {
                                if (i === "address") {
                                    Object.keys(newObj.profilegenuine.address).map(j => {
                                        if (item === j) {
                                            setSendDatas(prev => ({
                                                ...prev ,
                                                [item] : newObj.profilegenuine.address[item]
                                            }))                                
                                        }
                                    })
                                } else {
                                    if (item === i) {
                                        setSendDatas(prev => ({
                                            ...prev ,
                                            [item] : newObj.profilegenuine[item]
                                        }))
                                    }
                                }
                            })
                        } else if ((pi === "profilelagal") && (newObj.type === "legal")) {
                            Object.keys(newObj.profilelagal).map(i => {
                                if (i === "address") {
                                    Object.keys(newObj.profilelagal.address).map(j => {
                                        if (item === j) {
                                            setSendDatas(prev => ({
                                                ...prev ,
                                                [item] : newObj.profilelagal.address[item]
                                            }))                                
                                        }
                                    })
                                } else {
                                    if (item === i) {
                                        setSendDatas(prev => ({
                                            ...prev ,
                                            [item] : newObj.profilelagal[item]
                                        }))
                                    }
                                }
                            })
                        } else {
                            if (item === pi) {
                                setSendDatas(prev => ({
                                    ...prev ,
                                    [item] : newObj[item]
                                }))
                            }
                        }
                    })
                })
                if (newObj.profilegenuine.image !== null) {
                    setProfilePic(`https://backend.nanotf.ir/${newObj.profilegenuine.image}`)
                } else if (newObj.profilelagal.image !== null) {
                    setProfilePic(`https://backend.nanotf.ir/${newObj.profilelagal.image}`)
                }
            }

        })
        .catch((err) => {
            console.log(err);
            // navigate(`/panel/404`)
        })

        Axios.get("/api/v1/is_profile_genuine")
        .then((res) => {
            console.log(res);
            setEditStatus(res.data)
        })
        .catch((err) =>{
            console.log(err);
        })

    } , [])
    const imageHandler = (e) => {
        setSendDatas(prev => {
            return({
                ...prev,
                image : e.target.files[0]
            })
        })
        setProfilePic(URL.createObjectURL(e.target.files[0]))
    }
  const sendHandler = () => {
    setIsLoading(true)
    // const docc = new FormData()
    // Object.keys(sendDatas).map(item => {
    //     docc.append(`${item}` , sendDatas[item])
    // })
    const token = localStorage.getItem('token');
    const isLoggedIn = token ? true : false;
    axios.post("/api/v1/profile_genuine", sendDatas, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(isLoggedIn && {
              Authorization: `Bearer ${JSON.parse(token)}`
          })
        }
      })
    .then((res) => {
        console.log(res);
        if (res.data.success) {
            toast("اطلاعات با موفقیت ثبت شد")
        }
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
      <ToastContainer />
      <div className=" p-6">
        <p className="text-xl font-extrabold">اطلاعات کاربر حقیقی </p>
        {!editStatus && <p className="text-ms mt-3 font-ms">برای استفاده از امکانات سایت ابتدا مشخصات خود را کامل نمایید</p>}
      </div>
      <hr />
      <div className="flex mt-6 items-center">
        {profilePic !== null ? <img src={profilePic} alt="" style={{borderRadius : "50%"}} className=" w-16 h-16" /> : <img src={user} alt="" className="w-16" />}
        <div className=" pr-4">
        <p className="font-bold">{`${userDatas.user.name} ${userDatas.user.family}`}</p>
          <label htmlFor="aks" className="text-yellow-500 text-xs">تغییر عکس پروفایل</label>
          <input onChange={imageHandler} style={{display:"none"}} id="aks" type="file"  />
        </div>
      </div>
      <div className="flex flex-wrap">
        {
            Object.keys(sendDatas).map((item , index) => {
                if (item === "birth_day") {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-17 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInputDate value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } if (["gender" , "marital" , "residential"].includes(item)) {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-17 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UISelectInput value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } else if (["number_certificate" , "series_certificate" , "postal_code" , "phone" , "work_phone" , "work_postal_code" , "work_namabar"].includes(item)) {
                    return(
                        <div key={index} className="relative mt-3 ml-2 w-80 border rounded-2xl p-2 overflow-hidden  h-17 ">
                            <p className="font-bold text-xs">{inputTitle(item)}</p>
                                <UIInputNumber value={sendDatas[item]} setSendDatas={setSendDatas} name={item} ph={inputTitle(item)} />
                            <div className="absolute top-7 left-5">
                                <RiPencilFill />
                            </div>
                        </div>
                    )
                } else if (item !== "image") {
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
