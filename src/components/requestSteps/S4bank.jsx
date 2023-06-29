import React, { useContext, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';

export default function S4bank() {
    const { stepFour, setStepFour } = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepFour(prevState => {
            const updatedPlaces = prevState.banks.map((item, index) => {
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
                banks: updatedPlaces
            };
        });
        console.log(stepFour.banks[e.target.id]);
    }

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
                        {stepFour.banks.length > 0 &&
                            stepFour.banks.map((item, index) => {
                                return (
                                    <tr key={index} className="bg-white  border-b">
                                        <td className="p-4 text-xs text-gray-800 font-bold">
                                            {index+1}
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.banks[index].name}
                                                name="name"
                                                id={index}
                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.banks[index].branch                                                }
                                                name="branch"
                                                id={index}

                                            />
                                        </td>
                                        <td className="p-2 text-xs text-gray-600 font-bold">
                                            <input
                                                type="text"
                                                className="border border-gray-300 rounded-xl w-full"
                                                onChange={changeHandler}
                                                value={stepFour.banks[index].account_number}
                                                name="account_number"
                                                id={index}
                                            />
                                        </td>
                                    </tr>
                                )
                            })}


                        {/* {banks.length > 0 &&
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
                            ))} */}
                        <tr className="">
                            <td className="bg-white" colSpan="12">
                                <button
                                    className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                                    // onClick={() => {
                                    //     setBanks([...banks, "example"]);
                                    // }}
                                    onClick={() => {
                                        setStepFour(prev => (
                                            {
                                                ...prev ,
                                                banks : [
                                                    ...prev.banks,
                                                    {
                                                        name:"",
                                                        branch:"",
                                                        account_number:""
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
