import React, { useContext, useEffect, useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import Axios from '../../../axiosinstancs'
import { UserDataContext } from "../../contexts/UserData.Provider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Validation } from "../../helper/validation";
import Loader from "../../components/Loader/Loader";
import ViewReqs from "./ViewReqs";
import axios from "axios";
import ViewReqsE from "./ViewReqsE";

export default function AddTicketE() {
  const {userDatas} = useContext(UserDataContext)
  const navigate = useNavigate();
  const [showReqs, setShowReqs] = useState(false);
  const [request_data, setRequest_data] = useState(null);
  
  const [errors, setErrors] = useState({});
  const [showErr, setShowErr] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  const [data , setData] = useState({
    request_id : null,
    user_id : userDatas.user.id ,
    title : "",
    category : "", //"warranty" یا "other"
    priority : "", // "high" یا "normal"
    body : "",
    file : null,
  })
  
  const subHandler = () => {
    if (!Object.keys(errors).length) {
      // const formData = new FormData();
      setIsLoading(true)
      // formData.append("title" , data.title)
      // formData.append("category" , data.category)
      // formData.append("priority" , data.priority)
      // formData.append("body" , data.body)
      // formData.append("file" , data.file)
      // formData.append("user_id" , data.user_id)
      // formData.append("request_id" , data.request_id)
      
      const token = localStorage.getItem('token');
      const isLoggedIn = token ? true : false;
      axios.post("/api/admin/ticket_expert", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(isLoggedIn && {
              Authorization: `Bearer ${JSON.parse(token)}`
          })
        }
      })
      .then((respons) => {
        navigate(`/panel/ViewTicketsExpert`)
        setIsLoading(false)
      })
      .catch((err) => {
        toast("!خطا در ثبت تیکت")
        // Object.keys(err.response.data.message).map((item) => {
        //   toast(err.response.data.message[item][0])
        // })
        setIsLoading(false)
      })
    } else {
      setShowErr({
        title : true,
        category : true, //"warranty" یا "other"
        priority : true, // "high" یا "normal"
        body : true,
      })
    }
    
  }

  const focusHandler = e => {
    if (e.target.name !== "checkbox") {
      setShowErr({ ...showErr, [e.target.name]: true })

    }
  }
  useEffect(() => {
    setErrors(Validation(data, 'tiket'))
    console.log(errors);
  } , [data])

  const changeHandler = (e) => {
    if (e.target.name === "file") {
      setData({
        ...data , [e.target.name] : e.target.files[0]
      })
      console.log("iiiiiiiiiiiiii");
    } if (e.target.name === "Priority") {
      setData({
        ...data , priority : e.target.value
      })
    } else if (e.target.name === "category") {
      setData({
        ...data , category : e.target.value
      })
    } else {
      setData({
        ...data , [e.target.name] : e.target.value
      })
    }
    console.log(data);
  }
  const fileHandler = (e) => {
    setData(prev => {
      return({
        ...prev ,
        [e.target.name] : e.target.files[0]
      })
    })
  }
  if (isLoading) return <Loader />
  if (userDatas && (userDatas.user.type === "expert" || userDatas.user.type === "genuine" || userDatas.user.type === "legal")) return (
    <div>
      
      <ToastContainer />
      {showReqs && <ViewReqsE setRequest_data={setRequest_data} close={setShowReqs} setData={setData} />}
      <div className=" py-6">
        <p className="text-xl font-extrabold">ثبت تیکت </p>
      </div>
      {
        data.request_id === null ? 
        <span class="sm:ml-3">
          <button onClick={() => setShowReqs(true)} type="button" class="inline-flex items-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
            انتخاب درخواست
          </button>
        </span> :
        <div className="flex">
          <span class="sm:ml-3">
            <button onClick={() => setShowReqs(true)} type="button" class="inline-flex items-center rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
              تغییر درخواست
            </button>
          </span>
          <span class="ml-3 sm:block">
            <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              شناسه درخواست : {request_data.request.shenaseh}
            </button>
          </span>
        </div>
      }
      <input
        onChange={changeHandler}
        onFocus={focusHandler}
        value={data.title}
        name="title"
        type="text"
        className="w-full mt-5 p-4 bg-transparent rounded-2xl border-0 border-b border-gray-400  outline-none "
        placeholder="عنوان تیکت"
      />
      {errors.title && showErr.title && <span style={{ color: '#e88f19' }}>{errors.title}</span>}
      <div className="flex flex-row  justify-normal w-full items-center m-3 text-center">
        <div style={{display : "flex" , flexDirection : "column" , alignContent:"flex-start"}}>

          <div className="flex 	items-center m-3 text-center">
            <p className="font-bold ">*خدمات:</p>
            <input
              type="radio"
              onChange={changeHandler}
              name="category"
              value="warranty"
              id=""
              className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
            />
            <p className="font-bold ">ضمانت نامه</p>
            <input
              type="radio"
              onChange={changeHandler}
              name="category"
              value="facilities"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
            />
            <p className="font-bold ">تسهیلات</p>
            <input
              type="radio"
              onChange={changeHandler}
              name="category"
              value="other"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
            />
            <p className="font-bold ">عمومی</p>
          </div>
          {errors.category && showErr.category && <span style={{ color: '#e88f19' }}>{errors.category}</span>}
        </div>
        <div style={{display : "flex" , flexDirection : "column"}}>
          <div className="flex items-center m-3 text-center">

            <p className="font-bold ">*اولویت:</p>
            <input
              type="radio"
              onChange={changeHandler}
              name="Priority"
              value="high"
              id=""
              className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
            />
            <p className="font-bold ">زیاد</p>
            <input
              type="radio"
              onChange={changeHandler}
              name="Priority"
              value="normal"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
            />
            <p className="font-bold ">متوسط</p>
            <input
              type="radio"
              onChange={changeHandler}
              name="Priority"
              value="low"
              id=""
              className="relative overflow-hidden mx-2 w-5 rounded h-full"
            />
            <p className="font-bold ">کم</p>
          </div>
          {errors.priority && showErr.priority && <span style={{ color: '#e88f19' }}>{errors.priority}</span>}
        </div>
      </div>
      <div className="relative">
        <textarea
          onChange={changeHandler}
          onFocus={focusHandler}
          value={data.body}
          name="body"
          placeholder="بدنه تیکت"
          id=""
          cols="30"
          rows="10"
          className="w-full p-4 bg-transparent rounded-2xl border border-gray-400  outline-none  "
        ></textarea>
        {errors.body && showErr.body && <span style={{ color: '#e88f19' }}>{errors.body}</span>}
        <p className="absolute text-gray-400 top-0 left-0 p-4">0/2000</p>
      </div>
      <div className="p-6 mt-3  bg-white rounded-xl">

      <div className="flex flex-col bg-c   justify-center items-center rounded-xl relative border-[3px] border-gray-300 border-dashed">
        <AiFillFolder className="text-3xl mt-2 text-blue-800" />
        <p className="text-sm my-2">فایل پر شده را بکشید و اینجا رها کنید</p>
        <div className="flex w-40 justify-center items-center">
          <hr className="w-full border-gray-400" />
          <p className="px-1">یا</p>
          <hr className="w-full border-gray-400"/>
        </div>
        {
          data.file === null ? 
          <p className="p-3 px-12 my-3 rounded-xl text-white bg-blue-800">
            انتخاب فایل
          </p>
          :
          <p className="p-3 px-12 my-3 rounded-xl text-white bg-blue-800">
            نام فایل : {data.file.name}
          </p>
        }
        <input
          type="file"
          name="file"
          onChange={fileHandler}
          id=""
          className="opacity-0 w-full h-full absolute top-0"
        />
      </div>
      </div>
      <button onClick={subHandler} className="p-3 w-full bg-blue-800 rounded-xl text-white my-3">ارسال تیکت</button>
    </div>
  );
}
