import React, { useState } from "react";

export default function ViewUsers() {
  const [isPerson, setIsPerson] = useState(true);
  return (
    <div>
      <div className="flex justify-between py-6">
        <p className="text-xl font-extrabold">مشاهده کاربران</p>
        <div className="flex bg-white rounded-xl">
          <button
            className={`${
              !isPerson && " bg-blue-600 text-white "
            } p-3 ml-4 rounded-xl`}
            onClick={() => {
              setIsPerson(!isPerson);
            }}
          >
            حقوقی
          </button>
          <button
            className={`${
              isPerson && " bg-blue-600 text-white "
            } rounded-xl p-3 `}
            onClick={() => {
              setIsPerson(!isPerson);
            }}
          >
            حقیقی
          </button>
        </div>
      </div>
      <div className="max-h-[60vh] overflow-y-scroll">
        {isPerson ? (
          <table className="w-full ">
            <thead>
              <tr className=" sticky top-0   ">
                <th className="bg-white p-3 rounded-r-xl ">نمایه </th>
                <th className="bg-white p-3 ">نام </th>
                <th className="bg-white p-3 ">نام خانوادگی</th>
                <th className="bg-white p-3 ">تاریخ ثبت نام کاربر </th>
                <th className="bg-white p-3 rounded-l-xl">اعمال </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="">
                <td>
                  {" "}
                  <img
                    className="w-10"
                    src="/./src/assets/imges/user.png"
                    alt=""
                  />
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  امیر حسین
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">عابدی</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  1400/12/13
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  <div className="flex">
                    <button className="text-red-600 border-2 border-red-600 rounded-2xl p-2 ml-2">
                      حذف کاربر
                    </button>
                    <button className="text-blue-700 border rounded-2xl p-2 ">
                      اطلاعات بیشتر
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className="w-full ">
            <thead>
              <tr className=" sticky top-0   ">
                <th className="bg-white p-3 rounded-r-xl ">نام شرکت </th>
                <th className="bg-white p-3 ">نوع شخص حقوقی </th>
                <th className="bg-white p-3 ">نوع درخواست </th>
                <th className="bg-white p-3 ">نام ونام خانوادگی نماینده </th>
                <th className="bg-white p-3 rounded-l-xl">محل ثبت </th>
              </tr>
            </thead>
            <tbody>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
              <tr className="p-4 text-xs text-gray-400 font-bold">
                <td>باتیس سهامی عام</td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  مدیر عامل
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  ضمانتنامه
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">
                  اشکان ایران منش
                </td>
                <td className="p-4 text-xs text-gray-400 font-bold">شیراز</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
      <hr />
      <div className="flex justify-between py-4 text-gray-600 items-center">
        <div className="">نمایش 21-31 از 80 مورد</div>
        <div className="">
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {"<"}
          </button>
          <button className="text-gray-800 text-lg font-bold mx-2">6</button>
          <button className="text-gray-800 text-lg font-bold mx-2">5</button>
          <button className="text-gray-800 text-lg font-bold mx-2">4</button>
          <button className="text-gray-800 text-lg font-bold mx-2">3</button>
          <button className="text-gray-800 text-lg font-bold mx-2">2</button>
          <button className="text-gray-800 text-lg font-bold mx-2">1</button>
          <button className="text-gray-800 text-2xl font-bold mx-2">
            {" "}
            {">"}{" "}
          </button>
        </div>
        <div className="flex">
          <select
            dir="ltr"
            name=""
            id=""
            className="rounded outline-none w-20 text-gray-800 border ml-4"
          >
            <option value="10">10</option>
            <option value="10">15</option>
            <option value="10">20</option>
          </select>
          <p>تعداد کاربر در هر صفحه</p>
        </div>
      </div>
    </div>
  );
}
