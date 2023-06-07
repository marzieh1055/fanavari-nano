import React from "react";
import { Link } from "react-router-dom";

export default function Three() {
  return (
    <>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          مشخصات محصوالت/ خدمات اصلی شرکت{" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام محصول/خدمت </th>
              <th className="bg-white p-3  ">مشتریان اصلی </th>
              <th className="bg-white p-3  ">مشخصات و کاربرد محصول/خدمت </th>
              <th className="bg-white p-3  ">رقبای اصلی در رابطه با محصول </th>
              <th className="bg-white p-3  ">
                میزان فروش یک سال گذشت (میلیون ریال){" "}
              </th>
              <th className="bg-white p-3  ">تأییدیه دانش بنیان؟ </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white  border-b">
              <td className="p-4 text-xs text-gray-800 font-bold">1</td>

              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold">
                <input
                  type="!"
                  className="border border-gray-300 rounded-xl w-full"
                />
              </td>
              <td className="p-4 text-xs text-gray-600 font-bold text-center">
                <input
                  type="checkbox"
                  className="border border-gray-300 rounded-xl "
                />
              </td>
            </tr>

            <tr className="">
              <td className="bg-white" colSpan="9">
                <button className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2">
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/panel/Tashilat/4">
        <div className=" text-left mt-2">
          <button className="bg-blue-700  text-white rounded-xl p-4 font-bold text-sm">
            مرحله بعد
          </button>
        </div>
      </Link>
    </>
  );
}
