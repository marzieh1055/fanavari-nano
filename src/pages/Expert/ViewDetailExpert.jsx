import React from "react";

const ViewDetailExpert = ({details , close}) => {
  return (
    <form className="bg-white rounded-3xl mt-3 p-3">
      <div style={{display:"flex" , justifyContent:"space-between"}}>
        <p className="text-xl font-bold p-4 py-6">اطلاعات کاربر</p>
        <span onClick={() => close(false)} className="text-xl p-4 py-6" style={{fontSize:"15px" , cursor:"pointer"}}>بازگشت</span>
      </div>

      <hr className="border-dashed" />

      <div className="flex flex-wrap">
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام و نام خانوادگی</p>
          <input
            type="text"
            placeholder={`${details.name} ${details.family}`}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">محل صدور</p>
          <input
            type="text"
            placeholder="فارس / شیراز / ..."
            className="outline-none border-none placeholder:text-sm"
          />
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">پسوورد</p>
          <input
            type="text"
            placeholder="12345678"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">سری و سریال شناسنامه</p>
          <input
            type="text"
            placeholder={details.national_code}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نام پدر</p>
          <input
            type="text"
            placeholder="امیر حسین عابدی"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">ملیت</p>
          <input
            type="text"
            placeholder="ایرانی"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">کد ملی</p>
          <input
            type="text"
            placeholder={details.national_code}
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">تاریخ تولد</p>
          <input
            type="text"
            placeholder="00/11/13"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">شماره شناسنامه</p>
          <input
            type="text"
            placeholder="0321514687/97"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">شغل</p>
          <input
            type="text"
            placeholder="طراح"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">آدرس</p>
          <input
            type="text"
            placeholder="فارس / شیراز / ..."
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-4">
        <div className="flex w-96 items-center m-3">
          <p className="font-bold text-sm">جنسیت:</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
          />
          <p className="font-bold text-sm">مرد</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 rounded h-full"
          />
          <p className="font-bold text-sm">زن</p>
        </div>
        <div className="flex w-96 items-center m-3">
          <p className="font-bold text-sm">وضعیت تعهل:</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
          />
          <p className="font-bold text-sm">مجرد</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 rounded h-full"
          />
          <p className="font-bold text-sm">متاهل</p>
        </div>
        <div className="flex w-96 items-center m-3">
          <p className="font-bold text-sm">وضعیت اقامت :</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
          />
          <p className="font-bold text-sm">مقیم</p>
          <input
            type="radio"
            name="gender"
            id=""
            className="relative overflow-hidden mx-2 w-5 rounded h-full"
          />
          <p className="font-bold text-sm">غیر مقیم</p>
        </div>
      </div>
      <div className="w-full">
        <p className="my-2">تحصیلات</p>
        <div className="my-4 relative border rounded-xl w-max overflow-hidden">
          <select
            name=""
            id=""
            className="relative w-96 pt-5 p-2 outline-none text-sm text-gray-500"
          >
            <option value="مهندسی برق" className="">
              مهندسی برق
            </option>
          </select>
          <p className="absolute top-0 pt-1 px-4 text-sm font-semibold">رشته</p>
        </div>
        <div className="w-4/6">
          <input type="range" name="" id="" className="w-full" />
          <div className="flex justify-between">
            <p className="text-sm font-bold">سیکل</p>
            <p className="text-sm font-bold">دیپلم</p>
            <p className="text-sm font-bold">کادانی</p>
            <p className="text-sm font-bold">لیسانس</p>
            <p className="text-sm font-bold">فوق لیسانس</p>
            <p className="text-sm font-bold">دکتری</p>
            <p className="text-sm font-bold">فوق دکتری</p>
          </div>
        </div>
      </div>
      <p className="text-xl font-bold p-4 py-6">محل سکونت</p>
      <hr className="border-dashed" />

      <div className="flex flex-wrap">
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">آدرس</p>
          <input
            type="text"
            placeholder="فارس / شیراز / ..."
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">کد پستی</p>
          <input
            type="text"
            placeholder="4654651518948"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>

        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن همراه</p>
          <input
            type="text"
            placeholder="03298748978"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن</p>
          <input
            type="text"
            placeholder=""
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">نمابر</p>
          <input
            type="text"
            placeholder=""
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">پست الکترونیک</p>
          <input
            type="text"
            placeholder="rangbarmohad@gmail.com"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">آدرس محل کار</p>
          <input
            type="text"
            placeholder="فارس / شیراز / ..."
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">کد پستی محل کار</p>
          <input
            type="text"
            placeholder="03498180798"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
          <p className="font-bold text-sm">تلفن محل کار</p>
          <input
            type="text"
            placeholder="32498748978"
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
        <div className="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
          <p className="font-bold text-sm">نمابر محل کار</p>
          <input
            type="text"
            placeholder=""
            className="outline-none border-none placeholder:text-sm"
          />
        </div>
      </div>
      <div className="flex items-center">
        <p className="m-4 ">امضاء کارشناس</p>
        <img
          src="/./src/assets/imges/Expert/emza.png"
          alt=""
          className="h-20 my-5"
        />
      </div>
      <div className="mx-4">
        <button className="p-3 py-2 text-white bg-blue-700 border border-blue-700 rounded-lg">
          اضافه کردن
        </button>
        <button className="p-3 py-2 text-red-500 border-2 border-red-500 rounded-lg mx-1">
          حذف کارشناس
        </button>
      </div>
    </form>
  );
};

export default ViewDetailExpert;
