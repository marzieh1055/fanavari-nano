import React, { useContext } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';

export default function S2Residences() {
    const {stepTwo, setStepTwo} = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepTwo(prevState => {
            const updated = prevState.residences.map((item, index) => {
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
              residences: updated
            };
          });
          console.log(stepTwo.residences[e.target.id]);
    }
  return (
    <>
        <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          آدرس محل سكونت اعضای هیئت مدیره فعلي شرکت :{" "}
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden text-center">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3  ">رديف </th>
              <th className="bg-white p-3  ">نام و نام خانوادگي</th>
              <th className="bg-white p-3  ">سمت </th>
              <th className="bg-white p-3  ">نشاني محل سکونت</th>
            </tr>
          </thead>
          <tbody>
            {stepTwo.residences.length > 0 &&
              stepTwo.residences.map((item, index) => (
                <tr className="bg-white  border-b">
                  <td className="p-4 text-xs text-gray-800 font-bold">
                    {index}
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-28"
                        onChange={changeHandler}
                        value={stepTwo.residences[index].name}
                        name="name"
                        id={index}
                    />
                  </td>

                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-28 text-left"
                        onChange={changeHandler}
                        value={stepTwo.residences[index].position}
                        name="position"
                        id={index}
                    />
                  </td>
                  <td className="p-4 text-xs text-gray-600 font-bold">
                    <div className="flex">
                      <textarea
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepTwo.residences[index].address}
                        name="address"
                        id={index}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            <tr className="">
              <td className="bg-white text-right" colSpan="4">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={() => {
                    setStepTwo(prev => (
                        {
                            ...prev ,
                            residences : [
                                ...prev.residences,
                                {
                                    name:"",
                                    position:"",
                                    address:""
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
