import React, { useContext, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';

export default function S2TarkibSahamdaran() {
   const {stepTwo, setStepTwo} = useContext(TashilatContext)

    const changeHandler = (e) => {
        setStepTwo(prevState => {
            const updatedPlaces = prevState.shareholders.map((item, index) => {
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
              shareholders: updatedPlaces
            };
          });
          console.log(stepTwo.shareholders[e.target.id]);
    }
  return (
    <>
        <div className=" py-6 mt-4">
            <p className="text-lg font-extrabold">ترکیب سهامداران </p>
        </div>

        <div className=" ">
            <table className="w-full rounded-xl overflow-hidden">
            <thead>
                <tr className=" sticky top-0 text-sm border-b ">
                <th className="bg-white p-3  ">رديف </th>
                <th className="bg-white p-3  ">نام سهامدار </th>
                <th className="bg-white p-3  ">نوع شخصيت </th>
                <th className="bg-white p-3  ">شماره شناسنامه/ شماره ثبت </th>
                <th className="bg-white p-3  ">شماره ملي/ شناسه ي ملي </th>
                <th className="bg-white p-3  ">تعداد سهام </th>
                <th className="bg-white p-3  ">درصد سهام </th>
                <th className="bg-white p-3  ">ارزش سهام(ريال) </th>
                <th className="bg-white p-3  ">رشته و مدرک تحصیلی </th>
                </tr>
            </thead>
            <tbody>
                {stepTwo.shareholders.length > 0 &&
                    stepTwo.shareholders.map((item, index) => {
                        {console.log(index)}
                            return (
                                <tr key={index} className="bg-white  border-b">
                                <td className="p-4 text-xs text-gray-800 font-bold">
                                    {index}
                                </td>
                                {console.log(stepTwo.shareholders)}
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded-xl w-20"
                                        onChange={changeHandler}
                                        value={stepTwo.shareholders[index].name}
                                        name="name"
                                        id={index}   
                                    />
                                </td>
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <select
                                        onChange={changeHandler}
                                        name="type"
                                        id={index}
                                        className="border-gray-300 rounded-xl w-24 text-xs"
                                    >
                                    <option value="genuine">حقیقی</option>
                                    <option value="legal">حقوقی</option>
                                    </select>
                                </td>
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <div className="flex">
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-xl w-20"
                                        onChange={changeHandler}
                                        value={stepTwo.shareholders[index].n_certificate}
                                        name="n_certificate"
                                        id={index}
                                    />
                                    </div>
                                </td>
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <div className="flex">
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-xl w-20"
                                        onChange={changeHandler}
                                        value={stepTwo.shareholders[index].n_national}
                                        name="n_national"
                                        id={index}
                                    />
                                    </div>
                                </td>
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <div className="flex">
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-xl w-20"
                                        onChange={changeHandler}
                                        value={stepTwo.shareholders[index].count}
                                        name="count"
                                        id={index}
                                    />
                                    </div>
                                </td>
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <div className="flex">
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-xl w-20"
                                        onChange={changeHandler}
                                        value={stepTwo.shareholders[index].percent}
                                        name="percent"
                                        id={index}
                                    />
                                    </div>
                                </td>
                                <td className="p-4 text-xs text-gray-600 font-bold">
                                    <div className="flex">
                                    <input
                                        type="number"
                                        className="border border-gray-300 rounded-xl w-20"
                                        onChange={changeHandler}
                                        value={stepTwo.shareholders[index].cost}
                                        name="cost"
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
                                        value={stepTwo.shareholders[index].education}
                                        name="education"
                                        id={index}
                                    />
                                    </div>
                                </td>
                                </tr>
                            )
                    })
                }
                
            
                
                <tr className="bg-white  border-b">
                <td className="p-4 text-xs text-gray-800 font-bold" colSpan="5">
                    جمع کل :
                </td>
                <td className="p-4 text-sm text-gray-800 font-bold">10000</td>
                <td className="p-4 text-sm text-gray-800 font-bold">100%</td>
                <td className="p-4 text-sm text-gray-800 font-bold">3/199/000</td>
                <td className="p-4 text-sm text-gray-800 font-bold"></td>
                </tr>
                <tr className="">
                <td className="bg-white" colSpan="9">
                    <button
                    className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                    onClick={() => {
                        setStepTwo(prev => (
                            {
                                ...prev ,
                                shareholders : [
                                    ...prev.shareholders,
                                    {
                                        name:"",
                                        type:"genuine",
                                        n_certificate:"",
                                        n_national:"",
                                        count:"1",
                                        percent:"1",
                                        cost:"1",
                                        education:""
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
