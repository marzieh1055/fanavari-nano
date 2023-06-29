import React, { useContext } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';
import { DatePicker } from 'zaman';

export default function S5Approvals() {
  const { stepFive, setStepFive } = useContext(TashilatContext)

  const changeHandler = (e) => {
    setStepFive(prevState => {
      const updated = prevState.approvals.map((item, index) => {
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
        approvals: updated
      };
    });
    console.log(stepFive);
  }
  const datechangeHandler = (e, InIndex) => {
    const day = e.value.getDate()
    const mouth = e.value.getMonth()
    const year = e.value.getFullYear()
    setStepFive(prevState => {
      const updated = prevState.approvals.map((item, index) => {
        if (index === parseInt(InIndex)) {
          return {
            ...item,
            date: `${year}-${mouth + 1}-${day}`
          };
        }
        return item;
      });
      return {
        ...prevState,
        approvals: updated
      };
    });
    console.log(stepFive);
  }
  return (
    <>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          وضعیت مجوزهای تأییدیه‌ها، استانداردها، پروانه تأسیس، پروانه بهره‌برداری و ثبت اختراع و ...
        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3 text-center ">رديف </th>
              <th className="bg-white p-3 text-center ">شرح مجوز، تائیدیه و...</th>
              <th className="bg-white p-3 text-center ">مرجع صادرکننده</th>
              <th className="bg-white p-3 text-center ">تاریخ صدور</th>
              <th className="bg-white p-3 text-center ">مدت اعتبار</th>
              <th className="bg-white p-3 text-center ">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {stepFive.approvals.length > 0 &&
              stepFive.approvals.map((item, index) => (
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
                        value={stepFive.approvals[index].license}
                        name="license"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepFive.approvals[index].reference}
                        name="reference"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <DatePicker
                        onChange={(e) => datechangeHandler(e, index)}
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
                        value={stepFive.approvals[index].validity}
                        name="validity"
                        id={index}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className="border border-gray-300 rounded-xl w-full"
                        onChange={changeHandler}
                        value={stepFive.approvals[index].description}
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
                        approvals: [
                          ...prev.approvals,
                          {
                            license: "test",
                            reference: "test",
                            date: "2022-02-02",
                            validity: "test",
                            description: "test"
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
