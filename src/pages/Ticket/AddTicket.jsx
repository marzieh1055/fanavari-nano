import React from "react";
import { AiFillFolder } from "react-icons/ai";

export default function AddTicket() {
  return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold">ثبت تیکت </p>
      </div>
      <input
        type="text"
        className="w-full p-4 bg-transparent rounded-2xl border-0 border-b border-gray-400  outline-none "
        placeholder="عنوان تیکت"
      />

      <div className="flex w-96 items-center m-3 text-center">
        <p className="font-bold ">خدمات:</p>
        <input
          type="radio"
          name="khadamat"
          id=""
          className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
        />
        <p className="font-bold ">ضمانت نامه</p>
        <input
          type="radio"
          name="khadamat"
          id=""
          className="relative overflow-hidden mx-2 w-5 rounded h-full"
        />
        <p className="font-bold ">تحصیلات</p>
      </div>
      <div className="relative">
        <textarea
          placeholder="عنوان تیکت"
          name=""
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
          type="file"
          name=""
          id=""
          className="opacity-0 w-full h-full absolute top-0"
        />
      </div>
      </div>
      <button className="p-3 w-full bg-blue-800 rounded-xl text-white my-3">ارسال تیکت</button>
    </div>
  );
}
