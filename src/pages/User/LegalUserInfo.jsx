import React from "react";
import { RiPencilFill } from "react-icons/ri";
import user from "../../assets/imges/user.png"
export default function LegalUserInfo() {
  return (
    <div className="bg-white rounded-2xl mt-6 p-6">
      <div className=" p-6">
        <p className="text-xl font-extrabold">اطلاعات کاربر حقوقی </p>
      </div>
      <hr />
      <div className="flex mt-6 items-center">
        <img src={user} alt="" className="w-16" />
        <div className=" pr-4">
          <p className="font-bold">باتیس سهامی عام</p>
          <p className="text-gray-500 text-xs">عکس پروفایل </p>
        </div>

      </div>
      <div className="flex flex-wrap">
        <div className="relative mt-3 w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">نام شرکت</p>
          <input
            type="text"
            placeholder="باتیس سهامی عام"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5">
            <RiPencilFill />
          </div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">محل ثبت</p>
          <input
            type="text"
            placeholder="فارس / شیراز / ..."
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5">
            
          </div>
        </div>
        <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">نوع شخصیت حقوقی</p>
          <input
            type="text"
            placeholder="مدیر عامل"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5">
          <RiPencilFill />
          </div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">شناسه ملی</p>
          <input
            type="text"
            placeholder="024165058410"
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5"></div>
        </div>
        <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">تاریخ تاسیس</p>
          <input
            type="text"
            placeholder="1401/2/13"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5"></div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">دارندگان حق امضا</p>
          <input
            type="text"
            placeholder="پریا رامین فر / پریا رامین فر "
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5"></div>
        </div>
        <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">سرمایه اولیه(ریال)</p>
          <input
            type="text"
            placeholder="321514687/97"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5"></div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">سرمایه فعلی(ریال)</p>
          <input
            type="text"
            placeholder="316554941634"
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5"></div>
        </div>
        <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">موضوع فعالیت</p>
          <input
            type="text"
            placeholder="نانو تکنولوژی"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5"></div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">نام و نام خانوادگی نماینده شرکت</p>
          <input
            type="text"
            placeholder="روشانا بابایی"
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5"></div>
        </div>
        <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">تلفن همراه</p>
          <input
            type="text"
            placeholder="0317416784319"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5"></div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">تلفن ثابت</p>
          <input
            type="text"
            placeholder="32549464"
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5"></div>
        </div>
        <div className="mt-3 relative w-80 border rounded-2xl p-2 overflow-hidden  h-16 ">
          <p className="font-bold text-xs">پست الکتریک</p>
          <input
            type="text"
            placeholder="bbb@gmail.com"
            className="outline-none placeholder:text-xs border-0 w-full"
          />
          <div className="absolute top-7 left-5"></div>
        </div>{" "}
        <div className="mt-3 relative w-80 border rounded-2xl mx-3 p-2 overflow-hidden h-16">
          <p className="font-bold text-xs">وب سایت</p>
          <input
            type="text"
            placeholder="bbb@gmail.com"
            className="outline-none placeholder:text-xs border-0 w-full   "
          />
          <div className="absolute top-7 left-5"></div>
        </div>
        <div className="py-3 ">
          <button className="w-80 p-3 px-10 bg-blue-800 text-white rounded-xl">
            حذف کاربر
          </button>
          <button className="w-80 p-3 px-10 border border-red-800 text-red-800 rounded-xl mr-3">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
}
