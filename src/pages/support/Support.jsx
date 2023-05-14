import React from "react";

export default function Support() {
  return (
    <div>
      <div className=" p-6">
        <p className="text-xl font-extrabold">پشتیبانی</p>
      </div>
      <div className="bg-white rounded-t-2xl p-6 shadow-xl z-10 ">
        <p className=" font-bold ">مشاهده تیکت #165496</p>
      </div>
      <div className="relative bg-white h-[60vh] overflow-y-auto rounded-b-2xl">
        <div className="sticky top-0 flex justify-center ">
          <p className="   border border-green-600 text-sm text-green-600 p-1 px-6 rounded-xl">
            امروز
          </p>
        </div>
        <div className=" bg-c w-2/5 m-4 p-4 rounded-2xl">
          <p className="text-sm">
            سلام وقت بخیر <br /> بکاپ خودکار گرفته میشه یا خودم باید بگیرم
          </p>
          <div className="flex justify-between mt-4 ">
            <p className="text-sm">9:32</p>
            <p className="text-sm">IP: 164.213549.789</p>
          </div>
        </div>
      <div className="absolute bottom-0 flex w-full p-5">
        <div className="relative w-4/5 pt-8 pb-3 rounded-2xl border bg-white px-2">
          <p className="absolute top-0 p-3">پیام خود را بنویسید...</p>
          <input
            type="text"
            className=" w-full  placeholder:text-xs placeholder:p-3 outline-none  "
            placeholder="برای تسریع در بارگذاری سعی کنید در یک قاب پیام خود را بنویسید"
          />
        </div>
        <button className="w-1/6 rounded-2xl mx-1 border border-green-600 text-green-600">پیوست </button>
        <button className="w-1/6 rounded-2xl mx-1 bg-blue-800 text-white">ارسال</button>
      </div>
      </div>
    </div>
  );
}
