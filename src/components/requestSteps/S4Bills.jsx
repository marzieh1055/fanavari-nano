import React, { useContext, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';
export default function S4Bills() {

    const { stepFour, setStepFour } = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepFour(prevState => {
            const updatedPlaces = prevState.bills.map((item, index) => {
                if (index === parseInt(e.target.id)) {
                    return {
                        ...item,
                        [e.target.name]: e.target.value
                    };
                }
                return item;
            });
            return {
                ...prevState,
                bills: updatedPlaces
            };
        });
        console.log(stepFour.bills[e.target.id]);
    }
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
                        {stepFour.banks.length > 0 &&
                            stepFour.banks.map((item, index) => {
                                return (
                                    <>

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
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
