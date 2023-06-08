import React from "react";
import { Link } from "react-router-dom";

export default function Five() {
  return (
    <>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          صورت حساب سود و زیان (ارقام به میلیون ریال){" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-white  border-b">
              <th
                className="p-2 text-lg text-gray-800 font-bold text-center"
                colSpan={5}
              >
                دارایی ها
              </th>
            </tr>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  " rowSpan={2}>
                شرح حساب{" "}
              </th>

              <th className="bg-white p-3  " rowSpan={2}>
                منتهی به تاریخ{" "}
              </th>
              <th className="bg-white p-3  ">آخرین تراز آزمایشی </th>
              <th className="bg-white p-3  ">سال گذشته </th>
              <th className="bg-white p-3  ">دو سال گذشته </th>
            </tr>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  ">تاریخ قید شود </th>
              <th className="bg-white p-3  ">تاریخ قید شود </th>
              <th className="bg-white p-3  ">تاریخ قید شود </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                موجودی نقد و بانک{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سرمایهگذاری های کوتاه مدت{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold " colSpan={2}>
                اسناد و حسابهای دریافتنی{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سایر اسناد و حسابهای دریافتنی{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                موجودی کالا
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                پیش پرداختها
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سایر دارایی های جاری + جاری شرکا
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع دارایی های جاری{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                دارایی های ثابت مشهود
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                دارایی های ثابت نامشهود
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سرمایهگذاری ها و مشارکت های بلندمدت
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سایر دارایی های غیر جاری
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع دارایی های ثابت
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع کل دارایی ها
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-white  border-b">
              <th
                className="p-2 text-lg text-gray-800 font-bold text-center"
                colSpan={5}
              >
                بدهی ها
              </th>
            </tr>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  " rowSpan={2}>
                شرح حساب{" "}
              </th>

              <th className="bg-white p-3  " rowSpan={2}>
                منتهی به تاریخ{" "}
              </th>
              <th className="bg-white p-3  ">آخرین تراز آزمایشی </th>
              <th className="bg-white p-3  ">سال گذشته </th>
              <th className="bg-white p-3  ">دو سال گذشته </th>
            </tr>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  ">تاریخ قید شود </th>
              <th className="bg-white p-3  ">تاریخ قید شود </th>
              <th className="bg-white p-3  ">تاریخ قید شود </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                اسناد و حسابهای پرداختنی{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سایر اسناد و حساب های پرداختنی{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold " colSpan={2}>
                تسهیلات کوتاه مدت{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                پیش دریافتها{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سایر بدهی های جاری{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع بدهی های جاری{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                بدهی های بلندمدت{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جاری شرکا{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع کل بدهی ها
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                اندوخته و ذخایر{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سرمایه{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                سود و زیان انباشته{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع حقوق صاحبان سهام{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
            <tr className="bg-gray-50  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                جمع کل بدهی ها و حقوق صاحبان سهام{" "}
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/panel/Tashilat/confirm">
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
      </Link>
    </>
  );
}
