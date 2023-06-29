import React, { useContext, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';
export default function S4Activewarranty() {

    const { stepFour, setStepFour } = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepFour(prevState => {
            const updatedPlaces = prevState.active_warranty.map((item, index) => {
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
                active_warranty: updatedPlaces
            };
        });
        console.log(stepFour.active_warranty[e.target.id]);
    }
    return (
        <>
            <div className=" py-6 mt-4">
                <p className="text-lg font-extrabold">
                    فهرست ضمانتنامه فعال شرکت - فهرست ضمانتنامه باطل شده (3 سال اخیر){" "}
                </p>
            </div>

            <div className=" ">
                <table className="w-full rounded-xl overflow-hidden">
                    <thead>
                        <tr className=" sticky top-0 text-xs border-b ">
                            <th className="bg-white p-3  ">رديف </th>

                            <th className="bg-white p-3  ">
                                نام بانک و شعبه/ نام صندوق و یا سایر مراکز ارائه دهنده تسهیلات{" "}
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
                        {stepFour.active_warranty.length > 0 &&
                            stepFour.active_warranty.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white  border-b">
                                        <td className="p-4 text-xs text-gray-800 font-bold">
                                            {index + 1}
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].name}
                                                name="name"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].amount}
                                                name="amount"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].subject}
                                                name="subject"
                                                id={index}
                                            />
                                        </td>

                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].institution}
                                                name="institution"
                                                id={index}
                                            />
                                        </td>

                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].type_w}
                                                name="type_w"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].type_collateral}
                                                name="type_collateral"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].deposit_amount}
                                                name="deposit_amount"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].received}
                                                name="received"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.active_warranty[index].due_date}
                                                name="due_date"
                                                id={index}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        {/* {activeTashilat.length > 0 &&
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
              ))} */}

                        <tr className="">
                            <td className="bg-white" colSpan="12">
                                <button
                                    className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                                    // onClick={() => {
                                    //     setActiveTashilat([...activeTashilat, "example"]);
                                    // }}
                                    onClick={() => {
                                        setStepFour(prev => (
                                            {
                                                ...prev,
                                                active_warranty: [
                                                    ...prev.active_warranty,
                                                    {
                                                        name: "",
                                                        amount: "",
                                                        subject: "",
                                                        institution: "",
                                                        type_w: "",
                                                        type_collateral: "",
                                                        deposit_amount: "",
                                                        received: "", //2022-10-10
                                                        due_date: ""  //2022-10-10
                                                    },
                                                ]
                                            }
                                        ));
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

        </>
    )
}
