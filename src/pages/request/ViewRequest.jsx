import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export default function ViewRequest() {
  return (
    <div>
      <div className=" py-6">
        <p className="text-xl font-extrabold">مشاهده درخواست ها</p>
      </div>
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              1
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">تعهد نامه</p>
          </div>
          <div className="h-16">
            <div className="border-l border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              2
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">
              اطلاعات اولیه
            </p>
          </div>
          <div className="h-16">
            <div className="border-l border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              3
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">پایش اطلاعات</p>
          </div>
          <div className="h-16">
            <div className="border-l border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              4
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">پرسشنامه</p>
          </div>
          <div className="h-16">
            <div className="border-l border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              5
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">مشاوره</p>
          </div>
          <div className="h-16">
            <div className="border-l border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              6
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">ارزیابی</p>
          </div>
          <div className="h-16">
            <div className="border-l border-2 border-blue-800 h-full rounded"></div>
          </div>
          <div className="flex items-center">
            <p className="bg-blue-200 p-0.5 pt-1 px-3 rounded-xl text-blue-800 ">
              7
            </p>
            <p className="text-blue-800 font-bold mx-2 text-sm">
              نتیجه درخواست
            </p>
          </div>
        </div>
        <div className="w-3/6 px-6">
          <div className="flex flex-col bg-white rounded-xl p-6 h-1/2 mb-4">
            <p className="font-bold">مدارک اصلی</p>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <AiOutlineCheckCircle className="text-4xl text-green-500  my-2" />
              <p className="font-bold text-3xl">با موفقیت تکمیل شد ! </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-xl p-6 h-1/2 mt-">
            <p className="font-bold">اسناد</p>
            <div className="flex text-gray-500">
              <BiErrorCircle />
              <p className=" text-sm mx-2">حداکثر تعداد اسناد 5 عدد می باشد</p>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <AiOutlineCheckCircle className="text-4xl text-green-500  my-2" />
              <p className="font-bold text-3xl">با موفقیت تکمیل شد ! </p>
            </div>
          </div>
        </div>
        <div className="w-2/6 bg-white rounded-2xl px-6">
          <div className=" py-6 ">
            <p className="text-lg font-extrabold">کارشناس</p>
          </div>
          <div className="flex items-center">
            <img src="/./src/assets/imges/user.png" alt="" className="h-10" />
            <p className="px-3 font-bold text-gray-600">امیرحسین عابدی</p>
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">
              تهصیلات : دکتری حقوق
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">
              محل اقامت : شیراز
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">
              محل اقامت : شیراز
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">
              پست الکتریک : ranjbarmohad@gmail.com
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">سن : 29 سال</p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">سن : 29 سال</p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">شغل : طراح</p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2">
            <p className="font-bold py-3 text-xs text-gray-600">
              ملیت : ایرانی
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
          <div className="pt-2 pb-6">
            <p className="font-bold py-3 text-xs text-gray-600">
              ملیت : ایرانی
            </p>
            <hr className=" border-dashed border-2 border-gray-300 px-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
