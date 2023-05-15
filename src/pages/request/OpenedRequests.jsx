import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export default function OpenedRequests() {
  return (
    <div className="px-6">
      <div className=" py-6">
        <p className="text-xl font-extrabold"> درخواست های جاری</p>
      </div>
      <div className="flex flex-wrap ">
        <div className="p-3 w-1/3">
          <div className="bg-white rounded-xl p-4  ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="bg-blue-200 p-0.5 pt-1 px-2 rounded-lg text-blue-800 text-xs">
                  1
                </p>
                <p className="text-blue-800 font-bold mx-2 text-xs">
                  تایید کارشناس
                </p>
              </div>
              <p className="text-sm">1400/03/13</p>
            </div>
            <p className="font-bold text-sm pt-2 ">درخواست ضمانت نامه</p>
            <p className="font-bold text-xs text-gray-400 pb-2 ">
              شرگت باتیس سهامی عام
            </p>
            <img src="/./src/assets/imges/user.png" alt="" className="h-8" />
          </div>
        </div>
        <div className="p-3 w-1/3">
          <div className="bg-white rounded-xl p-4  ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="bg-green-200 p-0.5 pt-1 px-2 rounded-lg text-green-800 text-xs">
                  1
                </p>
                <p className="text-green-800 font-bold mx-2 text-xs">
                  مرحله 3 موفقیت آمیز بود
                </p>
              </div>
              <p className="text-sm">1400/03/13</p>
            </div>
            <p className="font-bold text-sm pt-2 ">درخواست ضمانت نامه</p>
            <p className="font-bold text-xs text-gray-400 pb-2 ">
              شرگت باتیس سهامی عام
            </p>
            <img src="/./src/assets/imges/user.png" alt="" className="h-8" />
          </div>
        </div>
        <div className="p-3 w-1/3">
          <div className="bg-white rounded-xl p-4  ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="bg-blue-200 p-0.5 pt-1 px-2 rounded-lg text-blue-800 text-xs">
                  1
                </p>
                <p className="text-blue-800 font-bold mx-2 text-xs">
                  تایید کارشناس
                </p>
              </div>
              <p className="text-sm">1400/03/13</p>
            </div>
            <p className="font-bold text-sm pt-2 ">درخواست ضمانت نامه</p>
            <p className="font-bold text-xs text-gray-400 pb-2 ">
              شرگت باتیس سهامی عام
            </p>
            <img src="/./src/assets/imges/user.png" alt="" className="h-8" />
          </div>
        </div>
        <div className="p-3 w-1/3">
          <div className="bg-white rounded-xl p-4  ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="bg-blue-200 p-0.5 pt-1 px-2 rounded-lg text-blue-800 text-xs">
                  1
                </p>
                <p className="text-blue-800 font-bold mx-2 text-xs">
                  تایید کارشناس
                </p>
              </div>
              <p className="text-sm">1400/03/13</p>
            </div>
            <p className="font-bold text-sm pt-2 ">درخواست ضمانت نامه</p>
            <p className="font-bold text-xs text-gray-400 pb-2 ">
              شرگت باتیس سهامی عام
            </p>
            <img src="/./src/assets/imges/user.png" alt="" className="h-8" />
          </div>
        </div>
        <div className="p-3 w-1/3">
          <div className="bg-white rounded-xl p-4  ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="bg-blue-200 p-0.5 pt-1 px-2 rounded-lg text-blue-800 text-xs">
                  1
                </p>
                <p className="text-blue-800 font-bold mx-2 text-xs">
                  تایید کارشناس
                </p>
              </div>
              <p className="text-sm">1400/03/13</p>
            </div>
            <p className="font-bold text-sm pt-2 ">درخواست ضمانت نامه</p>
            <p className="font-bold text-xs text-gray-400 pb-2 ">
              شرگت باتیس سهامی عام
            </p>
            <img src="/./src/assets/imges/user.png" alt="" className="h-8" />
          </div>
        </div>
      </div>
      <div className="flex h- max">
        <div className="px-2 h-60 w-1/2">
          <div className="flex flex-col bg-white rounded-xl p-6 h-full">
            <p className="font-bold">مدارک اصلی</p>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <AiOutlineCheckCircle className="text-4xl text-green-500  my-2" />
              <p className="font-bold text-3xl">با موفقیت تکمیل شد ! </p>
            </div>
          </div>
        </div>

        <div className="px-2 h-60 w-1/2">
          <div className="flex flex-col bg-white rounded-xl p-6 h-full ">
            <p className="font-bold">اسناد</p>
            <div className="flex text-gray-500">
              <BiErrorCircle />
              <p className=" text-sm mx-2">حداکثر تعداد اسناد 5 عدد می باشد</p>
            </div>
            <div className="flex flex-col w-full h-full items-center justify-center">
              <AiOutlineCheckCircle className="text-4xl text-green-500  my-2 " />
              <p className="font-bold text-3xl">با موفقیت تکمیل شد ! </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
