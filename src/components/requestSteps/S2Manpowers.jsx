import React, { useContext } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';

export default function S2Manpowers() {
    const {stepTwo, setStepTwo} = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepTwo(prevState => {
            const updated = prevState.manpowers.map((item, index) => {
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
              manpowers: updated
            };
          });
          console.log(stepTwo.manpowers[e.target.id]);
    }
  return (
    <>
        <div className=" py-6 mt-4">
            <p className="text-lg font-extrabold">مشخصات نیروی انساني شرکت </p>
            <p className="text-sm font-bold mt-2 text-gray-600">
            خالصه رزومه افراد کلیدی شرکت به شرح زیر است:{" "}
            </p>
        </div>
        <div className=" ">
            <table className="w-full rounded-xl overflow-hidden">
            <thead>
                <tr className=" sticky top-0 text-sm border-b ">
                <th className="bg-white p-3  ">رديف </th>
                <th className="bg-white p-3  ">نام و نام خانوادگي</th>
                <th className="bg-white p-3  ">سمت</th>
                <th className="bg-white p-3  ">سطح تحصيالات</th>
                <th className="bg-white p-3  ">رشته تحصيلي</th>
                <th className="bg-white p-3  ">نوع قرارداد </th>
                <th className="bg-white p-3  ">سابقه کار مرتبط (سال)</th>
                <th className="bg-white p-3  ">اهم سوابق کاري</th>
                </tr>
            </thead>
            <tbody>
                {stepTwo.manpowers.length > 0 &&
                stepTwo.manpowers.map((item, index) => (
                    <tr className="bg-white  border-b">
                    <td
                        key={index}
                        className="p-4 text-xs text-gray-800 font-bold"
                    >
                        {index}
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-20"
                            onChange={changeHandler}
                            value={stepTwo.manpowers[index].name}
                            name="name"
                            id={index}
                        />
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <div className="flex">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-20"
                            onChange={changeHandler}
                            value={stepTwo.manpowers[index].position}
                            name="position"
                            id={index}
                        />
                        </div>
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <div className="flex">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-20"
                            onChange={changeHandler}
                            value={stepTwo.manpowers[index].level_education}
                            name="level_education"
                            id={index}
                        />
                        </div>
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <div className="flex">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-20"
                            onChange={changeHandler}
                            value={stepTwo.manpowers[index].study}
                            name="study"
                            id={index}
                        />
                        </div>
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <select
                            onChange={changeHandler}
                            name="type_contract"
                            id={index}
                            className="border-gray-300 rounded-xl w-32 text-xs"
                        >
                        <option value="full">تمام وقت </option>
                        <option value="حقوقی">پاره وقت</option>
                        </select>
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <div className="flex">
                        <input
                            type="number"
                            className="border border-gray-300 rounded-xl w-20"
                            onChange={changeHandler}
                            value={stepTwo.manpowers[index].work_experience}
                            name="work_experience"
                            id={index}
                        />
                        </div>
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                        <div className="flex">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-20"
                            onChange={changeHandler}
                            value={stepTwo.manpowers[index].important}
                            name="important"
                            id={index}
                        />
                        </div>
                    </td>
                    </tr>
                ))}
                <tr className="">
                <td className="bg-white" colSpan="8">
                    <button
                    className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                    onClick={() => {
                        setStepTwo(prev => (
                            {
                                ...prev ,
                                manpowers : [
                                    ...prev.manpowers,
                                    {
                                        name:"",
                                        position:"",
                                        level_education:"",
                                        study:"",
                                        type_contract:"full",
                                        work_experience:"",
                                        important:""
                                    }
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
