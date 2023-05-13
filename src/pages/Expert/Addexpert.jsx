import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import Expert from "../../components/Expert/Expert";

const Addexpert = () => {
  return (
    <div className="w-full max-w-c mx-auto bg-c flex p-6 gap-6">
      {/* Sidebar section */}
      <Sidebar />
      {/* Left section */}
      {/* Left section */}

      <section className="w-c-2 bg-c">
        <Topbar avatar="/src/assets/imges/user.png" />
            <form class="bg-white mx-4 rounded-xl p-3">
              <p class="text-xl font-bold p-4 py-6">اضافه کردن کارشناس</p>
              <hr class="border-dashed" />

              <div class="flex flex-wrap">
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">نام و نام خانوادگی</p>
                  <input
                    type="text"
                    placeholder="امیر حسین عابدی"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">محل صدور</p>
                  <input
                    type="text"
                    placeholder="فارس / شیراز / ..."
                    class="outline-none placeholder:text-sm"
                  />
                </div>

                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">پسوورد</p>
                  <input
                    type="text"
                    placeholder="12345678"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">سری و سریال شناسنامه</p>
                  <input
                    type="text"
                    placeholder="024165058410 / 306545605"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">نام پدر</p>
                  <input
                    type="text"
                    placeholder="امیر حسین عابدی"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">ملیت</p>
                  <input
                    type="text"
                    placeholder="ایرانی"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">کد ملی</p>
                  <input
                    type="text"
                    placeholder="0321514687/97"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">تاریخ تولد</p>
                  <input
                    type="text"
                    placeholder="00/11/13"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">شماره شناسنامه</p>
                  <input
                    type="text"
                    placeholder="0321514687/97"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">شغل</p>
                  <input
                    type="text"
                    placeholder="طراح"
                    class="outline-none placeholder:text-sm"
                  />
                </div>

                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">آدرس</p>
                  <input
                    type="text"
                    placeholder="فارس / شیراز / ..."
                    class="outline-none placeholder:text-sm"
                  />
                </div>
              </div>
              <div class="flex flex-wrap mx-4">
                <div class="flex w-96 items-center m-3">
                  <p class="font-bold text-sm">جنسیت:</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    class="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
                  />
                  <p class="font-bold text-sm">مرد</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    class="relative overflow-hidden mx-2 w-5 rounded h-full"
                  />
                  <p class="font-bold text-sm">زن</p>
                </div>
                <div class="flex w-96 items-center m-3">
                  <p class="font-bold text-sm">وضعیت تعهل:</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    class="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
                  />
                  <p class="font-bold text-sm">مجرد</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    class="relative overflow-hidden mx-2 w-5 rounded h-full"
                  />
                  <p class="font-bold text-sm">متاهل</p>
                </div>
                <div class="flex w-96 items-center m-3">
                  <p class="font-bold text-sm">وضعیت اقامت :</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    class="relative overflow-hidden mx-2 w-5 border rounded-full h-full"
                  />
                  <p class="font-bold text-sm">مقیم</p>
                  <input
                    type="radio"
                    name="gender"
                    id=""
                    class="relative overflow-hidden mx-2 w-5 rounded h-full"
                  />
                  <p class="font-bold text-sm">غیر مقیم</p>
                </div>
              </div>
              <div class="w-full">
                <p class="my-2">تحصیلات</p>
                <div class="my-4 relative border rounded-xl w-max overflow-hidden">
                  <select
                    name=""
                    id=""
                    class="relative w-96 pt-8 p-2 outline-none text-sm text-gray-500"
                  >
                    <option value="مهندسی برق" class="">مهندسی برق</option>
                  </select>
                  <p class="absolute top-0 px-4 text-sm font-semibold">رشته</p>
                </div>
                <div class="w-4/6">
                  <input type="range" name="" id="" class="w-full" />
                  <div class="flex justify-between">
                    <p class="text-sm font-bold">سیکل</p>
                    <p class="text-sm font-bold">دیپلم</p>
                    <p class="text-sm font-bold">کادانی</p>
                    <p class="text-sm font-bold">لیسانس</p>
                    <p class="text-sm font-bold">فوق لیسانس</p>
                    <p class="text-sm font-bold">دکتری</p>
                    <p class="text-sm font-bold">فوق دکتری</p>
                  </div>
                </div>
              </div>
              <p class="text-xl font-bold p-4 py-6">محل سکونت</p>
              <hr class="border-dashed" />

              <div class="flex flex-wrap">
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">آدرس</p>
                  <input
                    type="text"
                    placeholder="فارس / شیراز / ..."
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">کد پستی</p>
                  <input
                    type="text"
                    placeholder="4654651518948"
                    class="outline-none placeholder:text-sm"
                  />
                </div>

                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">تلفن همراه</p>
                  <input
                    type="text"
                    placeholder="03298748978"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">تلفن</p>
                  <input
                    type="text"
                    placeholder=""
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">نمابر</p>
                  <input
                    type="text"
                    placeholder=""
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">پست الکترونیک</p>
                  <input
                    type="text"
                    placeholder="rangbarmohad@gmail.com"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">آدرس محل کار</p>
                  <input
                    type="text"
                    placeholder="فارس / شیراز / ..."
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">کد پستی محل کار</p>
                  <input
                    type="text"
                    placeholder="03498180798"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl mx-3 p-2 overflow-hidden">
                  <p class="font-bold text-sm">تلفن محل کار</p>
                  <input
                    type="text"
                    placeholder="32498748978"
                    class="outline-none placeholder:text-sm"
                  />
                </div>
                <div class="mt-3 w-96 border rounded-2xl p-2 overflow-hidden">
                  <p class="font-bold text-sm">نمابر محل کار</p>
                  <input
                    type="text"
                    placeholder=""
                    class="outline-none placeholder:text-sm"
                  />
                </div>
              </div>
              <div class="flex items-center">
                <p class="m-4 ">امضاء کارشناس</p>
                <img src="imges/emza.png" alt="" class="h-20 my-5" />
              </div>
              <div class="mx-4">
                <button
                  class="p-3 py-2 text-white bg-blue-700 border border-blue-700 rounded-lg"
                >
                  اضافه کردن
                </button>
                <button
                  class="p-3 py-2 text-red-500 border-2 border-red-500 rounded-lg mx-1"
                >
                  حذف کارشناس
                </button>
              </div>
            </form>
      </section>
    </div>
  );
};

export default Addexpert;
