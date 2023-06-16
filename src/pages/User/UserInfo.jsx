import React from "react";
import { RiPencilLine } from "react-icons/ri";
import user from "../../assets/imges/user.png"
export default function UserInfo() {
  return (
    <div className="bg-white rounded-2xl mt-6 p-6">
      <div className=" p-6">
        <p className="text-xl font-extrabold">اطلاعات کاربری</p>
      </div>
      <hr />
      <div className="">
        <div className="w-1/2 mx-auto">
          <div className="flex mt-6 items-center">
            <img src={user} alt="" className="w-16" />
            <div className=" pr-4">
              <p className="font-bold">عکس پروفایل</p>
              <p className="text-gray-500 text-xs">
                فرمت های jpg و png با حداکثر حجم 800kb
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">نام نام خانوادگی</p>
              <RiPencilLine className="mr-3"/>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="ثبت نشده"
              className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
            />
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">شماره تلفن</p>
              <RiPencilLine className="mr-3" />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="09924501564789191"
              className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
            />
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">ایمیل</p>
              <RiPencilLine className="mr-3" />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="ranjbarmohad@gmail.com"
              className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
            />
          </div>
          <div className="mt-6">
            <div className="flex">
              <p className="font-bold text-sm">کد ملی</p>
              <RiPencilLine className="mr-3" />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="0216548671589"
              className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
            />
          </div>
          <button className="rounded-xl p-3 px-8 mt-6 bg-blue-800 text-white text-sm ">ذخیره</button>
        </div>
      </div>
    </div>
  );
}
