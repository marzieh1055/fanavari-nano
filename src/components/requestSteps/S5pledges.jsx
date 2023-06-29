import React, { useContext, useEffect, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';

export default function S5pledges() {
    const { stepFive, setStepFive } = useContext(TashilatContext)

    const changeHandler = (e) => {
      setStepFive(prevState => {
        const updated = prevState.pledges.map((item, index) => {
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
          pledges: updated
        };
      });
      console.log(stepFive);
    }
  return (
    <>
              <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
        وثایق قابل‌ارائه        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3 text-center ">رديف </th>
              <th className="bg-white p-3 text-center ">نوع وثیقه</th>
              <th className="bg-white p-3 text-center ">ارزش وثیقه/ مشخصات ضامن</th>
              <th className="bg-white p-3 text-center ">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {stepFive.pledges.length > 0 &&
              stepFive.pledges.map((item, index) => (
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
                        value={stepFive.pledges[index].type}
                        name="type"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepFive.pledges[index].cost}
                        name="cost"
                        id={index}
                      />
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepFive.pledges[index].description}
                        name="description"
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
                        pledges: [
                          ...prev.pledges,
                          {
                            type:"",
                            cost:"",
                            description:""
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
