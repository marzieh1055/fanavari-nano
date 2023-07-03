import React, { useContext } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';
import { DatePicker } from 'zaman';
export default function S2Boards() {
    const {stepTwo, setStepTwo} = useContext(TashilatContext)

    const changeHandler = (e) => {
        setStepTwo(prevState => {
            const updated = prevState.boards.map((item, index) => {
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
              boards: updated
            };
          });
          console.log(stepTwo.boards[e.target.id]);
    }
    const datechangeHandler = (e, InIndex , keyName) => {
        const day = e.value.getDate()
        const mouth = e.value.getMonth()
        const year = e.value.getFullYear()
        setStepTwo(prevState => {
          const updated = prevState.boards.map((item, index) => {
            if (index === parseInt(InIndex)) {
              if (keyName === "start") {
                return {
                  ...item,
                  start: `${year}-${mouth + 1}-${day}`
                };
              } else if (keyName === "birth_date") {
                return {
                  ...item,
                  birth_date: `${year}-${mouth + 1}-${day}`
                };
              }
            }
            return item;
          });
          return {
            ...prevState,
            boards: updated
          };
        });
        console.log(stepTwo);
      }
  return (
    <>
        <div className=" py-6 mt-4">
            <p className="text-lg font-extrabold">
                ترکیب اعضای هیئت مدیره
            </p>
        </div>

        <div className=" ">
            <table className="w-full rounded-xl overflow-hidden">
            <thead>
                <tr className=" sticky top-0 text-sm border-b ">
                <th className="bg-white p-3  ">رديف </th>
                <th className="bg-white p-3  ">نام و نام خانوادگی </th>
                <th className="bg-white p-3  ">نوع شخصیت </th>
                <th className="bg-white p-3  ">سمت </th>
                <th className="bg-white p-3  ">شماره ملی </th>
                <th className="bg-white p-3  ">تاریخ تولد </th>
                <th className="bg-white p-3  ">سطح تحصیلات </th>
                <th className="bg-white p-3  ">رشته تحصیلی </th>
                </tr>
            </thead>
            <tbody>
                {stepTwo.boards.length > 0 &&
                stepTwo.boards.map((item, index) => (
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
                            value={stepTwo.boards[index].name}
                            name="name"
                            id={index}
                        />
                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                            <select
                                onChange={changeHandler}
                                name="type"
                                id={index}
                                className="border-gray-300 rounded-xl w-32 text-xs"
                            >
                            <option value="genuine">حقیقی</option>
                            <option value="legal">حقوقی</option>
                            </select>
                        </td>
                        {/* <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.boards[index].type}
                            name="university"
                            id={index}
                        />
                        </td> */}
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.boards[index].position}
                            name="position"
                            id={index}
                        />
                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="number"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.boards[index].n_national}
                            name="n_national"
                            id={index}
                        />
                        </td>




                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <DatePicker
                            onChange={(e) => datechangeHandler(e, index , "birth_date")}
                            locale="fa"
                            placeholder="تاریخ را انتخاب کنید"
                            format="jYYYY/jMM/jDD"
                        />

                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.boards[index].education}
                            name="education"
                            id={index}
                        />
                        </td>
                        <td className="p-4 text-xs text-gray-600 font-bold">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-xl w-full"
                            onChange={changeHandler}
                            value={stepTwo.boards[index].study}
                            name="study"
                            id={index}
                        />
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
                                boards : [
                                    ...prev.boards,
                                    { 
                                        name:"", 
                                        type:"", 
                                        position:"", 
                                        n_national:"", 
                                        birth_date:"", 
                                        education:"", 
                                        study:"" 
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
