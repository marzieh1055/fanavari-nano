import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Four() {
  const [banks, setBanks] = useState([]);
  const [activeTashilat, setActiveTashilat] = useState([]);
  const [garantyList, setGarantyList] = useState([]);

  return (
    <>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          بانکها / نهادهای مالی اصلی شرکت / فرد:{" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">بانک/ نهاد مالی </th>
              <th className="bg-white p-3  ">شعبه </th>
              <th className="bg-white p-3  ">شماره حساب </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold">1</td>

              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
            </tr>
            {banks.length > 0 &&
              banks.map((item, index) => (
                <tr key={index} className="bg-white  border-b">
                  <td className="p-2 text-xs text-gray-800 font-bold">
                    {index + 2}
                  </td>

                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                </tr>
              ))}
            <tr className="">
              <td className="bg-white" colSpan="12">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setBanks([...banks, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          فهرست تسهیلات فعال شرکت - فهرست تسهیلات تسویه شده (3 سال اخیر){" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">سال دریافت </th>
              <th className="bg-white p-3  ">
                نام بانک و شعبه/ نام صندوق و یا سایر مراکز ارائه دهنده تسهیلات{" "}
              </th>
              <th className="bg-white p-3  ">
                مبلغ تسهیلات دریافتی (میلیون ریال){" "}
              </th>
              <th className="bg-white p-3  ">
                نوع تسهیلات (جعاله، مضاربه) و...{" "}
              </th>
              <th className="bg-white p-3  ">نرخ تسهیلات </th>
              <th className="bg-white p-3  ">نوع وثیقه </th>
              <th className="bg-white p-3  ">تعداد اقساط بازپرداخت شده </th>
              <th className="bg-white p-3  ">تعداد اقساط باقیمانده </th>
              <th className="bg-white p-3  ">مبلغ هر قسط </th>
              <th className="bg-white p-3  ">مانده تسهیلات </th>
              <th className="bg-white p-3  ">زمان تسویه حساب نهایی </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold">1</td>

              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>

              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>

              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
            </tr>
            {activeTashilat.length > 0 &&
              activeTashilat.map((item, index) => (
                <tr key={index} className="bg-white  border-b">
                  <td className="p-2 text-xs text-gray-800 font-bold">
                    {index + 2}
                  </td>

                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>

                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>

                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                </tr>
              ))}

            <tr className="">
              <td className="bg-white" colSpan="12">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setActiveTashilat([...activeTashilat, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          فهرست ضمانت نامه فعال و باطل شده شرکت( 3 سال اخیر){" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  ">رديف </th>

              <th className="bg-white p-3  ">
                ام بانک و شعبه/ نام صندوق و یا سایر مراکز ارائه دهنده تسهیالت{" "}
              </th>
              <th className="bg-white p-3  ">
                مبلغ ضمانتنامه دریافتی(میلیون ریال){" "}
              </th>
              <th className="bg-white p-3  ">موضوع قرارداد </th>
              <th className="bg-white p-3  ">نهاد دریافت کننده ضمانتنامه </th>
              <th className="bg-white p-3  ">نوع ضمانت نامه </th>
              <th className="bg-white p-3  ">
                نوع وثیقه سپرده شده جهت دریافت ضمانت نامه{" "}
              </th>
              <th className="bg-white p-3  ">
                میزان ودیعه سپرده شده جهت دریافت ضمانت نامه{" "}
              </th>
              <th className="bg-white p-3  ">تاریخ اخذ </th>
              <th className="bg-white p-3  ">تاریخ سررسید نهایی </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold">1</td>

              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>

              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-2 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
            </tr>
            {garantyList.length > 0 &&
              garantyList.map((item, index) => (
                <tr className="bg-white  border-b">
                  <td className="p-2 text-xs text-gray-800 font-bold">1</td>

                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>

                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                  <td className="p-2 text-xs text-gray-600 font-bold">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-xl w-full"
                    />
                  </td>
                </tr>
              ))}

            <tr className="">
              <td className="bg-white" colSpan="12">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setGarantyList([...garantyList, "example"]);
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          صورت حساب سود و زیان (ارقام به میلیون ریال){" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  " rowSpan={2}>
                شرح حساب{" "}
              </th>

              <th className="bg-white p-3  " rowSpan={2}>
                منتهی به تاریخ{" "}
              </th>
              <th className="bg-white p-3  ">آخرین تراز آزمایشی سال 1402</th>
              <th className="bg-white p-3  ">سال 1401 </th>
              <th className="bg-white p-3  "> سال 1400 </th>
              <th className="bg-white p-3  "> سال 1399 </th>

            </tr>
            <tr className=" sticky top-0 text-xs border-b ">
              <th className="bg-white p-3  ">مقدار قید شود </th>
              <th className="bg-white p-3  ">مقدار قید شود </th>
              <th className="bg-white p-3  ">مقدار قید شود </th>
              <th className="bg-white p-3  ">مقدار قید شود </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
                فروش خالص و درآمد ارائه خدمات و سایر درآمدها
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
                بهای تمام شده کاالی فروش رفته و خدمات
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
              <td className="p-2 text-xs text-gray-800 font-bold " colSpan={2}>
                سود ناخالص
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
                هزینه های فروش، اداری و عمومی
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
                سایر هزینه های عملیاتی
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
                سود عملیاتی
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
                هزینه های مالی
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
                هزینه های غیرعملیاتی
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
                درآمدهای غیرعملیاتی
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
                سود قبل از مالیات
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
                مالیات بر درآمد
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
                سود خالص
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
                سایر تعدیالت
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
                سود و زیان انباشته
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
              <td className="p-2">
                <textarea
                  className="w-full h-12 border border-gray-300 rounded-xl my -2"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </td>
            </tr>

            {/* <tr className="">
              <td className="bg-white" colSpan="12">
                <button className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2">
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <Link to="/panel/Tashilat/5">
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
      </Link>
    </>
  );
}
