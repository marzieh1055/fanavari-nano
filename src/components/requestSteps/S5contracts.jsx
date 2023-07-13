import React, { useContext, useEffect, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';
import { DatePicker } from 'zaman';
export default function S5contracts() {

    const { stepFive, setStepFive } = useContext(TashilatContext)

    const changeHandler = (e) => {
      setStepFive(prevState => {
        const updated = prevState.contracts.map((item, index) => {
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
          contracts: updated
        };
      });
      console.log(stepFive);
    }
    const datechangeHandler = (e, InIndex , keyName) => {
      const day = e.value.getDate()
      const mouth = e.value.getMonth()
      const year = e.value.getFullYear()
      setStepFive(prevState => {
        const updated = prevState.contracts.map((item, index) => {
          if (index === parseInt(InIndex)) {
            if (keyName === "start") {
              return {
                ...item,
                start: `${year}-${mouth + 1}-${day}`
              };
            } else if (keyName === "end") {
              return {
                ...item,
                end: `${year}-${mouth + 1}-${day}`
              };
            }
          }
          return item;
        });
        return {
          ...prevState,
          contracts: updated
        };
      });
      console.log(stepFive);
    }

  return (
    <>
           {/* contracts */}
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          فهرست قراردادهای شاخص شرکت (3 سال گذشته)            </p>
      </div>
      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3 text-center ">رديف </th>
              <th className="bg-white p-3 text-center ">موضوع قرارداد</th>
              <th className="bg-white p-3 text-center ">نام کارفرما</th>
              <th className="bg-white p-3 text-center ">مبلغ(میلیون ریال)</th>
              <th className="bg-white p-3 text-center ">تاریخ شروع</th>
              <th className="bg-white p-3 text-center ">تاریخ پایان</th>
              <th className="bg-white p-3 text-center ">درصد پیشرفت</th>
            </tr>
          </thead>
          <tbody>
            {stepFive.contracts.length > 0 &&
              stepFive.contracts.map((item, index) => (
                <>
                  <tr className="bg-white  border-b">
                    <td className="p-4 text-xs text-gray-800 font-bold">
                      {index}
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-20"
                        onChange={changeHandler}
                        value={stepFive.contracts[index].subject}
                        name="subject"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepFive.contracts[index].name}
                        name="name"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepFive.contracts[index].amount}
                        name="amount"
                        id={index}
                        placeholder='10'
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <DatePicker
                        onChange={(e) => datechangeHandler(e, index ,"start")}
                        locale="fa"
                        placeholder="تاریخ را انتخاب کنید"
                        format="jYYYY/jMM/jDD"
                      />

                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <DatePicker
                        onChange={(e) => datechangeHandler(e, index , "end")}
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
                        value={stepFive.contracts[index].progress}
                        name="progress"
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
                    setStepFive(prev => (
                      {
                        ...prev,
                        contracts: [
                          ...prev.contracts,
                          {
                            subject:"",
                            name:"",
                            amount:"",
                            start:"",
                            end:"",
                            progress:""
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
