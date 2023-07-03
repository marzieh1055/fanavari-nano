import React from "react";
import { RiPencilLine } from "react-icons/ri";
import user from "../../assets/imges/user.png"
export default function Changepass() {
    return (
        <div className="bg-white rounded-2xl mt-6 p-6">
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
                  id=""
                  className="border-0 rounded-xl bg-purple-50 outline-none mt-2 w-full"
                />
              </div>
              <button className="rounded-xl p-3 px-8 mt-6 bg-blue-800 text-white text-sm ">ذخیره</button>
            </div>
          </div>
        </div>
      );
}
