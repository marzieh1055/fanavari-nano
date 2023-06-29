import React, { useContext } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';

export default function S2Educational() {
    const {stepTwo, setStepTwo} = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepTwo(prevState => {
            const updated = prevState.educational.map((item, index) => {
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
              educational: updated
            };
          });
          console.log(stepTwo.educational[e.target.id]);
    }
  return (
    <>
        <div className=" py-6 mt-4">
            <p className="text-lg font-extrabold">
            سوابق تحصیلی، علمی، تخصصی و اجرایی مدیرعامل و اعضاء هیئت مدیره{" "}
            </p>
        </div>

        <div className=" ">
            <table className="w-full rounded-xl overflow-hidden">
            <thead>
                <tr className=" sticky top-0 text-sm border-b ">
                <th className="bg-white p-3  ">رديف </th>
                <th className="bg-white p-3  ">نام و نام خانوادگی </th>
                <th className="bg-white p-3  ">دانشگاه </th>
                <th className="bg-white p-3  ">رشته و مدرک تحصیلی </th>
                <th className="bg-white p-3  ">سمت در شرکت </th>
                </tr>
            </thead>
            <tbody>
                {stepTwo.educational.length > 0 &&
                stepTwo.educational.map((item, index) => (
                    <>
                    <tr className="bg-white  border-b">
                        <td className="p-4 text-xs text-gray-800 font-bold">
                        {index}
                        </td>

                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.educational[index].name}
                            name="name"
                            id={index}
                        />
                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.educational[index].university}
                            name="university"
                            id={index}
                        />
                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.educational[index].study}
                            name="study"
                            id={index}
                        />
                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.educational[index].position}
                            name="position"
                            id={index}
                        />
                        </td>
                    </tr>

                    <tr className="bg-white  border-b">
                        <td>سوابق:</td>
                        <td colSpan="5" className="p-2">
                        <textarea
                            className="w-full h-16 border border-gray-300 rounded-xl my -2"
                            onChange={changeHandler}
                            value={stepTwo.educational[index].records}
                            name="records"
                            id={index}
                            cols="30"
                            rows="10"
                        ></textarea>
                        </td>
                    </tr>
                    </>
                ))}

                <tr className="">
                <td className="bg-white" colSpan="9">
                    <button
                    className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                    onClick={() => {
                        setStepTwo(prev => (
                            {
                                ...prev ,
                                educational : [
                                    ...prev.educational,
                                    {
                                        name:"",
                                        university:"",
                                        study:"",
                                        position:"",
                                        records:""
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
