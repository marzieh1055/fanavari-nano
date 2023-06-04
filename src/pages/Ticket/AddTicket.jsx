import React, { useState } from "react";
import { AiFillFolder } from "react-icons/ai";
import Axios from '../../../axiosinstancs'

export default function AddTicket() {

  const formData = new FormData();
  const [data , setData] = useState({
    title : "",
    category : "", //"warranty" یا "other"
    priority : "", // "high" یا "normal"
    body : "",
    file : null,
  })
  const subHandler = () => {
    formData.append("title" , data.title)
    formData.append("category" , data.category)
    formData.append("priority" , data.priority)
    formData.append("body" , data.body)
    formData.append("file" , data.file)
    formData.append("id" , data.id)
    
    Axios.post("/api/v1/ticket" , formData )
    .then((respons) => console.log(respons))
    .catch((error) => console.log(error))
  }

  const changeHandler = (e) => {
    if (e.target.name === "file") {
      setData({
        ...data , [e.target.name] : e.target.files[0]
      })
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
  return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold">ثبت تیکت </p>
      </div>
      <input
        onChange={changeHandler}
        value={data.title}
        name="title"
        type="text"
        className="w-full p-4 bg-transparent rounded-2xl border-0 border-b border-gray-400  outline-none "
        placeholder="عنوان تیکت"
      />

      <div className="flex flex-row  justify-normal w-full items-center m-3 text-center">
        <div className="flex 	items-center m-3 text-center">
        <p className="font-bold ">خدمات:</p>
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
        <div className="flex w-28 items-center m-3 text-center">
        <p className="font-bold ">اولویت:</p>
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
      </div>
      <div className="relative">
        <textarea
          onChange={changeHandler}
          value={data.body}
          name="body"
          placeholder="عنوان تیکت"
          id=""
          cols="30"
          rows="10"
          className="w-full p-4 bg-transparent rounded-2xl border border-gray-400  outline-none  "
        ></textarea>
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
        <p className="p-3 px-12 my-3 rounded-xl text-white bg-blue-800">
          انتخاب فایل
        </p>
        <input
          onChange={changeHandler}
          type="file"
          name="file"
          id=""
          className="opacity-0 w-full h-full absolute top-0"
        />
      </div>
      </div>
      <button onClick={subHandler} className="p-3 w-full bg-blue-800 rounded-xl text-white my-3">ارسال تیکت</button>
    </div>
  );
}
